import { NavLink } from "react-router-dom";

export const ButtonBackToStart = () => {
  return (
    <button className="ButtonToStart">
      <NavLink to="/">Back To Start</NavLink>
    </button>
  );
};
