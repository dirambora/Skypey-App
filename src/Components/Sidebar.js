import React from "react";
// import User from "./User";
import "./Sidebar.css";
import User from "../Containers/User";

const Sidebar = ({ contacts }) => {
  return (
    <aside className="Sidebar">
      {contacts.map(contact => <User user={contact} key={contact.user_id} />)}
    </aside>
  );
};
export default Sidebar;