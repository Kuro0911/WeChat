import React from "react";
import "./chat-message-get.css";
function ChatMessageGet({ messages }) {
  return (
    <div>
      {messages.map((msg) => {
        return (
          <p className={`chat-get ${msg.received && "chat-send"}`}>
            <span className="chat-name">{msg.name}</span>
            {msg.message}
            <span className="chat-time">
              {new Date().toLocaleTimeString("en-US", {
                hour12: false,
                hour: "numeric",
                minute: "numeric",
              })}
            </span>
          </p>
        );
      })}
    </div>
  );
}

export default ChatMessageGet;
