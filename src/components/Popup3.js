import React, { Component } from "react";
import ticketSwap from "../assets/images/ticket-swap.gif";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export default class Popup3 extends Component {
  render() {
    const { onVisible, visible3 } = this.props;
    return (
      <TransitionGroup component={null}>
        <CSSTransition
          key={visible3}
          classNames="fade"
          timeout={5000}
          in={true}
          appear={true}
        >
          <section className="popup">
            <div className="popup__content">
              <button
                className="btn btn--white remove-style popup__button"
                onClick={event => onVisible(event, 3)}
              >
                X
              </button>

              <div className="popup__pic--container">
                <img
                  src={ticketSwap}
                  alt="Ticket Swap gif"
                  className="popup__pic"
                />
              </div>

              <div className="popup__right">
                <h1>Ticket Swap</h1>
                <div className="popup__text justifying">
                  An individual project made for the final evaluation of
                  Codaisseur. This is a <strong>full-stack</strong> app for
                  advertising tickets for events. <br />
                  The GitHub repo has to remain private to avoid plagiarism, but
                  I can show it in person.
                  <br />
                  <strong>Main technologies used:</strong> JS(ES6), React.js,
                  Redux, HTML5, CSS3, Bootstrap, NodeJS, PostgreSQL, Express,
                  Sequelize, JWT
                </div>
              </div>
            </div>
          </section>
        </CSSTransition>
      </TransitionGroup>
    );
  }
}
