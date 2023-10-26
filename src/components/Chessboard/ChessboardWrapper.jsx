import { Chessboard } from "react-chessboard";
import { Chess } from "chess.js";
import { useState, useEffect } from "react";
import "./ChessboardWrapper.scss";

const ChessboardWrapper = ({ boardConfig }) => {
  const [game, setGame] = useState(new Chess());
  // const [moveCount, setMoveCount] = useState(0);

  function makeRandomMove() {
    const possibleMoves = game.moves();

    // exit if the game is over
    if (game.isGameOver() || game.isDraw() || possibleMoves.length === 0) {
      // game.reset();
      return;
    }

    const randomIndex = Math.floor(Math.random() * possibleMoves.length);
    const randomMove = possibleMoves[randomIndex];

    const gameCopy = new Chess();
    gameCopy.loadPgn(game.pgn());
    gameCopy.move(randomMove);
    setGame(gameCopy);
  }

  useEffect(() => {
    setTimeout(makeRandomMove, 1000);
  });

  return (
    <div className="desk">
      <Chessboard
        id={boardConfig.id}
        position={game.fen()}
        arePiecesDraggable={false}
      />
    </div>
  );
};

export default ChessboardWrapper;
