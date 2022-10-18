import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";
import "./styles.css";
function App() {
  return (
    <div className="App">
      <ChatEngine
        height="100vh"
        projectID="b0e59ad1-d778-49e3-aec6-c2ec8f461c58"
        userName="john"
        userSecret="qwert"
        renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps  } />}
        onNewmessage = {() =>
          new Audio("hhtps://chat-engine-assets.s3.amazonaws.com/click.mp3")
        }
      />
    </div>
  );
}

export default App;
