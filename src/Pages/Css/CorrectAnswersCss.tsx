import { ButtonBackToStart } from "../../components/ButtonToStart";
import { CorrectAnswers } from "../../components/Questions/CorrectAnswers";
import { CssQuestions } from "./Css_Questions";

export const CorrectAnswersCss = () => {
  const questions = CssQuestions;

  return (
    <div className="css-page correct-answers">
      <h1>Correct Answers</h1>
      <div className="correct-answers__container">
        <CorrectAnswers questions={questions} />
      </div>
      <ButtonBackToStart />
    </div>
  );
};
