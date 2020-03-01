import React, { Component } from "react";
import natours from "../assets/images/natours.gif";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export default class Popup5 extends Component {
  render() {
    const { onVisible, visible5 } = this.props;
    return (
      <TransitionGroup component={null}>
        <CSSTransition
          key={visible5}
          classNames="fade"
          timeout={5000}
          in={true}
          appear={true}
        >
          <section className="popup">
            <div className="popup__content">
              <h1>Natours</h1>
              <button
                className="btn btn--white remove-style"
                onClick={event => onVisible(event, 5)}
              >
                X
              </button>
              <div className="popup__pic--container">
                <img src={natours} alt="Natours gif" className="popup__pic" />
              </div>
              <div className="popup__text justifying">
                This responsive project was made while learning advanced CSS and
                SASS through an online{" "}
                <a
                  href="https://www.udemy.com/course/advanced-css-and-sass"
                  // eslint-disable-next-line
                  target="_blank"
                >
                  Udemy course
                </a>
                . The skills learned are showcased in the project. Check out the
                <a
                  href="https://natours-learning-project.netlify.com"
                  // eslint-disable-next-line
                  target="_blank"
                >
                  current version
                </a>
                !
              </div>
              <a
                href="https://natours-learning-project.netlify.com"
                // eslint-disable-next-line
                target="_blank"
              >
                <i className="fourth__icon fas fa-globe"></i>
              </a>
            </div>
          </section>
        </CSSTransition>
      </TransitionGroup>
    );
  }
}
