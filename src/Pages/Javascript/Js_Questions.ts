import { typeQuiz } from "../../types/typeQuiz";

export const JsQuestions: typeQuiz[] = [
  {
    id: 1,
    questionText: "Inside which HTML element do we put the JavaScript?",
    answerOptions: [
      { answerText: "<scrip>", isCorrect: true },
      { answerText: "<js>", isCorrect: false },
      { answerText: "<javascript>", isCorrect: false },
      { answerText: "<scripting>", isCorrect: false },
    ],
  },
  {
    id: 2,
    questionText:
      "What is the correct syntax for referring to an external script called 'xxx.js'?",
    answerOptions: [
      { answerText: "<scrip href='xx.js'>", isCorrect: false },
      { answerText: "<js src='xx.js'>", isCorrect: false },
      { answerText: "<scrip src='xx.js'>", isCorrect: true },
      { answerText: "<scrip name='xx.js'>", isCorrect: false },
    ],
  },
  {
    id: 3,
    questionText: "How do you write 'Hello World' in an alert box?",
    answerOptions: [
      { answerText: "msgBox('Hello World')", isCorrect: false },
      { answerText: "alertBox('Hello World')", isCorrect: false },
      { answerText: "msg('Hello World')", isCorrect: false },
      { answerText: "alert('Hello World')", isCorrect: true },
    ],
  },
  {
    id: 4,
    questionText: "How do you create a function in JavaScript?",
    answerOptions: [
      { answerText: "function = myFunction()", isCorrect: false },
      { answerText: "function: myFunction()", isCorrect: false },
      { answerText: "function myFunction()", isCorrect: true },
      { answerText: "function new myFunction()", isCorrect: false },
    ],
  },
  {
    id: 5,
    questionText: "How do you call a function named 'myFunction'?",
    answerOptions: [
      { answerText: "call myFunction()", isCorrect: false },
      { answerText: "call function myFunction()", isCorrect: false },
      { answerText: "call function: myFunction()", isCorrect: false },
      { answerText: "myFunction()", isCorrect: true },
    ],
  },
  {
    id: 6,
    questionText: "How can you add a comment in a JavaScript?",
    answerOptions: [
      { answerText: "''this is a comment", isCorrect: false },
      { answerText: "<!-- this is a comment -->", isCorrect: false },
      { answerText: "//this is a comment", isCorrect: true },
      { answerText: "-- this is a comment", isCorrect: false },
    ],
  },
  {
    id: 7,
    questionText: "Which event occurs when the user clicks on an HTML element?",
    answerOptions: [
      { answerText: "onclick", isCorrect: true },
      { answerText: "onchange", isCorrect: false },
      { answerText: "onmouseover", isCorrect: false },
      { answerText: "onmouseclick", isCorrect: false },
    ],
  },
  {
    id: 8,
    questionText: "How do you declare a JavaScript variable?",
    answerOptions: [
      { answerText: "v carName;", isCorrect: false },
      { answerText: "variable carName;", isCorrect: false },
      { answerText: "var carName", isCorrect: true },
      { answerText: "new var carName", isCorrect: false },
    ],
  },
  {
    id: 9,
    questionText: "Which operator is used to assign a value to a variable?",
    answerOptions: [
      { answerText: "*", isCorrect: false },
      { answerText: "=", isCorrect: true },
      { answerText: "-", isCorrect: false },
      { answerText: "x", isCorrect: false },
    ],
  },
  {
    id: 10,
    questionText: "What is the correct way to write a JavaScript array?",
    answerOptions: [
      { answerText: "var number='1','2','3'", isCorrect: false },
      { answerText: "var number=1,2,3", isCorrect: false },
      { answerText: "var number=[1,2,3]", isCorrect: true },
      { answerText: "var number=(1),(2),(3)", isCorrect: false },
    ],
  },
];
