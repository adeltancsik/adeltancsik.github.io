import React, { Component } from "react";
import natours from "../assets/images/natours.gif";
import info from "../assets/images/info.png";

export default class Fourth extends Component {
  render() {
    return (
      <section id="fourth" className="panel">
        <div className="content span-4">
          <img src={natours} alt="natours-gif" className="fourth__pic" />
          <h2 className="major">
            Natours
            <a
              href="https://natours-learning-project.netlify.com"
              target="_blank"
            >
              <i className="fourth__icon icon-basic-world"></i>
            </a>
            <a
              href="https://natours-learning-project.netlify.com"
              target="_blank"
            >
              <i className="fourth__icon icon-basic-world"></i>
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
            onClick={this.props.onVisible}
          >
            More info
          </button>
        </div>
      </section>
    );
  }
}
