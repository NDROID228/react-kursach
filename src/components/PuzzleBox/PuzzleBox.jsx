import ChessboardWrapper from "../ChessboardWrapper/ChessboardWrapper";
import { useState, useEffect } from "react";
import { Chess } from "chess.js";
import "./PuzzleBox.scss";
import {
  PuzzleDefault,
  PuzzleCorrect,
  PuzzleMistake,
} from "../../assets/img/Images";

const PuzzleBox = ({ boardConfig, correctMovesArr, modalMsg }) => {
  const [game, setGame] = useState(new Chess(boardConfig.position));
  const [correctMove, setCorrectMove] = useState(0);
  const [modalState, setModalState] = useState({
    modalType: "default",
    modalMsg: modalMsg,
  });
  const [modalImage, setModalImage] = useState(PuzzleDefault);
  const [puzzleSolved, setPuzzleSolved] = useState(false);

  const onDrop = (sourceSquare, targetSquare, piece) => {
    const gameCopy = new Chess();
    gameCopy.load(game.fen());

    let move = null;
    try {
      move = gameCopy.move(
        {
          from: sourceSquare,
          to: targetSquare,
          promotion: piece
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

    if (correctMovesArr[correctMove] === move.san) {
      setModalState({
        modalType: "correct",
        modalMsg: `${move.san} is a correct answer!`,
      });

      if (correctMove === correctMovesArr.length - 1) {
        boardConfig.arePiecesDraggable = false;
        setPuzzleSolved(true);
        setModalState({
          modalType: "correct",
          modalMsg: "Puzzle Solved!",
        });
      } else {
        setCorrectMove((prev) => prev + 1);
      }

      setGame(gameCopy);
    } else {
      setModalState({
        modalType: "mistake",
        modalMsg: `${move.san} is incorrect. Try again.`,
      });
    }

    return true;
  };

  boardConfig["onPieceDrop"] = (sourceSquare, targetSquare, piece) => {
    onDrop(sourceSquare, targetSquare, piece);
  };

  const makeAutoMove = (autoMoveString) => {
    const gameCopy = new Chess();
    gameCopy.load(game.fen());
    console.log(gameCopy.turn());
    try {
      // Make the auto move in the copied chess entity

      const autoMove = gameCopy.move(autoMoveString);

      if (autoMove !== null && autoMove.san === autoMoveString) {
        setModalState({
          modalType: "default",
          modalMsg: `${autoMove.san} answered!`,
        });
        setCorrectMove((prev) => prev + 1);
        setGame(gameCopy);
      } else {
        setModalState({
          modalType: "mistake",
          modalMsg: `${autoMoveString} is incorrect. Try again.`,
        });
      }
    } catch (error) {
      console.error("Error making auto move:", error);
      setModalState({
        modalType: "mistake",
        modalMsg: `Error making auto move. Try again.`,
      });
    }
  };

  useEffect(() => {
    if (
      correctMove % 2 !== 0 &&
      correctMove !== 0 &&
      correctMove < correctMovesArr.length &&
      !puzzleSolved
    ) {
      const delay = setTimeout(() => {
        makeAutoMove(correctMovesArr[correctMove]);
      }, 750); // Adjust the delay as needed

      return () => clearTimeout(delay); // Clear the timeout if component unmounts or if the effect is re-executed
    }
  }, [correctMove]);

  useEffect(() => {
    switch (modalState.modalType) {
      case "mistake":
        setModalImage(PuzzleMistake);
        break;
      case "correct":
        setModalImage(PuzzleCorrect);
        break;
      case "default":
        setModalImage(PuzzleDefault);
        break;
      default:
        break;
    }
  }, [modalState.modalType]);

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
          <div className="puzzle-modal-container">
            <div className={`puzzle-modal-box ${modalState.modalType}`}>
              <div className="puzzle-modal-image">
                <img src={modalImage} alt="" />
              </div>
              <p>{modalState.modalMsg}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PuzzleBox;
