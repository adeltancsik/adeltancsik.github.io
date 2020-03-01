import React, { Component } from "react";

export default class Sixth extends Component {
  render() {
    const scrolling = () => {
      document.querySelector("#intro").scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center"
      });
    };
    return (
      <section id="sixth" className="panel">
        <div className="content span-4">
          <div className="to_right">
            <h1 className="major">Contact</h1>
            <p className="justifying">
              Feel free to connect and contact me. Cheers!
            </p>
            <a
              className="sixth__link"
              href="https://www.linkedin.com/in/adel-tancsik/"
              // eslint-disable-next-line
              target="_blank"
            >
              <i className="sixth__icon fab fa-linkedin"></i>
              linkedin.com/in/adel-tancsik
            </a>
            <a
              className="sixth__link"
              href="https://www.github.com/adeltancsik"
              // eslint-disable-next-line
              target="_blank"
            >
              <i className="sixth__icon fab fa-github-square"></i>
              github.com/adeltancsik
            </a>
          </div>
          <button className="arrow" onClick={scrolling}>
            <i className="arrow__icon fas fa-chevron-circle-left"></i>
          </button>
        </div>
      </section>
    );
  }
}
