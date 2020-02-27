import React, { Component } from "react";
import quiz from "../assets/images/quiz.gif";
import info from "../assets/images/info.png";

export default class Fourth1 extends Component {
  render() {
    const { onVisible } = this.props;
    return (
      <div className="content span-4">
        <img src={quiz} alt="Quiz gif" className="fourth__pic" />
        <h2 className="major">
          Multiplayer Quiz
          <a href="https://quizam.netlify.com" target="_blank">
            <i className="fourth__icon fas fa-globe"></i>
          </a>
          <a
            href="https://github.com/mtabanja/week7-game-project-client"
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
          onClick={event => onVisible(event, 1)}
        >
          More info
        </button>
      </div>
    );
  }
}
