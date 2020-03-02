import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import $ from "jquery";
import { CSSTransition } from "react-transition-group";
import Intro from "./components/Intro";
import First from "./components/First";
import Second from "./components/Second";
import Third from "./components/Third";
import Fourth from "./components/Fourth";
import Popup5 from "./components/Popup5";
import Popup4 from "./components/Popup4";
import Popup3 from "./components/Popup3";
import Popup2 from "./components/Popup2";
import Popup1 from "./components/Popup1";
import FadeInSection from "./components/FadeInSection";
import Fifth from "./components/Fifth";
import Sixth from "./components/Sixth";

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

  state = {
    visible5: false,
    visible4: false,
    visible3: false,
    visible2: false,
    visible1: false
  };

  onVisible = (event, num) => {
    event.preventDefault();
    switch (num) {
      case 5:
        !this.state.visible5
          ? this.setState({ visible5: true })
          : this.setState({ visible5: false });
        break;
      case 4:
        !this.state.visible4
          ? this.setState({ visible4: true })
          : this.setState({ visible4: false });
        break;
      case 3:
        !this.state.visible3
          ? this.setState({ visible3: true })
          : this.setState({ visible3: false });
        break;
      case 2:
        !this.state.visible2
          ? this.setState({ visible2: true })
          : this.setState({ visible2: false });
        break;
      default:
        !this.state.visible1
          ? this.setState({ visible1: true })
          : this.setState({ visible1: false });
        break;
    }
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
              render={props => <Fourth {...props} onVisible={this.onVisible} />}
            />
          </FadeInSection>
          <FadeInSection>
            <Route path="/" exact component={Fifth} />
          </FadeInSection>
          <FadeInSection>
            <Route path="/" exact component={Sixth} />
          </FadeInSection>
          {this.state.visible5 ? (
            <Route
              path="/"
              render={props => (
                <Popup5
                  {...props}
                  onVisible={this.onVisible}
                  visible5={this.state.visible5}
                />
              )}
            />
          ) : (
            ""
          )}
          {this.state.visible4 ? (
            <Route
              path="/"
              render={props => (
                <Popup4
                  {...props}
                  onVisible={this.onVisible}
                  visible4={this.state.visible4}
                />
              )}
            />
          ) : (
            ""
          )}
          {this.state.visible3 ? (
            <Route
              path="/"
              render={props => (
                <Popup3
                  {...props}
                  onVisible={this.onVisible}
                  visible3={this.state.visible3}
                />
              )}
            />
          ) : (
            ""
          )}
          {this.state.visible2 ? (
            <Route
              path="/"
              render={props => (
                <Popup2
                  {...props}
                  onVisible={this.onVisible}
                  visible2={this.state.visible2}
                />
              )}
            />
          ) : (
            ""
          )}
          {this.state.visible1 ? (
            <Route
              path="/"
              render={props => (
                <Popup1
                  {...props}
                  onVisible={this.onVisible}
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
