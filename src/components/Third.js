import React, { Component } from "react";

export default class Third extends Component {
  render() {
    return (
      <section id="third" className="panel">
        <div className="content span-4-5">
          <h1 class="major">
            Projects
            {/* <i class="fas fa-code"></i> */}
          </h1>
          <p className="justifying">
            The projects are in time order, starting with the latest one.
            <br />
            Most of these projects were made during my studies at Codaisseur's
            Code Academy. Throughout the academy the main focus was on the
            functionality, that's also why my latest project consists more UX,
            bringing balance to my portfolio. <br />
            I was mostly working with JavaScript (ES6), React.js, Redux, HTML5,
            CSS3, NodeJS, PostgreSQL, Express, Sequelize, JWT, TypeScript,
            Bootstrap, and Material UI among others.
            <br />
            To know more, check out the GitHub repos / websites linked within
            each description. 
          </p>
        </div>
      </section>
    );
  }
}
