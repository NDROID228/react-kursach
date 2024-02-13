import { useParams } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import PuzzleBox from "../PuzzleBox/PuzzleBox";
import "./PuzzlesContent.scss";
import { useEffect, useState } from "react";

const PuzzlesContent = () => {
  const [puzzlesArr, setPuzzlesArr] = useState();
  const params = useParams();
  const level = params.puzzleLevel;

  const getPuzzlesFetch = async () => {
    let puzzlesArr = null;
    fetch(`http://localhost:3003/getPuzzles?id=${level}`)
      .then((response) => response.json())
      .then((json) => {
        json ? setPuzzlesArr(JSON.parse(json)) : console.log();
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getPuzzlesFetch();

  }, []);

  return (
    <div className="container">
      <Header currentPage="puzzles" />
      <main>
        <div className="puzzles-list">
          {puzzlesArr !== undefined && puzzlesArr.length > 0
            ? puzzlesArr.map((configObj) => {
                return (
                  <PuzzleBox
                    boardConfig={configObj.boardConfig}
                    correctMovesArr={configObj.correctMovesArr}
                    modalMsg={configObj.modalMsg}
                    key={configObj._id}
                  />
                );
              })
            : null}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PuzzlesContent;
