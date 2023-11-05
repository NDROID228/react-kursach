import ChessboardWrapper from "../ChessboardWrapper/ChessboardWrapper";
import { useState, useEffect, useCallback } from "react";
import { Chess } from "chess.js";
import "./PuzzleBox.scss";
import PuzzleModal from "../PuzzleModal/PuzzleModal";

const PuzzleBox = ({ boardConfig, correctMovesArr, modalMsg }) => {
  const [game, setGame] = useState(new Chess(boardConfig.position));
  const [correctMove, setCorrectMove] = useState(0);
  const [modalState, setModalState] = useState({
    modalType: "default",
    modalMsg: modalMsg,
  });
  

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
      setModalState({
        modalType: "mistake",
        modalMsg: `Move is invalid. Try again.`,
      });
      return false;
    }
    if (move === null) return false;

    console.log(move);
    if (correctMovesArr[correctMove] === move.san) {
      setModalState({
        modalType: "correct",
        modalMsg: `${move.san} is a correct answer!`,
      });
      setGame(gameCopy);
      setCorrectMove((prev) => prev + 1);
      if (correctMove === correctMovesArr.length) {
        boardConfig["arePiecesDraggable"] = false;
      } else {
        // makeAutoMove();
      }

      console.log(boardConfig["arePiecesDraggable"]);
    } else {
      setModalState({
        modalType: "mistake",
        modalMsg: `${move.san} is incorrect. Try again.`,
      });

      console.log(correctMovesArr[correctMove], move.san);
      console.log("Incorrect move. Try again.");
    }

    return true;
  };
  boardConfig["onPieceDrop"] = (sourceSquare, targetSquare, piece) => {
    onDrop(sourceSquare, targetSquare, piece);
  }

  return (
    <div className="puzzle-container">
      <div className="puzzle-box">
        <div className="puzzle-chessboard-box">
          <div className="puzzle-chessboard">
            <ChessboardWrapper
              boardConfig={boardConfig}
              game={game}
              setGame={setGame}
            />
          </div>
        </div>
        <div className="puzzle-msg">
          <PuzzleModal
            modalType={modalState.modalType}
            modalMsg={modalState.modalMsg}
          />
        </div>
      </div>
    </div>
  );
};

export default PuzzleBox;
