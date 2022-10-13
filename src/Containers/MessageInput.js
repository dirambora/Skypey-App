import React from "react";
import store from "../store";
import { setTypingValue } from "../action";
import "./MessageInput.css";
const MessageInput = ({ value }) => {

    const handleChange = e => {
        store.dispatch(setTypingValue(e.target.value));
    };
    return (
        <form className="Message" onSubmit={handleSubmit}>
            <input
                className="Message__input"
                onChange={handleChange}
                value={value}
                placeholder="write a message"
            /> </form>

            

    );
    //first retrieve the current state object
const state = store.getState();
const handleSubmit = e => {
  e.preventDefault();
  const { typing, activeUserId } = state;
  store.dispatch(sendMessage(typing, activeUserId));
};
};
export default MessageInput;