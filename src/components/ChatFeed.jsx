import MessageForm from "./MessageForm";
import MyMessage from "./MyMessage";
import ThierMessage from "./TheirMessage";

const ChatFeed = (props) => {
  
  console.log(props)
  
  const { chats, activeChat, userName, messages} = props;
  
  const chat = chats && chats[activeChat];

  const renderReadRecepits = (message, isMyMessage) => chat.people.map( (person, index) => person.last_read === message.id && (
    <div>
      key = {`read_${index}`}
      className = "read-receipt"
      style = {{
        float: isMyMessage ? 'right' : 'left',
        backgroundImage : person.person.avatar && `url(${person.person.avatar})` ,
      }}
    </div>
  ))

  const renderMessage = () => {
    const keys = Object.keys(messages);

    return keys.map( (key, index) => {
      const message = messages[key];
      const lastMessageKey = index === 0 ? null : keys[index-1];
      const isMyMessage = userName === message.senders.userName;

      return (
        <div key={`msg_${index}`} style={{ width: "100%"}}>
          <div className="message-block">
            { isMyMessage
              ? <MyMessage message={message}/>
              : <ThierMessage message={message} lastMessage={messages
                [lastMessageKey]} /> }
          </div>

          <div className="read-reciept" style={{ marginRight: isMyMessage ? '18px' :
           '0px', marginLeft: isMyMessage ? '0px' : '68px' }}>{renderReadReceipts(message, isMyMessage)}</div>
        </div>
      );
    });
  }

  return (
    <div className="chat-feed">
      <div className="chat-title-container">
        <div className="chat-title">{chat?.title}</div>
        <div className="chat-subtitle">

        </div>
        {renderMessage()}
        <div style={{ height: '100px'}}/>
        <div className="message-form-container">
          <MessageForm {...props} chatId={activeChat} />
        </div>
      </div>
    </div>
  );
};

export default ChatFeed;
