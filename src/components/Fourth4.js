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
            // eslint-disable-next-line
            target="_blank"
          >
            <i className="fourth__icon fab fa-github"></i>
          </a>
        </h2>
        <div className="fourth">
          <ul className="fourth__list">
            <li className="fourth__item">Full-stack</li>
            <li className="fourth__item">Hackathon challenge</li>
            <li className="fourth__item">JavaScript(ES6)</li>
            <li className="fourth__item">React Hooks, Redux</li>
            <li className="fourth__item">React Bootstrap</li>
            <li className="fourth__item">Moment.js</li>
            <li className="fourth__item">NodeJS</li>
            <li className="fourth__item">PostgreSQL</li>
            <li className="fourth__item">Express, Sequelize, JWT</li>
          </ul>
        </div>
        <div className="fourth__btn-container">
          <button
            className="btn btn--white btn--text remove-style"
            onClick={event => onVisible(event, 4)}
          >
            More info
          </button>
          <img src={info} alt="Info" className="fourth__info" />
        </div>
      </div>
    );
  }
}
