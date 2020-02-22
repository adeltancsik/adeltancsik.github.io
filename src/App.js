import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Intro from "./components/Intro";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" exact component={Intro} />
      </div>
    );
  }
}

export default App;
