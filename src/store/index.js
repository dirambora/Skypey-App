import { createStore } from "redux";
import reducer from "../reducers";
import { contacts } from "../static-data";
//removed the initial state from createStore

const store = createStore(reducer);

export default store;