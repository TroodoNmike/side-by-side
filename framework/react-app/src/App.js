import React from 'react';
import './App.css';
import AppParentBasic from "./parent/ParentBasic";
import {
    Switch,
    Route,
    HashRouter
} from "react-router-dom";
import AppParentBasicInput from "./parent/ParentBasicInput";

function App() {
  return (
    <div className="align-center">
        <HashRouter basename={process.env.PUBLIC_URL}>
        <Switch>
            <Route path="/msg">
                <AppParentBasicInput />
            </Route>
            <Route path="/">
                <AppParentBasic />
            </Route>
        </Switch>
        </HashRouter>
    </div>
  );
}

export default App;
