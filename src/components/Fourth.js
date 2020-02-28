import React, { Component, Suspense, lazy } from "react";
// import FadeInSection from "./FadeInSection";
// import Fourth5 from "./Fourth5";
// import Fourth4 from "./Fourth4";
// import Fourth3 from "./Fourth3";
// import Fourth2 from "./Fourth2";
// import Fourth1 from "./Fourth1";
const Fourth5 = lazy(() => import("./Fourth5"));
const Fourth4 = lazy(() => import("./Fourth4"));
const Fourth3 = lazy(() => import("./Fourth3"));
const Fourth2 = lazy(() => import("./Fourth2"));
const Fourth1 = lazy(() => import("./Fourth1"));
const FadeInSection = lazy(() => import("./FadeInSection"));

export default class Fourth extends Component {
  render() {
    const { onVisible } = this.props;
    return (
      <Suspense fallback={<div className="lds-dual-ring" id="spinner"></div>}>
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
      </Suspense>
    );
  }
}
