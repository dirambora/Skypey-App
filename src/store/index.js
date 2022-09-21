import {createStore}from "redux";
import reducer from "../reducers";
import { contacts } from "../static-data";
const store =createStore(rducer,{contacts});
export default store;