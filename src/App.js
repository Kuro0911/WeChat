import { useEffect, useState } from "react";
import Pusher from "pusher-js";
import "./App.css";
import Chat from "./Chat";
import Sidebar from "./Sidebar";
import axios from "./axios";
function App() {
  const [message, setMessage] = useState([]);
  useEffect(() => {
    axios.get("/messages/sync").then((response) => {
      setMessage(response.data);
    });
  }, []);

  useEffect(() => {
    const pusher = new Pusher("ca483be98c5f58141de1", {
      cluster: "ap2",
    });

    const channel = pusher.subscribe("messages");
    channel.bind("inserted", (newMessage) => {
      alert(JSON.stringify(newMessage));
      setMessage([...message, newMessage]);
    });
    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [message]);

  console.log(message);

  return (
    <div className="App">
      <div className="app-body">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
