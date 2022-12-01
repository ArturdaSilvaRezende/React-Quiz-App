import { Routes, Route } from "react-router-dom";
import { Welcome } from "../components/Welcome";
import { PickCategory } from "../components/PickCategory";

//html
import { Html } from "../Pages/Html";
import { CorrectAnswersHtml } from "../Pages/Html/CorrectAnswersHtml";

//css
import { Css } from "../Pages/Css";
import { CorrectAnswersCss } from "../Pages/Css/CorrectAnswersCss";

//javascript
import { Javascript } from "../Pages/Javascript";
import { CorrectAnswersJs } from "../Pages/Javascript/CorrectAnswersJs";

//react
import { ReactPage } from "../Pages/ReactPage";
import { CorrectAnswersReact } from "../Pages/ReactPage/CorrectAnswersReact";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/pickcategory" element={<PickCategory />} />

      {/* html */}
      <Route path="/html" element={<Html />} />
      <Route path="/correctanswershtml" element={<CorrectAnswersHtml />} />

      {/* css */}
      <Route path="/css" element={<Css />} />
      <Route path="/correctanswerscss" element={<CorrectAnswersCss />} />

      {/* javascript */}
      <Route path="/javascript" element={<Javascript />} />
      <Route path="/correctanswersjs" element={<CorrectAnswersJs />} />

      {/* React */}
      <Route path="/reactpage" element={<ReactPage />} />
      <Route path="/correctanswersreact" element={<CorrectAnswersReact />} />
    </Routes>
  );
};
