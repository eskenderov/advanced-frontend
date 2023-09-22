import { NavLink } from "react-router-dom";

export const Header = () => {
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
    </header>
  );
};
