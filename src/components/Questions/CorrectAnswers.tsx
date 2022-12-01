import { typeQuiz } from "../../types/typeQuiz";

type Props = {
  questions: Array<typeQuiz>;
};

export const CorrectAnswers = (props: Props) => {
  return (
    <>
      {props.questions.map((item, i) => (
        <div className="correct-answers__item" key={item.id}>
          <h2>{item.questionText}</h2>
          {props.questions[i].answerOptions.map((item) => (
            <ul
              className={`${
                (item as any).isCorrect === true ? "question__correct" : ""
              }`}
            >
              <li>{(item as any).answerText}</li>
            </ul>
          ))}
        </div>
      ))}
    </>
  );
};
