import React, { Component } from "react";
import journeyPlanner from "../assets/images/journey-planner.gif";
import info from "../assets/images/info.png";

export default class Fourth4 extends Component {
  render() {
    const { onVisible } = this.props;
    return (
      <div className="content span-4">
        <img
          src={journeyPlanner}
          alt="Journey Planner gif"
          className="fourth__pic"
        />
        <h2 className="major">
          Journey Planner
          <a
            href="https://www.github.com/adeltancsik/client-journey-planner"
            target="_blank"
          >
            <i className="fourth__icon fab fa-github"></i>
          </a>
        </h2>
        <div className="fourth">
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
          <img src={info} alt="Info" className="fourth__info" />
        </div>
        <button
          className="btn btn--white remove-style"
          onClick={event => onVisible(event, 4)}
        >
          More info
        </button>
      </div>
    );
  }
}
