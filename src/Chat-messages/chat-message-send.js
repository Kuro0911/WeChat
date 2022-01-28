import React from "react";
import "./chat-message-send.css";
import InsertEmoticonOutlinedIcon from "@mui/icons-material/InsertEmoticonOutlined";
import MicOutlinedIcon from "@mui/icons-material/MicOutlined";
function ChatMessageSend() {
  return (
    <div className="chat-foot">
      <InsertEmoticonOutlinedIcon />
      <form>
        <input placeholder="Type a message..." type="text" />
        <button type="submit">send</button>
      </form>
      <MicOutlinedIcon />
    </div>
  );
}

export default ChatMessageSend;
