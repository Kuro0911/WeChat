import React, { useState, useEffect } from "react";
import "./chat-message-get.css";
import db from "../firebase";

function ChatMessageGet({ roomId }) {
  const [message, setMessage] = useState([]);
  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .collection("messages")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) =>
          setMessage(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [roomId]);
  return (
    <div>
      {message.map((msg) => {
        return (
          <p className={`chat-get `}>
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
