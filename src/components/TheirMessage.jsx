
const TheirMessage = ({ lastMessage, message }) => {
  const isFirstMessageByUser = 
    !lastMessage || lastMessage.sender.username !== message.sender.username;
   
  return (
    <div className="message-row">
      {isFirstMessageByUser && (
        <div
          className="message-avater"
          style= {{ backgroudImage: message.sender && `url(${message.sender.avatar})`}}
        />
      )}

    {message.attachments && message.attachments.length>0 
    ? (
      <img
        src={message.attachment[0].file}
        alt="message-attachment"
        className="message-image"
        style={{ marginLeft: isFirstMessage ? '4px' : '48px' }}
      />
    )
    : (
        <div className="message" style={{ float:'left', backgroundColor: '#CABCDC', 
        marginLeft: isFirstMessageByUser ? '4px' : '48px' }}>
        {message.text}
        </div>
    )
  
  }

    </div>
    );
};

export default TheirMessage;
