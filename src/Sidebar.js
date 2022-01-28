import React from "react";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChatIcon from "@mui/icons-material/Chat";
import SearchOutlined from "@mui/icons-material/SearchOutlined";
import "./Sidebar.css";
import { Avatar, IconButton } from "@mui/material";
import SidebarChat from "./SidebarChat";

function Sidebar() {
  return (
    <div className="side-bar">
      <div className="header">
        <Avatar src="https://lh3.googleusercontent.com/kOODH1UDaCQ99JPkQXZY3PvkEcuY2B0DS7exApJ9r3PFDWjINbUgKI9kJI0kxnSwzohlk63Zmqi04CoJIg-SQBfXKmKjFxpgpAbFcqxvx3bS435TxbOgCTAbgWFre16FC9ywQ79IYQ=w2400" />
        <div className="Rheader">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar-search">
        <div className="sidebar-search-cont">
          <SearchOutlined />
          <input placeholder="Search or start a new chat" type="text" />
        </div>
      </div>
      <div className="sidebar-chat">
        <SidebarChat addNewChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  );
}

export default Sidebar;
