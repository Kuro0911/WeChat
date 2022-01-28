import MoreVert from "@mui/icons-material/MoreVert";
import SearchOutlined from "@mui/icons-material/SearchOutlined";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";
import { Avatar, IconButton } from "@mui/material";
import ChatMessageGet from "./Chat-messages/chat-message-get";
import ChatMessageSend from "./Chat-messages/chat-message-send";
import React from "react";
import "./Chat.css";
function Chat({ name, message }) {
  return (
    <div className="chat">
      <div className="chat-header">
        <Avatar />

        <div className="head-info">
          <h3>Room Name</h3>
          <p>black nigga moment</p>
        </div>

        <div className="chat-Rheader">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFileOutlinedIcon />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>

      <div className="chat-body">
        <ChatMessageGet messages={message} />
      </div>
      <ChatMessageSend name={name} />
    </div>
  );
}

export default Chat;
