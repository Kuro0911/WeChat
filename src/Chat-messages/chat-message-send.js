import React from "react";
import "./chat-message-send.css";
import InsertEmoticonOutlinedIcon from "@mui/icons-material/InsertEmoticonOutlined";
import MicOutlinedIcon from "@mui/icons-material/MicOutlined";
import { useState } from "react";
import axios from "./axios1.js";
function ChatMessageSend() {
  const [input, setInput] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    await axios.post("/messages/new", {
      message: input,
      name: `default`,
      received: true,
    });
    setInput("");
  };

  return (
    <div className="chat-foot">
      <InsertEmoticonOutlinedIcon />
      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          type="text"
        />
        <button onClick={sendMessage} type="submit">
          send
        </button>
      </form>
      <MicOutlinedIcon />
    </div>
  );
}

export default ChatMessageSend;
