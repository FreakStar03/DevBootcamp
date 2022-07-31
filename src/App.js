import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import { Login } from "./Pages/Login";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Routes>
            <Route path="/DevBootCamp/" element={<Home />} />
            <Route
              path="/DevBootCamp/login"
              element={<Login value="login" />}
            />
            <Route
              path="/DevBootCamp/signup"
              element={<Login value="signup" />}
            />
          </Routes>
        </div>
      </Router>
    );
  }
}
