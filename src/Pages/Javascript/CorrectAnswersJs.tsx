import { ButtonBackToStart } from "../../components/ButtonToStart";
import { CorrectAnswers } from "../../components/Questions/CorrectAnswers";
import { JsQuestions } from "./Js_Questions";

export const CorrectAnswersJs = () => {
  const questions = JsQuestions;

  return (
    <div className="js-page correct-answers">
      <h1>Correct Answers</h1>
      <div className="correct-answers__container">
        <CorrectAnswers questions={questions} />
      </div>
      <ButtonBackToStart />
    </div>
  );
};
