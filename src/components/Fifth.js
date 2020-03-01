import React, { Component } from "react";
import cv from "../assets/Adél Tancsik CV.pdf";
import table from "../assets/images/table.jpg";

export default class Fifth extends Component {
  render() {
    return (
      <section id="fifth" className="panel spotlight">
        <div className="content span-5-5">
          <h1 className="major title">Resume</h1>
          <p>Check out my CV or download it in PDF format.</p>
          <div className="btn__container">
            <a
              href={cv}
              className="btn btn--white remove-style"
              target="_blank"
            >
              View
            </a>
            <a
              href={cv}
              className="btn btn--white remove-style"
              download="Adél Tancsik CV"
            >
              Download
            </a>
          </div>
        </div>
        <div className="image">
          <img src={table} alt="Table" id="table" />
        </div>
      </section>
    );
  }
}
