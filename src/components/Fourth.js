import React, { Component } from "react";
import natours from "../assets/images/natours.gif";
import Popup1 from "./Popup1";

export default class Fourth extends Component {
  state = { visible: false };
  render() {
    const onVisible = event => {
      event.preventDefault();
      this.setState({ visible: true });
    };
    return (
      <section id="fourth" className="panel">
        <div className="content span-4">
          <img src={natours} alt="natours-gif" className="fourth__pic" />

          <h2 className="major">Natours</h2>
          <ul className="fourth__list">
            <li className="fourth__item">Front-end:</li>
            <ul className="fourth__list-2">
              <li className="fourth__item">JavaScript (ES6)</li>
              <li className="fourth__item">SASS</li>
              <li className="fourth__item">CSS3 animations included</li>
              <li className="fourth__item">HTML5</li>
            </ul>
            <li className="fourth__item">Full-stack</li>
            <li className="fourth__item">Full-stack</li>
          </ul>
          <button className="btn btn--white remove-style" onClick={onVisible}>
            More info
          </button>
        </div>
        {this.state.visible ? <Popup1></Popup1> : ""}
      </section>
    );
  }
}
