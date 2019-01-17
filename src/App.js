import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";

import Routes from "./components/Routes/Routes.js";

import Toolbar from "./components/Toolbar/Toolbar";
import SignOut from "./components/SignOut/SignOut.js";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Toolbar />
          <SignOut />
          <Routes className="routes" />
          {/* <Footer /> */}
        </div>
      </Router>
    );
  }
}

export default withAuthentication(App);
