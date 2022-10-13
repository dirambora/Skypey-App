import React from "react";
import "./User.css";
import store from "../store";
import { setActiveUserId, deleteContact } from "../action";

const User = ({ user }) => {
  const { name, profile_pic, status } = user;

  return (
    <div className="User" onClick={handleUserClick.bind(null, user)}>
      <p className="User__closeIcon" onClick={(e) => handleCrossClick(e, user.user_id)}> X </p>
      <img src={profile_pic} alt={name} className="User__pic" />
      <div className="User__details">
        <p className="User__details-name">{name}</p>
        <p className="User__details-status">{status}</p>
      </div>
    </div>

  );
};

function handleUserClick({ user_id }) {
  store.dispatch(setActiveUserId(user_id));
}

function handleCrossClick(e, user_id) {
  e.stopPropagation();
  //Dispatch action here
}

export default User;