import React, { Component } from "react";
import testClient from "../assets/images/test-client.gif";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export default class Popup2 extends Component {
  render() {
    const { onVisible, visible2 } = this.props;
    return (
      <TransitionGroup component={null}>
        <CSSTransition
          key={visible2}
          classNames="fade"
          timeout={5000}
          in={true}
          appear={true}
        >
          <section className="popup">
            <div className="popup__content">
              <h1>Codaisseur's Dynamic Student Assessment</h1>
              <button
                className="btn btn--white remove-style"
                onClick={event => onVisible(event, 2)}
              >
                X
              </button>
              <div className="popup__pic--container">
                <img
                  src={testClient}
                  alt="Test Client gif"
                  className="popup__pic"
                />
              </div>
              <div className="popup__text justifying">
                The aim is to improve the measurement of JS knowledge level of
                future students prior to the bootcamp. This{" "}
                <strong>full-stack</strong> project is built up of 3 apps, check
                out the Readme at GitHub for more info.
                <br />
                During a “legacy code” group assignment I contributed to an
                already existing project - this is an admission test for
                Codaisseur's Code Academy.
              </div>
              <a
                href="https://www.github.com/Official-Codaisseur-Graduate/Dynamic-Student-Assessment-Server"
                // eslint-disable-next-line
                target="_blank"
                className="popup__link"
              >
                <i className="fourth__icon fab fa-github"></i>
              </a>
            </div>
          </section>
        </CSSTransition>
      </TransitionGroup>
    );
  }
}
