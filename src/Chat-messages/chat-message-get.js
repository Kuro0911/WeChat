import React from "react";
import "./chat-message-get.css";
function ChatMessageGet({ messages }) {
  /* backend using mongodb implementaion
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
  */
  return (
    <p className={`chat-get`}>
      <span className="chat-name">kuro</span>
      cool
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
