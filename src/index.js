import ReactDOM from "react-dom";
import React from "react";
import "./index.css";
import App from "./Containers/App";

import store from "./Store";
const render = () => {
  fancyLog();
  return ReactDOM.render(<App />, document.getElementById("root"));
};
render();
store.subscribe(render);
function fancyLog() {
  console.log("%c Rendered with 👉👉👇", "background: purple; color: #FFF"); console.log(store.getState());
}