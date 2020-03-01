import React, { Component } from "react";
import testClient from "../assets/images/test-client.gif";
import info from "../assets/images/info.png";

export default class Fourth2 extends Component {
  render() {
    const { onVisible } = this.props;
    return (
      <div className="content span-4">
        <img src={testClient} alt="Test Client gif" className="fourth__pic" />
        <h2 className="major">
          Codaisseur's Dynamic Student Assessment
          <a
            href="https://www.github.com/Official-Codaisseur-Graduate/Dynamic-Student-Assessment-Server"
            // eslint-disable-next-line
            target="_blank"
          >
            <i className="fourth__icon fab fa-github"></i>
          </a>
        </h2>
        <div className="fourth">
          <ul className="fourth__list">
            <li className="fourth__item">Group project</li>
            <li className="fourth__item">Full-stack</li>
            <li className="fourth__item">Legacy code</li>
            <li className="fourth__item">JavaScript(ES6)</li>
            <li className="fourth__item">React.js, Redux</li>
            <li className="fourth__item">Material UI</li>
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
          onClick={event => onVisible(event, 2)}
        >
          More info
        </button>
      </div>
    );
  }
}
