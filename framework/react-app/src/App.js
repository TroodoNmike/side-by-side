import React from 'react';
import './App.css';
import AppBasic from "./components/Basic";
import AppBasicInput from "./components/BasicInput";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, HashRouter
} from "react-router-dom";

function App() {
  return (
    <div className="align-center">
        <HashRouter basename={process.env.PUBLIC_URL}>
        <Switch>
            <Route path="/msg">
                <AppBasicInput msg={'I am message'} />
            </Route>
            <Route path="/">
                <AppBasic />
            </Route>
        </Switch>
        </HashRouter>
    </div>
  );
}

export default App;
