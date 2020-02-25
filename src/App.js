import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Intro from "./components/Intro";
import First from "./components/First";
import Second from "./components/Second";
import Third from "./components/Third";
import FadeInSection from "./components/FadeInSection";
import Fourth from "./components/Fourth";
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
        <FadeInSection>
          <Route path="/" exact component={Third} />
        </FadeInSection>
        <FadeInSection>
          <Route path="/" exact component={Fourth} />
        </FadeInSection>
        <div className="lds-dual-ring" id="spinner"></div>
      </div>
    );
  }
}

export default App;
