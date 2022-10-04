import React from 'react';
import "./App.css";
import Sidebar from "../Components/Sidebar";
import Main from "../Components/Main";
import _ from "lodash";
import store from '../store';
import activeUserId from '../reducers/activeUserId';

const App = () => {

  const {contacts,user,activeUserId} =store.getState();
  return (
    <div className="App">
      <Sidebar contacts={_.values(contacts)} />
      <Main user={user} activeUserId={activeUserId} />
    </div>
  );
};

export default App;