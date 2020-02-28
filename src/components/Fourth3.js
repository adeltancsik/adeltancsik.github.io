import React, { Component } from "react";
import ticketSwap from "../assets/images/ticket-swap.gif";
import info from "../assets/images/info.png";

export default class Fourth3 extends Component {
  render() {
    const { onVisible } = this.props;
    return (
      <div className="content span-4">
        <img src={ticketSwap} alt="Ticket Swap gif" className="fourth__pic" />
        <h2 id="project_title" className="major project_title">
          Ticket Swap
        </h2>
        <div className="fourth">
          <ul className="fourth__list">
            <li className="fourth__item">Final assignment of Codaisseur</li>
            <li className="fourth__item">Full-stack</li>
            <li className="fourth__item">JavaScript(ES6)</li>
            <li className="fourth__item">React.js, Redux</li>
            <li className="fourth__item">React Bootstrap</li>
            <li className="fourth__item">CSS3</li>
            <li className="fourth__item">HTML5</li>
            <li className="fourth__item">NodeJS</li>
            <li className="fourth__item">PostgreSQL</li>
            <li className="fourth__item">Express, Sequelize, JWT</li>
          </ul>
          <img src={info} alt="Info" className="fourth__info" />
        </div>
        <button
          className="btn btn--white btn--text remove-style"
          onClick={event => onVisible(event, 3)}
        >
          More info
        </button>
      </div>
    );
  }
}
