import MoreVert from "@mui/icons-material/MoreVert";
import SearchOutlined from "@mui/icons-material/SearchOutlined";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";
import { Avatar, IconButton } from "@mui/material";
import ChatMessageGet from "./Chat-messages/chat-message-get";
import ChatMessageSend from "./Chat-messages/chat-message-send";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Chat.css";
import db from "./firebase";
function Chat({ name }) {
  const { roomId } = useParams();
  const [roomName, setRoomName] = useState("");
  const [roomDesc, setRoomDesc] = useState("");

  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => setRoomName(snapshot.data().name));
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => setRoomDesc(snapshot.data().description));
    }
  }, [roomId]);

  return (
    <div className="chat">
      <div className="chat-header">
        <Avatar
          src={`https://avatars.dicebear.com/api/identicon/${roomId}.svg`}
        />

        <div className="head-info">
          <h3>{roomName}</h3>
          <p>{roomDesc}</p>
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
        <ChatMessageGet roomId={roomId} />
      </div>
      <ChatMessageSend roomId={roomId} />
    </div>
  );
}

export default Chat;
