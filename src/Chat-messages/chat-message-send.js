import React from "react";
import "./chat-message-send.css";
import InsertEmoticonOutlinedIcon from "@mui/icons-material/InsertEmoticonOutlined";
import MicOutlinedIcon from "@mui/icons-material/MicOutlined";
import { useState } from "react";
import db from "../firebase";
import { useStateValue } from "../Stateprovider";
import firebase from "firebase/compat/app";

function ChatMessageSend({ roomId }) {
  const [{ user }, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  /*
  import axios from "./axios1.js";

  const sendMessage = async (e) => {
    e.preventDefault();

    await axios.post("/messages/new", {
      message: input,
      name: `default`,
      received: true,
    });
    setInput("");
  };
  */
  const sendMessage = (e) => {
    e.preventDefault();
    db.collection("rooms").doc(roomId).collection("messages").add({
      imgsrc: user?.photoURL,
      message: input,
      name: user.displayName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      uid: user.uid,
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
