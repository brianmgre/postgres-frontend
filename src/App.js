import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";

import Routes from "./components/Routes/Routes.js";

import Toolbar from "./components/Toolbar/Toolbar";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Toolbar />
          <Routes className="routes" />
          {/* <Footer /> */}
        </div>
      </Router>
    );
  }
}

export default App;
