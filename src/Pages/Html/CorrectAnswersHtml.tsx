import { ButtonBackToStart } from "../../components/ButtonToStart";
import { CorrectAnswers } from "../../components/Questions/CorrectAnswers";
import { HtmlQuestions } from "./Html_Questions";

export const CorrectAnswersHtml = () => {
  const questions = HtmlQuestions;

  return (
    <div className="html-page correct-answers">
      <h1>Correct Answers</h1>
      <div className="correct-answers__container">
        <CorrectAnswers questions={questions} />
      </div>
      <ButtonBackToStart />
    </div>
  );
};
