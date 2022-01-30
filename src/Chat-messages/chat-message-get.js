import React, { useState, useEffect } from "react";
import "./chat-message-get.css";
import { useStateValue } from "../Stateprovider";
import db from "../firebase";
import { Avatar } from "@mui/material";

function ChatMessageGet({ roomId }) {
  const [{ user }, dispatch] = useStateValue();
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
        const imgSRC = msg.imgsrc;
        return imgSRC === user.photoURL ? (
          <p className={`chat-get ${msg.uid === user.uid && "chat-send"}`}>
            {msg.message}
            <span className="chat-time">
              {new Date().toLocaleTimeString("en-US", {
                hour12: false,
                hour: "numeric",
                minute: "numeric",
              })}
            </span>
          </p>
        ) : (
          <div className={`chat-container`}>
            <Avatar className="ava" src={msg.imgsrc}></Avatar>
            <p className={`chat-get ${msg.uid === user.uid && "chat-send"}`}>
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
          </div>
        );
      })}
    </div>
  );
}

export default ChatMessageGet;
