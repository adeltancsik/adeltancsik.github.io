import React, { Component } from "react";
import pic1 from "../assets/images/adi6.jpg";

export default class Intro extends Component {
  render() {
    return (
      <section id="intro" className="panel">
        <div className="span-2-5 intro__container image filtered">
          <img src={pic1} alt="Adel" className="intro__pic" />
        </div>
      </section>
    );
  }
}
