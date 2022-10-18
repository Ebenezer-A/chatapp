import MessageForm from "./MessageForm";
import MyMessage from "./MyMessage";
import ThierMessage from "./TheirMessage";

const ChatFeed = (props) => {
  
  console.log(props)
  
  const { chats, activeChat, userName, messages} = props;
  
  const chat = chats && chats[activeChat];

  const renderMessage = () => {
    const keys = Object.keys(messages);

    return keys.map( (key, index) => {
      const message = messages[key];
      const lastMessageKey = index === 0 ? null : keys[index-1];
      const isMyMessage = userName === message.senders.userName;

      return (
        <div key={`msg_${index}`} style={{ width: "100%"}}>
          <div className="message-blo">
            { isMyMessage
              ? <MyMessage message={message}/>
              : <ThierMessage message={message} lastMessage={messages
                [lastMessageKey]} /> }
          </div>

          <div className="read-reciept" style={{ marginRight: isMyMessage ? '18px' : '0px', marginLeft: isMyMessage ? '0px' : '68pc' }}></div>
        </div>
      );
    });
  }

  return (
    <div className="chat-feed">
      <div className="chat-title-container">
        <div className="chat-title">{chat?.title}</div>
        <div className="chat-">

        </div>
        {renderMessage()}
        <div style={{ height: '100px'}}/>
        <div className="message-form-container">
          <MessageForm {...props} chatId={activeChat} />
        </div>
      </div>
    </div>);
};

export default ChatFeed;
