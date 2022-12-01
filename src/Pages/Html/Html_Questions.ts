import { typeQuiz } from "../../types/typeQuiz";

export const HtmlQuestions: typeQuiz[] = [
  {
    id: 1,
    questionText: "What does HTML stand for?",
    answerOptions: [
      { answerText: "Hyper Text Markup Language", isCorrect: true },
      { answerText: "Home Tool Markup Language", isCorrect: false },
      { answerText: "Hyperlinks and Text Markup Language", isCorrect: false },
      { answerText: "Home Tool and Text Markup Language", isCorrect: false },
    ],
  },
  {
    id: 2,
    questionText: "Choose the correct HTML element for the largest heading:",
    answerOptions: [
      { answerText: "<head>", isCorrect: false },
      { answerText: "<h1>", isCorrect: true },
      { answerText: "<h6>", isCorrect: false },
      { answerText: "<heading>", isCorrect: false },
    ],
  },
  {
    id: 3,
    questionText:
      "What is the correct HTML element for inserting a line break?",
    answerOptions: [
      { answerText: "<break>", isCorrect: false },
      { answerText: "<bl>", isCorrect: false },
      { answerText: "<hr>", isCorrect: false },
      { answerText: "<br>", isCorrect: true },
    ],
  },
  {
    id: 4,
    questionText: "Which HTML element defines the title of a document?",
    answerOptions: [
      { answerText: "<head>", isCorrect: false },
      { answerText: "<h1>", isCorrect: false },
      { answerText: "<title>", isCorrect: true },
      { answerText: "<meta>", isCorrect: false },
    ],
  },
  {
    id: 5,
    questionText: "Choose the correct HTML element to define important text",
    answerOptions: [
      { answerText: "<b>", isCorrect: false },
      { answerText: "<i>", isCorrect: false },
      { answerText: "<important>", isCorrect: false },
      { answerText: "<strong>", isCorrect: true },
    ],
  },
  {
    id: 6,
    questionText: "Choose the correct HTML element to define emphasized text",
    answerOptions: [
      { answerText: "<em>", isCorrect: true },
      { answerText: "<italic>", isCorrect: false },
      { answerText: "<i>", isCorrect: false },
      { answerText: "<strong>", isCorrect: false },
    ],
  },
  {
    id: 7,
    questionText:
      "Which HTML element is used to specify a footer for a document or section?",
    answerOptions: [
      { answerText: "<bottom>", isCorrect: false },
      { answerText: "<section>", isCorrect: false },
      { answerText: "<div>", isCorrect: false },
      { answerText: "<footer>", isCorrect: true },
    ],
  },
  {
    id: 8,
    questionText: "Which character is used to indicate an end tag?",
    answerOptions: [
      { answerText: " ^ ", isCorrect: false },
      { answerText: " > ", isCorrect: false },
      { answerText: " / ", isCorrect: true },
      { answerText: " * ", isCorrect: false },
    ],
  },
  {
    id: 9,
    questionText: "How can you open a link in a new tab/browser window?",
    answerOptions: [
      { answerText: "<a href='url' target='_blank'>", isCorrect: true },
      { answerText: "<a href='url' target='new'>", isCorrect: false },
      { answerText: "<a href='url' new>", isCorrect: false },
      { answerText: "<a href='url' target='open'>", isCorrect: false },
    ],
  },
  {
    id: 10,
    questionText: "What is the correct HTML for making a text input field?",
    answerOptions: [
      { answerText: "<textinput type='text'>", isCorrect: false },
      { answerText: "<input type='text'>", isCorrect: true },
      { answerText: "<input type='textfield'>", isCorrect: false },
      { answerText: "<textinput type='textfield'>", isCorrect: false },
    ],
  },
];
