import "./Header.scss";
import Logo from "../../assets/img/pawn.png";

const Header = () => {
  return (
    <header>
      <nav>
        <div className="logo-title-box">
          <img src={Logo} />
          <p>Chessy</p>
        </div>
        <div className="link-list-box">
          <ul>
            <li className="highlighted">Chessy</li>
            <li>Articles</li>
            <li>Basics</li>
            <li>Puzzles</li>
            <li>About</li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
