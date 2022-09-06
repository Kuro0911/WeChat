import React, { useEffect, useState } from "react";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChatIcon from "@mui/icons-material/Chat";
import SearchOutlined from "@mui/icons-material/SearchOutlined";
import "./Sidebar.css";
import { Avatar, IconButton } from "@mui/material";
import SidebarChat from "./SidebarChat";
import db from "./firebase";
import { useStateValue } from "./Stateprovider";

function Sidebar() {
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    const unsub = db.collection("rooms").onSnapshot((snapshot) =>
      setRooms(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
    return () => {
      unsub();
    };
  }, []);
  const [{ user }, dispatch] = useStateValue();
  const handleClick = () => {
    window.open("https://github.com/Kuro0911/WeChat");
  };
  return (
    <div className="side-bar">
      <div className="header">
        <Avatar src={user?.photoURL} />
        <div className="Rheader">
          <IconButton onClick={() => handleClick()}>
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
        {rooms.map((room) => (
          <SidebarChat
            key={room.id}
            id={room.id}
            name={room.data.name}
            description={room.data.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
