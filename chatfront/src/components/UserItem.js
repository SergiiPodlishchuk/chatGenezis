import React from "react";

export default function UserItem({ id, name, image, isOnline, handleClick }) {
  return (
    <li className="userItem" onClick={handleClick} id={id}>
      <div className="userItem_avatar">
        <img className="userItem_avatarImg" src={image} alt={name} />
      </div>
      <div className="userItem_about">
        <h4 className="userItem_name">{name}</h4>
        <p className="userItem_about_text">Lorem ipsum dolor sit amet</p>
      </div>
      {isOnline && <div className="userItem__isOnline"></div>}
    </li>
  );
}
