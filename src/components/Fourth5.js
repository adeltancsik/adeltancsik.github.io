import React, { Component } from "react";
import natours from "../assets/images/natours.gif";
import info from "../assets/images/info.png";

export default class Fourth5 extends Component {
  render() {
    const { onVisible } = this.props;
    return (
      <div className="content span-4" id="fourth5">
        <img src={natours} alt="natours-gif" className="fourth__pic" />
        <h2 className="major">
          Natours
          <a
            href="https://natours-learning-project.netlify.com"
            // eslint-disable-next-line
            target="_blank"
          >
            <i className="fourth__icon fas fa-globe"></i>
          </a>
          , Trillo
          <a
            href="https://trillo-learning-project.netlify.com"
            // eslint-disable-next-line
            target="_blank"
          >
            <i className="fourth__icon fas fa-globe"></i>
          </a>
          and Nexter
          <a
            href="https://nexter-learning-project.netlify.com"
            // eslint-disable-next-line
            target="_blank"
          >
            <i className="fourth__icon fas fa-globe"></i>
          </a>
        </h2>
        <div className="fourth">
          <ul className="fourth__list">
            <li className="fourth__item">Responsive</li>
            <li className="fourth__item">Animations</li>
            <li className="fourth__item">Flexbox</li>
            <li className="fourth__item">Grid</li>
            <li className="fourth__item">Sass</li>
            <li className="fourth__item">CSS3</li>
            <li className="fourth__item">HTML5</li>
            <li className="fourth__item">jQuery</li>
          </ul>
        </div>
        <div className="fourth__btn-container">
          <button
            className="btn btn--white btn--text remove-style"
            onClick={event => onVisible(event, 5)}
          >
            More info
          </button>
          <img src={info} alt="Info" className="fourth__info" />
        </div>
      </div>
    );
  }
}
