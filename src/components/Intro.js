import React, { Component } from "react";

export default class Intro extends Component {
  render() {
    return (
      <div id="intro">
        <h1>Welcome to my portfolio!</h1>
        <div className="lds-dual-ring" id="spinner"></div>
      </div>
    );
  }
}
