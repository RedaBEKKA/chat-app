import {ChatEngine} from "react-chat-engine"
import './App.css';
import ChatFeed from "./components/ChatFeed"
import Mymessage from './components/Mymessage'
import MessageForm from "./components/MessageForm"
import Theirmessage from "./components/Theirmessage"
function App() {
  return (
   <ChatEngine
    height="100vh"
    projectID="0803cc13-a03b-4ce0-abef-26e3c5401138"
    userName="AlSahim"
    userSecret="Azerty1997"
    renderChatFeed={(chatAppProps) => <ChatFeed  {...chatAppProps}/>}
   />

   
  );
}

export default App;
