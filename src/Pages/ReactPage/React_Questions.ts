import { typeQuiz } from "../../types/typeQuiz";

export const ReactQuestions: typeQuiz[] = [
  {
    id: 1,
    questionText:
      "What is the default local host port that a React development server uses?",
    answerOptions: [
      { answerText: "8080", isCorrect: false },
      { answerText: "3500", isCorrect: false },
      { answerText: "5000", isCorrect: false },
      { answerText: "3000", isCorrect: true },
    ],
  },
  {
    id: 2,
    questionText: "What is the children prop?",
    answerOptions: [
      {
        answerText: "A property that lets you pass data to child components",
        isCorrect: false,
      },
      {
        answerText:
          "A property that lets you nest components in other components",
        isCorrect: true,
      },
      {
        answerText: "A property that lets you set an object as a property",
        isCorrect: false,
      },
      {
        answerText: "A property that adds child values to state",
        isCorrect: false,
      },
    ],
  },
  {
    id: 3,
    questionText:
      "A copy of the 'real' DOM that is kept in memory is called what?",
    answerOptions: [
      { answerText: "Virtual Dom", isCorrect: true },
      { answerText: "React Dom", isCorrect: false },
      { answerText: "Dom", isCorrect: false },
      { answerText: "Shadow Dom", isCorrect: false },
    ],
  },
  {
    id: 4,
    questionText:
      "What does myReactApp refer to in the following command? = npx create-react-app myReactApp",
    answerOptions: [
      { answerText: "A reference to an existing app", isCorrect: false },
      {
        answerText: "The name you want to use for the new app",
        isCorrect: true,
      },
      { answerText: "The type of app to create", isCorrect: false },
      {
        answerText: "The directory to create the new app in",
        isCorrect: false,
      },
    ],
  },
  {
    id: 5,
    questionText:
      "Which operator can be used to conditionally render a React component?",
    answerOptions: [
      { answerText: "??", isCorrect: false },
      { answerText: "::", isCorrect: false },
      { answerText: "||", isCorrect: false },
      { answerText: "&&", isCorrect: true },
    ],
  },
  {
    id: 6,
    questionText:
      "When rendering a list using the JavaScript map() method, what is required for each element rendered?",
    answerOptions: [
      { answerText: "data", isCorrect: false },
      { answerText: "id", isCorrect: false },
      { answerText: "key", isCorrect: true },
      { answerText: "index", isCorrect: false },
    ],
  },
  {
    id: 7,
    questionText: "What tool does React use to compile JSX?",
    answerOptions: [
      { answerText: "ReactDom", isCorrect: false },
      { answerText: "Babel", isCorrect: true },
      { answerText: "React Router", isCorrect: false },
      { answerText: "JSX Compiler", isCorrect: false },
    ],
  },
  {
    id: 8,
    questionText:
      "What command is used to start the React local development server?",
    answerOptions: [
      { answerText: "npm start", isCorrect: true },
      { answerText: "npm build", isCorrect: false },
      { answerText: "npm run dev", isCorrect: false },
      { answerText: "npm serve", isCorrect: false },
    ],
  },
  {
    id: 9,
    questionText: "What is a common use case for ref?",
    answerOptions: [
      { answerText: "To bind the function", isCorrect: false },
      { answerText: "To refer to another JavaScript file", isCorrect: false },
      { answerText: "To directly access a DOM node", isCorrect: true },
      { answerText: "To refer to a function", isCorrect: false },
    ],
  },
  {
    id: 10,
    questionText: "React is mainly used for building ___.",
    answerOptions: [
      { answerText: "Database", isCorrect: false },
      { answerText: "Connectivity", isCorrect: false },
      { answerText: "User interface", isCorrect: true },
      { answerText: "Design Platform", isCorrect: false },
    ],
  },
];
