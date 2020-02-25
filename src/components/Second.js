import React, { Component } from "react";
import pic2 from "../assets/images/Adel.jpg";

export default class Second extends Component {
  render() {
    return (
      <section id="second" className="panel spotlight right">
        <div className="content right span-7-5">
          <div className="medium">
            <h1 class="major">About me</h1>
            <blockquote>
              “Change is inevitable. Growth is optional.”
              <br />
              <span>— John Maxwell</span>
            </blockquote>
            <p className="justifying">
              This quote describes my beliefs since I decided to change career
              from a Physiotherapist to a Web Developer.
              <br />
              A journey that led me to complete a coding bootcamp in Amsterdam
              at the end of last year after a period of autodidactism.
              <br />
              An adventure in which I found my passion for coding.
              <br />
              A path that fills me up with excitement and curiosity for where it
              will take me next.
              <br />
              Currently, I'm at the milestone of looking for my first job as a
              Full-stack Web Developer in the Netherlands.
            </p>
          </div>
        </div>
        <div class="image filtered tinted">
          <img src={pic2} alt="Adel" id="adel-pic" />
        </div>
      </section>
    );
  }
}
