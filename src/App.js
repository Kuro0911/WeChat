import "./App.css";
import Chat from "./Chat";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import { useStateValue } from "./Stateprovider";
function App() {
  /*
  **implement  using back end ***
  import Pusher from "pusher-js";
  import axios from "./axios";
  useEffect(() => {
    const pusher = new Pusher("ca483be98c5f58141de1", {
      cluster: "ap2",
    });

    const channel = pusher.subscribe("messages");
    channel.bind("inserted", (newMessage) => {
      setMessage([...message, newMessage]);
    });
    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [message]);
  */
  const [user, dispatch] = useStateValue();

  return (
    <div className="App">
      {!user ? (
        <Login />
      ) : (
        <div className="app-body">
          <Router>
            <Sidebar />
            <Routes>
              <Route
                path="/rooms/:roomId"
                element={
                  <>
                    <Chat />
                  </>
                }
              />
            </Routes>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
