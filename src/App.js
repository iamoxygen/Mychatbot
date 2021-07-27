
import './App.css';
import React from 'react';
import Chatbot from 'react-chatbot-kit';
import ActionProvider from './chatbot/ActionProvider';
import config from './chatbot/Config';
import MessageParser from './chatbot/MessageParser';

function App() {
  return (
    <div className="App">
      <div style={{maxWidth:"330px"}}>
     <Chatbot
      config={config}
      actionProvider={ActionProvider}
      messageParser={MessageParser}
     />
     </div>
    </div>
  );
}

export default App;
