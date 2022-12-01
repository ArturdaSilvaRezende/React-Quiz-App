import { Questions } from "../../components/Questions";
import { JsQuestions } from "./Js_Questions";

export const Javascript = () => {
  const questions = JsQuestions;
  return (
    <div className="js-page">
      <h1>JavaScript</h1>
      <Questions questions={questions} url="/correctanswersjs" />
    </div>
  );
};
