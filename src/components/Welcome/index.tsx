import { NavLink } from "react-router-dom";
import TextGif from "./images/text.gif";
import WelcomeImg from "./images/Front-end-Development.png";

export const Welcome = () => {
  return (
    <section className="welcome">
      <div className="overlay"></div>

      <figure className="welcome__text-gif">
        <img src={TextGif} alt="react-quiz-text-gif" />
      </figure>

      <button className="button-style">
        <NavLink to="/pickcategory">Start</NavLink>
      </button>

      <figure className="welcome__quiz-img">
        <img src={WelcomeImg} alt="quiz-welcome" />
      </figure>
    </section>
  );
};
