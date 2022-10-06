import React from "react";
import store from "../store";
import Header from "../components/Header";
import Chats from "../Components/Chats";
import _ from "lodash";

const ChatWindow = ({ activeUserId }) => {
  //grab the state from reduux store
  const state = store.getState();
  //To keep track of the active user, a new variable, activeUser is created, and the value is retrieved from the state object like this:
  const activeUser = state.contacts[activeUserId];
  const activeMsgs =state.messages[activeUserId];
  return (
    <div className="ChatWindow">
      <Header user={activeUser} />
      {/* render the list of messages */}
      <Chats messages={_.values(activeMsgs)} />
    </div>
  );
};

export default ChatWindow;