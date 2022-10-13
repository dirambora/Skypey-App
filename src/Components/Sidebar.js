import React from "react";
import User from "../containers/User";
import "./Sidebar.css";

const Sidebar = ({ contacts }) => {
  return (
    <aside className="Sidebar">
      {contacts.map(contact => <User user={contact} key={contact.user_id} />)}
    </aside>
  );
};

export default Sidebar;