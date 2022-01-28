import React from "react";
import "./chat-message-get.css";
function ChatMessageGet() {
  return (
    <p className="chat-get">
      <span className="chat-name">kuro</span>
      this is what i GET suiii
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

export default ChatMessageGet;
