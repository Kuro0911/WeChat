import MoreVert from "@mui/icons-material/MoreVert";
import SearchOutlined from "@mui/icons-material/SearchOutlined";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";
import InsertEmoticonOutlinedIcon from "@mui/icons-material/InsertEmoticonOutlined";
import MicOutlinedIcon from "@mui/icons-material/MicOutlined";
import { Avatar, IconButton } from "@mui/material";
import ChatMessageGet from "./Chat-messages/chat-message-get";
import ChatMessageSend from "./Chat-messages/chat-message-send";
import React from "react";
import "./Chat.css";
function Chat() {
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
        <ChatMessageSend />
        <ChatMessageGet />
      </div>
      <div className="chat-foot">
        <InsertEmoticonOutlinedIcon />
        <form>
          <input placeholder="Type a message..." type="text" />
          <button type="submit">send</button>
        </form>
        <MicOutlinedIcon />
      </div>
    </div>
  );
}

export default Chat;
