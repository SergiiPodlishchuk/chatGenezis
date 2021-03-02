import React from "react";
import UserItem from "./UserItem";

export default function ChatUsers({ listUsers, chooseUser }) {
  return (
    <div className="chatUsers">
      <nav className="chatUsers__nav">
        <h3 className="isActive">Online</h3>
        <h3>All</h3>
      </nav>

      <ul className="listUsers">
        {listUsers.map(({ id, name, image, isOnline }) => (
          <UserItem
            id={id}
            key={id}
            name={name}
            image={image}
            isOnline={isOnline}
            handleClick={(e) => chooseUser(e.currentTarget.id)}
          />
        ))}
      </ul>

      <input className="searchUser" type="text" placeholder="Search" />
    </div>
  );
}
