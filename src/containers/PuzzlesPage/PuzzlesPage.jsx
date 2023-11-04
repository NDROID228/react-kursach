import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import PuzzleBox from "../../components/PuzzleBox/PuzzleBox";
import "./PuzzlesPage.scss";

const PuzzlesPage = () => {
  const boardConfigArr = [
    {
      boardConfig: {
        id: "puzzle_IDObj",
        position:
          "r1bqkbnr/ppp2ppp/2np4/4p2Q/2B1P3/8/PPPP1PPP/RNB1K1NR w KQkq - 0 1",
        areArrowsAllowed: true,
        arePiecesDraggable: true,
      },
      correctMovesArr: ["Qxf7#"],
    },
    {
      boardConfig: {
        id: "puzzle_IDObj2",
        position:
          "6k1/p1b2ppp/1p6/8/P2r4/5B1P/1P3PP1/4R1K1 w - - 0 1",
        areArrowsAllowed: true,
        arePiecesDraggable: true,
      },
      correctMovesArr: ["Re8#"],
    },
  ];

  return (
    <div className="container">
      <Header currentPage={"puzzles"} />
      <main>
        <div className="main-content">
          <div className="puzzles-list">
            {boardConfigArr.map((configObj) => {
              return (
                <PuzzleBox
                  boardConfig={configObj.boardConfig}
                  correctMovesArr={configObj.correctMovesArr}
                  key={configObj.boardConfig.id}
                />
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
