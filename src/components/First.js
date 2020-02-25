import React, { Component } from "react";

export default class First extends Component {
  render() {
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
            This is my <strong>Portfolio</strong>, hope you enjoy it.
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
        </div>
      </section>
    );
  }
}
