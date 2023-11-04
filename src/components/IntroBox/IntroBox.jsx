import ChessboardWrapper from "../ChessboardWrapper/ChessboardWrapper";
import { Chess } from "chess.js";
import { useState, useEffect } from "react";
import "./IntroBox.scss";

const IntroBox = ({ boardConfig, textContent }) => {
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
    <div className="introduction-box">
      <div className="chessboard-box">
        <ChessboardWrapper boardConfig={boardConfig} game={game} key={boardConfig.id} />
      </div>
      <div className="text-box">
        { textContent }
      </div>
    </div>
  );
};

export default IntroBox;
