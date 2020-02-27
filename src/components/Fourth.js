import React, { Component } from "react";
import FadeInSection from "./FadeInSection";
import Fourth5 from "./Fourth5";
import Fourth4 from "./Fourth4";
import Fourth3 from "./Fourth3";
import Fourth2 from "./Fourth2";
import Fourth1 from "./Fourth1";

export default class Fourth extends Component {
  render() {
    const { onVisible } = this.props;
    return (
      <section id="fourth" className="panel">
        <FadeInSection>
          <Fourth5 onVisible={onVisible}></Fourth5>
        </FadeInSection>
        <FadeInSection>
          <Fourth4 onVisible={onVisible}></Fourth4>
        </FadeInSection>
        <FadeInSection>
          <Fourth3 onVisible={onVisible}></Fourth3>
        </FadeInSection>
        <FadeInSection>
          <Fourth2 onVisible={onVisible}></Fourth2>
        </FadeInSection>
        <FadeInSection>
          <Fourth1 onVisible={onVisible}></Fourth1>
        </FadeInSection>
      </section>
    );
  }
}
