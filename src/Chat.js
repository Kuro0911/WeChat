import MoreVert from "@mui/icons-material/MoreVert";
import SearchOutlined from "@mui/icons-material/SearchOutlined";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";
import InsertEmoticonOutlinedIcon from "@mui/icons-material/InsertEmoticonOutlined";
import MicOutlinedIcon from "@mui/icons-material/MicOutlined";
import { Avatar, IconButton } from "@mui/material";
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
        <p className="chat-message">
          <span className="chat-name">kuro</span>
          suiiii
          <span className="chat-time">
            {new Date().toLocaleTimeString("en-US", {
              hour12: false,
              hour: "numeric",
              minute: "numeric",
            })}
          </span>
        </p>
        <p className="chat-message chat-get">
          <span className="chat-name">NOT kuro</span>
          suuuuuuuiiiiiiiiiiii
          <span className="chat-time">
            {new Date().toLocaleTimeString("en-US", {
              hour12: false,
              hour: "numeric",
              minute: "numeric",
            })}
          </span>
        </p>
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
