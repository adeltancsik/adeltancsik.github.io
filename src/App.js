import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Intro from "./components/Intro";
import First from "./components/First";
import Second from "./components/Second";
import $ from "jquery";

class App extends Component {
  componentDidMount() {
    // Play initial animations on page load, then stop.
    $(document).ready(function() {
      $(window).on("load", function() {
        window.setTimeout(function() {
          $("#spinner").removeClass("lds-dual-ring");
        }, 100);
      });
    });
  }
  render() {
    return (
      <div id="app">
        <Route path="/" exact component={Intro} />
        <Route path="/" exact component={First} />
        <Route path="/" exact component={Second} />
        <div className="lds-dual-ring" id="spinner"></div>
      </div>
    );
  }
}

export default App;
