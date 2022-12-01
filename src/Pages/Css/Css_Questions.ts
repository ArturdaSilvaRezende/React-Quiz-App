import { typeQuiz } from "../../types/typeQuiz";

export const CssQuestions: typeQuiz[] = [
  {
    id: 1,
    questionText: "What does CSS stand for?",
    answerOptions: [
      { answerText: "Creative Style Sheet", isCorrect: false },
      { answerText: "Computer Style Sheet", isCorrect: false },
      { answerText: "Colorful Style Sheet", isCorrect: false },
      { answerText: "Cascading Style Sheet", isCorrect: true },
    ],
  },
  {
    id: 2,
    questionText: "Which HTML tag is used to define an internal style sheet?",
    answerOptions: [
      { answerText: "<style>", isCorrect: true },
      { answerText: "<script>", isCorrect: false },
      { answerText: "<css>", isCorrect: false },
      { answerText: "<html>", isCorrect: false },
    ],
  },
  {
    id: 3,
    questionText: "Which HTML attribute is used to define inline styles?",
    answerOptions: [
      { answerText: "<styles>", isCorrect: false },
      { answerText: "<style>", isCorrect: true },
      { answerText: "<stylesheet>", isCorrect: false },
      { answerText: "<styleinline>", isCorrect: false },
    ],
  },
  {
    id: 4,
    questionText: "How do you insert a comment in a CSS file?",
    answerOptions: [
      { answerText: "//this is a comment//", isCorrect: false },
      { answerText: "//this is a comment", isCorrect: false },
      { answerText: "/*this is a comment*/", isCorrect: true },
      { answerText: "'this is a comment'", isCorrect: false },
    ],
  },
  {
    id: 5,
    questionText:
      "Which CSS property is used to change the text color of an element?",
    answerOptions: [
      { answerText: "color-text", isCorrect: false },
      { answerText: "text-color", isCorrect: false },
      { answerText: "textcolor", isCorrect: false },
      { answerText: "color", isCorrect: true },
    ],
  },
  {
    id: 6,
    questionText: "Which CSS property controls the text size?",
    answerOptions: [
      { answerText: "text-style", isCorrect: false },
      { answerText: "font-size", isCorrect: true },
      { answerText: "font-style", isCorrect: false },
      { answerText: "text-size", isCorrect: false },
    ],
  },
  {
    id: 7,
    questionText: "How do you display hyperlinks without an underline?",
    answerOptions: [
      { answerText: "a{text-decoration:none}", isCorrect: true },
      { answerText: "a{underline:none}", isCorrect: false },
      { answerText: "a{decoration:none}", isCorrect: false },
      { answerText: "a{decoration:no-underline}", isCorrect: false },
    ],
  },
  {
    id: 8,
    questionText: "Which property is used to change the font of an element?",
    answerOptions: [
      { answerText: "font-style", isCorrect: false },
      { answerText: "font-weight", isCorrect: false },
      { answerText: "font-family", isCorrect: true },
      { answerText: "font-size", isCorrect: false },
    ],
  },
  {
    id: 9,
    questionText: "How do you make the text bold?",
    answerOptions: [
      { answerText: "font-weigh:bold", isCorrect: true },
      { answerText: "font:bold", isCorrect: false },
      { answerText: "style:bold", isCorrect: false },
      { answerText: "font-family:bold", isCorrect: false },
    ],
  },
  {
    id: 10,
    questionText:
      "Which property is used to change the left margin of an element?",
    answerOptions: [
      { answerText: "ident", isCorrect: false },
      { answerText: "padding-left", isCorrect: false },
      { answerText: "margin-left", isCorrect: true },
      { answerText: "position: left", isCorrect: false },
    ],
  },
];
