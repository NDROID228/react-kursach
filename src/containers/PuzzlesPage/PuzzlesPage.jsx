import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { useNavigate } from "react-router-dom";
import "./PuzzlesPage.scss";
import levels from "./levels";

const PuzzlesPage = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <Header currentPage={"puzzles"} />
      <main>
        <div className="main-content">
          <div className="puzzle-levels-list">
            {levels.map((levelObj) => {
              return (
                <div
                  className="puzzle-level-box"
                  key={levelObj.name}
                  onClick={() =>
                    navigate(`/puzzles/${levelObj.name.toLowerCase()}`)
                  }
                >
                  <div className="puzzle-level">
                    <div className="puzzle-level-image">
                      <img src={levelObj.image} alt="" />
                    </div>
                    <div className="puzzle-level-name">
                      <h1>{levelObj.name} puzzles</h1>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PuzzlesPage;
