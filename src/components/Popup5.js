import React, { Component } from "react";
import natours from "../assets/images/natours.gif";
import trillo from "../assets/images/trillo.gif";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export default class Popup5 extends Component {
  state = {
    natours: true,
    trillo: false
  };

  toggleNatours = event => {
    event.preventDefault();
    this.setState({ natours: true, trillo: false });
  };

  toggleTrillo = event => {
    event.preventDefault();
    this.setState({ natours: false, trillo: true });
  };

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
            {this.state.natours ? (
              <TransitionGroup>
                <CSSTransition
                  key={this.state.trillo}
                  timeout={1400}
                  classNames="changeN"
                >
                  <div className="popup__content">
                    <button
                      className="btn btn--white remove-style popup__button"
                      onClick={event => onVisible(event, 5)}
                    >
                      X
                    </button>

                    <div className="popup__pic--container">
                      <img
                        src={natours}
                        alt="Natours gif"
                        className="popup__pic"
                      />
                    </div>

                    <div className="popup__right">
                      <div className="popup__titles">
                        <button
                          className="popup__title popup__title--selected"
                          onClick={this.toggleNatours}
                        >
                          Natours
                        </button>
                        <button
                          className="popup__title"
                          onClick={this.toggleTrillo}
                        >
                          Trillo
                        </button>
                      </div>
                      <div className="popup__text justifying">
                        This responsive project was made while learning advanced
                        CSS and Sass through an online{" "}
                        <a
                          href="https://www.udemy.com/course/advanced-css-and-sass"
                          // eslint-disable-next-line
                          target="_blank"
                        >
                          Udemy course
                        </a>
                        . The skills learned are showcased in the project.
                        <ul className="popup__list">
                          <li className="popup__item">
                            CSS3: animations with @keyframes, animation and
                            transition
                          </li>
                          <li className="popup__item">
                            Sass: global variables, architecting CSS, managing
                            media queries
                          </li>
                          <li className="popup__item">
                            Responsive design: media queries, mobile-first vs
                            desktop-first, em vs rem units
                          </li>

                          <li className="popup__item">
                            Responsive images in HTML and CSS for faster
                            pageloads
                          </li>
                        </ul>
                        Check out the{" "}
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
                        className="popup__link"
                      >
                        <i className="fourth__icon fas fa-globe"></i>
                      </a>
                    </div>
                  </div>
                </CSSTransition>
              </TransitionGroup>
            ) : (
              <TransitionGroup>
                <CSSTransition
                  key={this.state.trillo}
                  timeout={1400}
                  classNames="changeT"
                >
                  <div className="popup__content">
                    <button
                      className="btn btn--white remove-style popup__button"
                      onClick={event => onVisible(event, 5)}
                    >
                      X
                    </button>

                    <div className="popup__pic--container">
                      <img
                        src={trillo}
                        alt="Trillo gif"
                        className="popup__pic"
                      />
                    </div>

                    <div className="popup__right">
                      <div className="popup__titles">
                        <button
                          className="popup__title"
                          onClick={this.toggleNatours}
                        >
                          Natours
                        </button>
                        <button
                          className="popup__title popup__title--selected"
                          onClick={this.toggleTrillo}
                        >
                          Trillo
                        </button>
                      </div>
                      <div className="popup__text justifying">
                        This responsive project was made while learning advanced
                        CSS and Sass through an online{" "}
                        <a
                          href="https://www.udemy.com/course/advanced-css-and-sass"
                          // eslint-disable-next-line
                          target="_blank"
                        >
                          Udemy course
                        </a>
                        . The skills learned are showcased in the project.
                        <ul className="popup__list">
                          <li className="popup__item">Flexbox display</li>
                          <li className="popup__item">CSS variables</li>
                          <li className="popup__item">
                            Animations with @keyframes, animation and transition
                          </li>
                          <li className="popup__item">
                            Sass: global variables
                          </li>
                          <li className="popup__item">
                            Responsive design: media queries, mobile-first vs
                            desktop-first, em vs rem units
                          </li>
                        </ul>
                        Check out the{" "}
                        <a
                          href="https://trillo-learning-project.netlify.com"
                          // eslint-disable-next-line
                          target="_blank"
                        >
                          current version
                        </a>
                        !
                      </div>
                      <a
                        href="https://trillo-learning-project.netlify.com"
                        // eslint-disable-next-line
                        target="_blank"
                        className="popup__link"
                      >
                        <i className="fourth__icon fas fa-globe"></i>
                      </a>
                    </div>
                  </div>
                </CSSTransition>
              </TransitionGroup>
            )}
          </section>
        </CSSTransition>
      </TransitionGroup>
    );
  }
}
