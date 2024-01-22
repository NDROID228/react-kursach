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
        // console.log(JSON.parse(json));
        json ? setPuzzlesArr(JSON.parse(json)) : console.log(json);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getPuzzlesFetch();
    // setPuzzlesArr([
    //   {
    //     boardConfig: {
    //       position:
    //         "r1bqkbnr/ppp2ppp/2np4/4p2Q/2B1P3/8/PPPP1PPP/RNB1K1NR w KQkq - 0 1",
    //       areArrowsAllowed: true,
    //       arePiecesDraggable: true,
    //     },
    //     correctMovesArr: ["Qxf7#"],
    //     modalMsg: "Mate in one",
    //   },
    //   {
    //     boardConfig: {
    //       position: "6k1/p1b2ppp/1p6/8/P2r4/5B1P/1P3PP1/4R1K1 w - - 0 1",
    //       areArrowsAllowed: true,
    //       arePiecesDraggable: true,
    //     },
    //     correctMovesArr: ["Re8#"],
    //     modalMsg: "Mate in one",
    //   },
    //   {
    //     boardConfig: {
    //       position: "k1n5/ppK5/1P6/7p/6pP/5pP1/5P2/Q7 w - - 0 1",
    //       areArrowsAllowed: true,
    //       arePiecesDraggable: true,
    //     },
    //     correctMovesArr: ["Qa6", "bxa6", "b7#"],
    //     modalMsg: "Mate in two",
    //   },
    //   {
    //     boardConfig: {
    //       position: "r7/6p1/6pk/4Q1N1/6pK/5N2/8/1b3B2 w - - 0 1",
    //       areArrowsAllowed: true,
    //       arePiecesDraggable: true,
    //     },
    //     correctMovesArr: ["Qb8", "Rxb8", "Ne5", "g3", "Nef7#"],
    //     modalMsg: "Mate in three",
    //   },
    // ]);
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
