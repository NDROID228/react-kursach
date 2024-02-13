import { Chessboard } from "react-chessboard";
import "./ChessboardWrapper.scss";
import { useState } from "react";

const ChessboardWrapper = ({ boardConfig, game }) => {
  const [boardPosition, setBoardPosition] = useState(game.fen());

  return (
    <div className="desk">
      <Chessboard
        id={boardConfig.id}
        position={game.fen()}
        arePiecesDraggable={boardConfig.arePiecesDraggable || null}
        areArrowsAllowed={boardConfig.areArrowsAllowed || null}
        onPieceDrop={boardConfig.onPieceDrop || (() => {})}
        boardOrientation={boardConfig.boardOrientation || "white"}
        onMouseOverSquare={boardConfig.onMouseOverSquare || (() => {})}
      />
    </div>
  );
};

export default ChessboardWrapper;