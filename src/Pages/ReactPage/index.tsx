import { Questions } from "../../components/Questions";
import { ReactQuestions } from "./React_Questions";

export const ReactPage = () => {
  const questions = ReactQuestions;

  return (
    <div className="react-page">
      <h1>React</h1>
      <Questions questions={questions} url="/correctanswersreact" />
    </div>
  );
};
