import React, { Component } from "react";
import journeyPlanner from "../assets/images/journey-planner.gif";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export default class Popup4 extends Component {
  render() {
    const { onVisible, visible4 } = this.props;
    return (
      <TransitionGroup component={null}>
        <CSSTransition
          key={visible4}
          classNames="fade"
          timeout={5000}
          in={true}
          appear={true}
        >
          <section className="popup">
            <div className="popup__content">
              <h1>Journey Planner</h1>
              <button
                className="btn btn--white remove-style"
                onClick={event => onVisible(event, 4)}
              >
                X
              </button>
              <div className="popup__pic--container">
                <img
                  src={journeyPlanner}
                  alt="Journey Planner gif"
                  className="popup__pic"
                />
              </div>
              <div className="popup__text justifying">
                This full-stack app is a result of a Hackathon, where the
                challenge was to use at least one technology, that was not
                taught throughout the Code Academy course, by Codaisseur. The
                Hackathon's theme was travel, the time limit was 3 days.
                <br></br>
                <strong>Selftaught technologies used:</strong> React Hooks,
                Moment.js, React-input-moment, React Bootstrap,
                Vertical-timeline-component-for-react
              </div>
              <a
                href="https://www.github.com/adeltancsik/client-journey-planner"
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
