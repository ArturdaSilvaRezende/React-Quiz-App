import { useState } from "react";
import { NavLink } from "react-router-dom";
import { typeQuiz } from "../../types/typeQuiz";

type Props = {
  questions: Array<typeQuiz>;
  url?: string;
};

export const Questions = (props: Props) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerButtonClick = (isCorrect: boolean) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < props.questions.length) {
      setTimeout(() => {
        setCurrentQuestion(nextQuestion);
      }, 600);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="questions">
      {showScore ? (
        <div className="questions__score">
          <p>
            You scored {score} out of {props.questions.length}
          </p>
          <button className="questions__back">
            <NavLink to="/">Back To Start</NavLink>
          </button>
          <button className="questions__back">
            <NavLink to={`${props.url}`}>Correct Answers</NavLink>
          </button>
        </div>
      ) : (
        <>
          {/* title */}
          <div className="question__title">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>
              <span className="question__bar">/</span>
              <span>{props.questions.length}</span>
            </div>
            <div className="question__text">
              <p>{props.questions[currentQuestion].questionText}</p>
            </div>
          </div>

          {/* options */}
          <div className="questions__section">
            <ol type="A">
              {props.questions[currentQuestion].answerOptions.map(
                (answerOption, i) => (
                  <li
                    onClick={() =>
                      handleAnswerButtonClick((answerOption as any).isCorrect)
                    }
                    key={(answerOption as any).id}
                  >
                    <span>{(answerOption as any).answerText}</span>
                  </li>
                )
              )}
            </ol>
          </div>
        </>
      )}
    </div>
  );
};
