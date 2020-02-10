import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Home from "./components/Home/Home";
import Signup from "./components/Signup/Signup";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/signup" component={Signup}></Route>
        <Route path="/profile" component={Profile}></Route>
      </Switch>
    </Router>
  );
}

export default App;
