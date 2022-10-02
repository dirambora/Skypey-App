import React from 'react';
import "./App.css";
import Sidebar from "../Components/Sidebar";
import Main from "../Components/Main";
import _ from "lodash";
import store from '../Store';


const App = () => {
  const { contacts } = store.getState();
  return (
    <div className="App">
      <Sidebar contacts={_.values(contacts)} />
      <Main />
    </div>
  );
};

export default App;