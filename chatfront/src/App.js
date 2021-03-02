import React, { useState } from "react";
import socket from "./components/socket";
import "./App.css";

import Chat from "./components/Chat";
import ChatUsers from "./components/ChatUsers";

let contacts = [
  {
    name: "Echo Bot",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_0rZS2rGAq7irMkh6DH_pLFyi_uUI_hzTxQ&usqp=CAU",
    isOnline: true,
    messageHistory: [{ message: "Hello", toWhom: "me" }],
    id: 1,
  },
];

function App() {
  const [listUsers, setListUsers] = useState(contacts);
  const [choose, setChoose] = useState("1");

  socket.emit("ROOM:JOIN", "111");

  return (
    <>
      <div className="container">
        <Chat messagelist={listUsers} choose={choose} />
        <ChatUsers
          listUsers={listUsers}
          chooseUser={(item) => setChoose(item)}
        />
      </div>
    </>
  );
}

export default App;
