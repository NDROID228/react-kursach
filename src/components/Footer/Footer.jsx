import { GithubIcon, TelegramIcon } from "../../assets/img/Images";
import "./Footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footer-box">
        <div className="footer-section">
          <p className="footer-section-heading">Welcome to Chessy!</p>
          <p>
            This site and its contents are provided to you completely for free.<br />
            Enjoy and learn from it!
          </p>
        </div>
        <div className="footer-section">
          <p className="footer-section-heading">Site contents</p>
          <div className="footer-section-link-box">
            <Link to="/articles" className="footer-section-link">
              Articles
            </Link>
          </div>
          <div className="footer-section-link-box">
            <Link to="/basics" className="footer-section-link">
              Basics
            </Link>
          </div>
          <div className="footer-section-link-box">
            <Link to="/puzzles" className="footer-section-link">
              Puzzles
            </Link>
          </div>
          <div className="footer-section-link-box">
            <Link to="/playground" className="footer-section-link">
              Play
            </Link>
          </div>
          <div className="footer-section-link-box">
            <Link to="/about" className="footer-section-link">
              About
            </Link>
          </div>
        </div>
        <div className="footer-section">
          <p className="footer-section-heading">Contact to author</p>
          <div className="footer-section-tile">
            <img src={GithubIcon} alt="GitHub" />
            <span>GitHub</span>
          </div>
          <div className="footer-section-tile">
            <img src={TelegramIcon} alt="Telegram" />
            <span>Telegram</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
