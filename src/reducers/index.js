//combine the reducers in here
import user from "./User";
import contacts from "./contacts";
import { combineReducers } from "redux";

//import helper function(combineReducers) for combining the reducers
// both reducers will be imported like this
/*export default combineReducers({
    user,
    contacts,
});*/
export default combineReducers({
    user,
    contacts
});