import React from "react";
import "./chat-message-send.css";

function ChatMessageSend() {
  return (
    <p className="chat-send">
      <span className="chat-name">NOT kuro</span>
      this is what i send suii
      <span className="chat-time">
        {new Date().toLocaleTimeString("en-US", {
          hour12: false,
          hour: "numeric",
          minute: "numeric",
        })}
      </span>
    </p>
  );
}

export default ChatMessageSend;
