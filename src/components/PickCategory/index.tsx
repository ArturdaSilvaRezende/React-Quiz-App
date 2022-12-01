import { NavLink } from "react-router-dom";
import { FaCss3Alt, FaHtml5, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";

export const PickCategory = () => {
  return (
    <section className="pickcategory">
      <div className="overlay"></div>

      <h1>Pick Category</h1>

      <div className="pickcategory__container">
        {/* html */}
        <div className="pickcategory__option html">
          <NavLink to="/Html">
            <FaHtml5 />
          </NavLink>
        </div>

        {/* css */}
        <div className="pickcategory__option css">
          <NavLink to="/css">
            <FaCss3Alt />
          </NavLink>
        </div>

        {/* javascript */}
        <div className="pickcategory__option javascript">
          <NavLink to="/javascript">
            <IoLogoJavascript />
          </NavLink>
        </div>

        {/* react */}
        <div className="pickcategory__option react">
          <NavLink to="/reactpage">
            <FaReact />
          </NavLink>
        </div>
      </div>

      <button className="button-style pickcategory__button">
        <NavLink to="/">Back to start</NavLink>
      </button>
    </section>
  );
};
