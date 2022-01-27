import { Avatar } from "@mui/material";
import React from "react";
import "./SidebarChat.css";

function SidebarChat() {
  return (
    <div className="sidebarChat">
      <Avatar />
      <div className="sidebarChat-info">
        <h2>room name</h2>
        <p>niga moment</p>
      </div>
    </div>
  );
}

export default SidebarChat;
