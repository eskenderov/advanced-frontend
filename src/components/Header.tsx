import { NavLink } from "react-router-dom";
import { useTheme } from "../theme/useTheme";

export const Header = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <header className="header">
      <nav className="menu">
        <ul className="menu__list">
          <NavLink to={"/home"}>
            <li className="menu__item">Home</li>
          </NavLink>
          <NavLink to={"/about"}>
            <li className="menu__item">About</li>
          </NavLink>
        </ul>
      </nav>

      <div className="header-btn" onClick={toggleTheme}>
        {theme === "dark" ? "Dark" : "Light"}
      </div>
    </header>
  );
};
