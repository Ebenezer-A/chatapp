import { PictureOutlined, SendOutlined } from "@ant-design/icons";
import { useState } from "react";
import { isTyping, sendMessage } from "react-chat-engine";


const MessageForm = () => {

  const [value, setValue] = useState('');
  const {chatId, creds} = props;

  const handelChange = (event) => {
      setValue(event.target.value);
      isTyping(props, chatId);
  }

  const handelSubmit = (event) => {
      event.preventDefault();

      const text = value.trim();

      if(text.length > 0){
        sendMessage(creds, chatId, {text});
      }
      setValue('');
  }

  const handelUpload = (event) => {
      sendMessage(creds, chatId, {files: event.target.files, text:' '});
  }

  return (
    <form className="message-form" onSubmit="handelsubmit">
      <input
        className = "message-input"
        placefolder = "Send a message..."
        onsubmit = {handelSubmit}
        onChange = {handelChange}
      />

      <label htmlFor="upload-button" >
        <span className="image-button">
          <PictureOutlined className="picture-icon" />
        </span>
      </label>

      <input
        type="file"
        multiple={false}
        id="upload-button"
        style={{ display: 'none'}}
        onChange={handelUpload.bid(this)}
      />

      <button type="submit" className="send-button">
        <SendOutlined className="send-icon" />
      </button>
    </form>
  );
};

export default MessageForm;
