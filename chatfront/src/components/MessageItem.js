import React from "react";

export default function MessageItem({ nameUser, message }) {
  const date = new Date().toLocaleTimeString();

  return (
    <li className="getMessage">
      <div>
        <p className="userName_get">{nameUser}</p>
        <span>{date}</span>
      </div>
      <p className="userMessage">{message}</p>
    </li>
  );
}
