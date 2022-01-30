import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import db from "./firebase";
import "./SidebarChat.css";
import { Link } from "react-router-dom";

function SidebarChat({ id, name, description, addNewChat }) {
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (id) {
      db.collection("rooms")
        .doc(id)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setMessage(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [id]);

  const createChat = () => {
    const roomName = prompt("please enter name for chat room");
    const roomDesc = prompt("please enter description of the chat room");
    if (roomName) {
      db.collection("rooms").add({
        name: roomName,
        description: roomDesc,
      });
    }
  };
  return !addNewChat ? (
    <Link to={`/rooms/${id}`}>
      <div className="sidebarChat">
        <Avatar src={`https://avatars.dicebear.com/api/identicon/${id}.svg`} />
        <div className="sidebarChat-info">
          <h2>{name}</h2>
          <p>{message[0]?.message}</p>
        </div>
      </div>
    </Link>
  ) : (
    <div onClick={createChat} className="sidebarChat">
      <h2>Add New Chat</h2>
    </div>
  );
}

export default SidebarChat;
