import ChessboardWrapper from "../ChessboardWrapper/ChessboardWrapper";
import Engine from "../../assets/Engine/Engine";
import { Chess } from "chess.js";
import { useState, useEffect, useMemo } from "react";
import "./BasicBox.scss";

const BasicBox = ({ boardConfig }) => {
 
const engine = useMemo(() => new Engine(), []);
const game = useMemo(() => new Chess(), []);
const [chessBoardPosition, setChessBoardPosition] = useState(game.fen());

function findBestMove() {
  engine.evaluatePosition(game.fen(), 10, ({ bestMove }) => {
    if (bestMove) {
      game.move(bestMove);

      setChessBoardPosition(game.fen());
    }
  });
}

// function findBestMove() {
//   engine.evaluatePosition(game.fen(), 10);
//   engine.onMessage(({ bestMove }) => {
//     if (bestMove) {
//       game.move({
//         from: bestMove.substring(0, 2),
//         to: bestMove.substring(2, 4),
//         promotion: bestMove.substring(4, 5),
//       });

//       setChessBoardPosition(game.fen());
//     }
//   });
// }

useEffect(() => {
  if (!game.isGameOver() || game.isDraw()) {
    setTimeout(findBestMove, 2000);
  }
}, [chessBoardPosition]);

  return (
    <div className="basics-container">
      <div className="basics-box">
        <div className="chessboard-container">
          <div className="chessboard-box">
            <ChessboardWrapper
              boardConfig={boardConfig}
              game={game}
              key={boardConfig.id}
              
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicBox;

