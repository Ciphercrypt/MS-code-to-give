import React from 'react';
import './styles/dialogStyle.css';

export default function dialog({visible}) {

  

  return (
    <>
  
      <df-messenger
        chat-icon="https://i.postimg.cc/hvq6KhLw/png-clipart-internet-bot-chatbot-business-chatbot-avatar-child-face-thumbnail-removebg-preview.png"
        intent="WELCOME"
        chat-title="Stree"
        agent-id="aada74d0-e686-4088-b654-f0494573b8e7"
        language-code="en"
        visible={visible}
      ></df-messenger>
  

    
    </>
  )
}