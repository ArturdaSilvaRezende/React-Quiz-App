import { Questions } from "../../components/Questions";
import { HtmlQuestions } from "./Html_Questions";

export const Html = () => {
  const questions = HtmlQuestions;

  return (
    <div className="html-page">
      <h1>HTML 5</h1>
      <Questions questions={questions} url="/correctanswershtml" />
    </div>
  );
};
