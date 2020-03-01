import React, { Component } from "react";

export default class First extends Component {
  render() {
    const scrolling = () => {
      document.querySelector("#second").scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center"
      });
    };
    return (
      <section id="first" className="panel">
        <div className="content span-5-5">
          <h1 className="major title">
            Hello, my name is
            <span>
              <h1 className="name title">Adél Tancsik</h1>
            </span>
          </h1>
          <p>
            This is my Portfolio, hope you enjoy it.
            <br />
            Feel free to connect and contact me on&nbsp;
            <a
              href="https://www.linkedin.com/in/adel-tancsik/"
              // eslint-disable-next-line
              target="_blank"
            >
              Linkedin
            </a>
          </p>
          <a className="arrow" onClick={scrolling}>
            <i className="arrow__icon fas fa-chevron-circle-right"></i>
          </a>
        </div>
      </section>
    );
  }
}
