import React from "react";
import Header from "../components/Header";
import MessageInput from "./MessageInput";

import store from "../store";
import Chats from "../components/Chats";
import _ from "lodash";
import "./ChatWindow.css";

const ChatWindow = ({ activeUserId }) => {
  const state = store.getState();
  const activeUser = state.contacts[activeUserId];
  const activeMsgs = state.messages[activeUserId];
  const { typing } = state;

  return (
    <div className="ChatWindow">
      <Header user={activeUser} />
      <Chats messages={_.values(activeMsgs)} />
      <MessageInput value={typing} />

    </div>
  );
};

export default ChatWindow;