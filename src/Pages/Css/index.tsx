import { Questions } from "../../components/Questions";
import { CssQuestions } from "./Css_Questions";

export const Css = () => {
  const questions = CssQuestions;
  return (
    <div className="css-page">
      <h1>Css3</h1>
      <Questions questions={questions} url="/correctanswerscss" />
    </div>
  );
};
