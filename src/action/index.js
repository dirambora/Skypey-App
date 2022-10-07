import { SET_ACTIVE_USER_ID,
SET_TYPING_VALUE
 } from "../Constants/action-types";

//lets have a function for the action creator
//it will take in an id of a user and return the action(the object with the type and payload rightly set.)
export const setActiveUserId =id => ({
    type:SET_ACTIVE_USER_ID,
     SET_TYPING_VALUE,

    payload:id
});

export const setTypingValue = value => ({
    type: SET_TYPING_VALUE,
    payload: value
  });