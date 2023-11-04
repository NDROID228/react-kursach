import { Chessboard } from "react-chessboard";
import { Chess } from "chess.js";
import "./ChessboardWrapper.scss";
import { useState } from "react";

const ChessboardWrapper = ({ boardConfig, game, setGame }) => {
  // console.log(boardConfig);
  const [boardPosition, setBoardPosition] = useState(game.fen());

  return (
    <div className="desk">
      <Chessboard
        id={boardConfig.id}
        position={game.fen()}
        arePiecesDraggable={boardConfig.arePiecesDraggable || null}
        areArrowsAllowed={boardConfig.areArrowsAllowed || null}
        onPieceDrop={boardConfig.onPieceDrop}
      />
    </div>
  );
};

export default ChessboardWrapper;

/**
 * interface boardConfig = {
 *  id: string,
 *  areArrowsAllowed: boolean,
 *  arePiecesDraggable: boolean,
 *  onDrop: function(sourceSquare, targetSquare, piece)
 * }
 */

// const move = gameCopy.move(`${piece[1] !== "P" ? piece[1] : ""}${targetSquare}`)
// const move = gameCopy.put({type: piece[1] !== "P" ? piece[1] : "", color: piece[0]}, targetSquare);
// gameCopy.remove({type: piece[1] !== "P" ? piece[1] : "", color: piece[0]}, sourceSquare);
