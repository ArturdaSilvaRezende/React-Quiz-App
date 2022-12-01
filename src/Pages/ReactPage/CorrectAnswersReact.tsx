import { ButtonBackToStart } from "../../components/ButtonToStart";
import { CorrectAnswers } from "../../components/Questions/CorrectAnswers";
import { ReactQuestions } from "./React_Questions";

export const CorrectAnswersReact = () => {
  const questions = ReactQuestions;

  return (
    <div className="react-page correct-answers">
      <h1>Correct Answers</h1>
      <div className="correct-answers__container">
        <CorrectAnswers questions={questions} />
      </div>
      <ButtonBackToStart />
    </div>
  );
};
