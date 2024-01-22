import "./Header.scss";
import { useEffect, useReducer } from "react";
import { DarkLogo, LightLogo } from "../../assets/img/Images";
import { useNavigate } from "react-router-dom";
// import

const Header = ({ currentPage }) => {
  const navigate = useNavigate();

  const routeTo = (routeStr) => {
    navigate(routeStr);
  };

  return (
    <header>
      <nav>
        <div
          className={`logo-title-box ${currentPage=== "main" ? "highlighted" : ""}`}
          onClick={() => {
            routeTo("/");
          }}
        >
          <img src={currentPage === "main" ? DarkLogo : LightLogo} />
          <p>Chessy</p>
        </div>
        <div className="link-list-box">
          <ul>
            <li
              className={currentPage === "articles" ? "highlighted" : ""}
              onClick={() => {
                routeTo("/articles");
              }}
            >
              Articles
            </li>
            <li
              className={currentPage === "basics" ? "highlighted" : ""}
              onClick={() => {
                routeTo("/basics");
              }}
            >
              Basics
            </li>
            <li
              className={currentPage === "puzzles" ? "highlighted" : ""}
              onClick={() => {
                routeTo("/puzzles");
              }}
            >
              Puzzles
            </li>
            <li
              className={currentPage === "playground" ? "highlighted" : ""}
              onClick={() => {
                routeTo("/playground");
              }}
            >
              Play
            </li>
            <li
              className={currentPage === "about" ? "highlighted" : ""}
              onClick={() => {
                routeTo("/about");
              }}
            >
              About
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
