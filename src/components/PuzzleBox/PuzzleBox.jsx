import ChessboardWrapper from "../ChessboardWrapper/ChessboardWrapper";
import { useState, useEffect, useCallback } from "react";
import { Chess, validateFen } from "chess.js";
import "./PuzzleBox.scss";

const PuzzleBox = ({ boardConfig, correctMovesArr }) => {
  const [game, setGame] = useState(new Chess(boardConfig.position));
  const [correctMove, setCorrectMove] = useState(0);
  // console.log(validateFen(boardConfig.position));

  // useEffect(() => {
  //   console.log(game.ascii());
  // }, [game])

  // const makeAutoMove = () => {
  //   console.log("made automove");
  //   const autoMove = correctMovesArr[correctMove];
    
  //   const gameCopy = new Chess();
  //   gameCopy.loadPgn(game.pgn());

  //   gameCopy.move(autoMove);
  //   setGame(gameCopy);
  //   setCorrectMove(prev => prev + 1);

  //   return true;
  // } 

  const onDrop = (sourceSquare, targetSquare, piece) => {
    // console.log(sourceSquare, targetSquare, piece);

    const gameCopy = new Chess();
    gameCopy.loadPgn(game.pgn());

    let move = null;
    try {
      move = gameCopy.move(
        {
          from: sourceSquare,
          to: targetSquare,
          // promotion: piece[1].toLowerCase() ?? "q",
        },
        { strict: true }
      );
    } catch (error) {
      return false;
    }
    if (move === null) return false;

    console.log(move);
    if(correctMovesArr[correctMove] === move.san) {
      // showSuccessMsg();
      setGame(gameCopy);
      setCorrectMove(prev => prev + 1);
      if (correctMove === correctMovesArr.length) {
        boardConfig["arePiecesDraggable"] = false;
      } else {
        // makeAutoMove();
      }

      console.log(boardConfig["arePiecesDraggable"]);
    } else {
      // showFailMsg();
      
      console.log(correctMovesArr[correctMove], move.san);
      console.log("Incorrect move. Try again.");
    }

    return true;
  };
  boardConfig["onPieceDrop"] = (sourceSquare, targetSquare, piece) =>
    onDrop(sourceSquare, targetSquare, piece);

  return (
    <div className="puzzle-box">
      <div className="puzzle-fail-msg"></div>
      <div className="puzzle-success-msg"></div>
      <div className="puzzle-chessboard-box">
        <ChessboardWrapper
          boardConfig={boardConfig}
          game={game}
          setGame={setGame}
        />
      </div>
    </div>
  );
};

export default PuzzleBox;
