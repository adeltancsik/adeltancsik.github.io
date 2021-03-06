import React, { Component } from "react";
import quiz from "../assets/images/quiz.gif";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export default class Popup1 extends Component {
  render() {
    const { onVisible, visible1 } = this.props;
    return (
      <TransitionGroup component={null}>
        <CSSTransition
          key={visible1}
          classNames="fade"
          timeout={5000}
          in={true}
          appear={true}
        >
          <section className="popup">
            <div className="popup__content">
              <button
                className="btn btn--white remove-style popup__button"
                onClick={event => onVisible(event, 1)}
              >
                X
              </button>

              <div className="popup__pic--container">
                <img src={quiz} alt="Quiz gif" className="popup__pic" />
              </div>

              <div className="popup__right">
                <h1>Multiplayer Quiz</h1>
                <div className="popup__text justifying">
                  A pair-programming project resulting in a{" "}
                  <strong>full-stack</strong> app using Server Sent Events. A
                  registered user can access the game lobby and join a room. The
                  quiz starts when another user has also joined that room. The
                  results and the winner can be checked after both players have
                  finished the quiz.
                  <br />
                  <strong>
                    Main technologies used: <br />
                  </strong>
                  SSE, JS(ES6), React.js, Redux, HTML5, CSS3, Bootstrap, NodeJS,
                  Express, Sequelize, PostgreSQL, JWT
                </div>
                <a
                  href="https://quizam.netlify.com"
                  // eslint-disable-next-line
                  target="_blank"
                  className="popup__link"
                >
                  <i className="fourth__icon fas fa-globe"></i>
                </a>
                <a
                  href="https://github.com/mtabanja/week7-game-project-client"
                  // eslint-disable-next-line
                  target="_blank"
                  className="popup__link"
                >
                  <i className="fourth__icon fab fa-github"></i>
                </a>
              </div>
            </div>
          </section>
        </CSSTransition>
      </TransitionGroup>
    );
  }
}
