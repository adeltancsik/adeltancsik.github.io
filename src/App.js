import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Intro from "./components/Intro";
import First from "./components/First";
import Second from "./components/Second";
import Third from "./components/Third";
import FadeInSection from "./components/FadeInSection";
import Fourth from "./components/Fourth";
import Popup1 from "./components/Popup1";
import $ from "jquery";
import { CSSTransition } from "react-transition-group";

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

  state = { visible1: false };

  onVisible1 = event => {
    event.preventDefault();
    !this.state.visible1
      ? this.setState({ visible1: true })
      : this.setState({ visible1: false });
  };

  render() {
    return (
      <CSSTransition in={true} appear={true} timeout={2000} classNames="fade">
        <div id="app">
          <Route path="/" exact component={Intro} />
          <Route path="/" exact component={First} />
          <Route path="/" exact component={Second} />
          <FadeInSection>
            <Route path="/" exact component={Third} />
          </FadeInSection>
          <FadeInSection>
            <Route
              path="/"
              render={props => (
                <Fourth {...props} onVisible={this.onVisible1} />
              )}
            />
          </FadeInSection>
          {this.state.visible1 ? (
            <Route
              path="/"
              render={props => (
                <Popup1
                  {...props}
                  onVisible={this.onVisible1}
                  visible1={this.state.visible1}
                />
              )}
            />
          ) : (
            ""
          )}
          <div className="lds-dual-ring" id="spinner"></div>
        </div>
      </CSSTransition>
    );
  }
}

export default App;
