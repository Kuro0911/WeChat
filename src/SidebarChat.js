import { Avatar } from "@mui/material";
import React from "react";
import db from "./firebase";
import "./SidebarChat.css";
import { Link } from "react-router-dom";

function SidebarChat({ id, name, description, addNewChat }) {
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
          <p>{description}</p>
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
