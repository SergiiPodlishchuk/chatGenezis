import React from "react";
import axios from "axios";
import MessageItem from "./MessageItem";

export default function Chat({ messagelist, choose }) {
  const userToDialog = messagelist.find(({ id }) => id === +choose);
  const [value, setValue] = React.useState("");

  const handlerSubmit = (e) => {
    e.preventDefault();
    if (!value) {
      return alert("Введите что нибудь");
    }
    axios.post("http://localhost:8080/chat", { value });
    setValue("");
  };

  return (
    <div className="chatMenu">
      <header className="header">
        <div>
          <img src={userToDialog.image} alt={userToDialog.name} />
        </div>
        <div>
          <h3>{userToDialog.name}</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          </p>
        </div>
      </header>
      <main className="mainMenu">
        <ul className="listMessages">
          {userToDialog.messageHistory.map(({ message, toWhom }) => (
            <MessageItem key={message} nameUser={toWhom} message={message} />
          ))}
        </ul>
        <p className="alertEvent">Reverse bot is typing...</p>
        <form className="formSend" onSubmit={handlerSubmit}>
          <input
            type="text"
            name="message"
            placeholder="Start chating"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button type="submit">Send message</button>
        </form>
      </main>
    </div>
  );
}
