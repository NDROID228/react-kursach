import "./StaticBox.scss";
import { useEffect, useState } from "react";
import ChessboardWrapper from "./../ChessboardWrapper/ChessboardWrapper";
import { Chess } from "chess.js";
import {
  LessonArrow,
  LessonExit,
  NextIcon,
  PreviousIcon,
  ResetIcon,
  DocumentIcon
} from "../../assets/img/Images";
import { Link, useNavigate } from "react-router-dom";
import LawsOfChess from "../../assets/LawsOfChess.pdf";

const StaticBox = ({
  boardConfig,
  setLessonCounter,
  lessonCounter,
  lessonAmount,
}) => {
  const navigate = useNavigate();
  const [square, setSquare] = useState("None");
  const [btnState, setBtnState] = useState({
    prevBtn: true,
    resetBtn: true,
    nextBtn: false,
  });
  const [lessonBtnState, setLessonBtnState] = useState({
    nextLesson: false,
    previousLesson: true,
  });
  const [moveCount, setMoveCount] = useState(0);
  const [game, setGame] = useState(new Chess());
  const [header, setHeader] = useState("");
  const [moves, setMoves] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    game.loadPgn(boardConfig.pgnString);
    setMoves(game.history({ verbose: true }));
    setComments(game.getComments());
    game.load(boardConfig.defaultPosition, true);
    setHeader(game.header().Event);
    boardConfig["onMouseOverSquare"] = (square) => {
      setSquare(square);
    };
  }, [boardConfig]);

  const makeMove = (move) => {
    const gameCopy = new Chess(game.fen());
    let made_move = null;
    try {
      made_move = gameCopy.move(move);
    } catch (error) {
      console.error(error);
    }
    if (made_move !== null) {
      setGame(gameCopy);
    }
  };

  useEffect(() => {
    switch (moveCount) {
      case 0:
        setBtnState(() => {
          return { nextBtn: false, prevBtn: true, resetBtn: true };
        });
        break;
      case moves.length:
        setBtnState((...prev) => {
          return { prev, nextBtn: true };
        });
        break;
      default:
        setBtnState(() => {
          return { nextBtn: false, prevBtn: false, resetBtn: false };
        });
        break;
    }
  }, [moveCount]);

  useEffect(() => {
    switch (lessonCounter) {
      case 0:
        setLessonBtnState(() => {
          return { nextLesson: false, previousLesson: true };
        });
        break;
      case lessonAmount - 1:
        setLessonBtnState(() => {
          return { nextLesson: true, previousLesson: false };
        });
        break;
      default:
        setLessonBtnState(() => {
          return { nextLesson: false, previousLesson: false };
        });
    }
  }, [lessonCounter]);

  return (
    <div className="basics-container">
      <div className="basics-box">
        <div className="chessboard-container">
          <div className="chessboard-box">
            <ChessboardWrapper boardConfig={boardConfig} game={game} />
          </div>
          <div className="chessboard-control-panel">
            <button
              className="control-panel-btn"
              disabled={btnState.prevBtn}
              onClick={() => {
                if (moveCount > 0) {
                  game.load(moves[moveCount - 1].before);
                  setMoveCount(moveCount - 1);
                }
              }}
            >
              <img src={PreviousIcon} alt="Previous move" />
            </button>
            <button
              className="control-panel-btn"
              disabled={btnState.resetBtn}
              onClick={() => {
                setMoveCount(0);
                game.load(moves[0].before);
              }}
            >
              <img src={ResetIcon} alt="Reset to default position" />
            </button>
            <button
              className="control-panel-btn"
              disabled={btnState.nextBtn}
              onClick={() => {
                if (moveCount <= moves.length) {
                  makeMove(moves[moveCount]);
                  setMoveCount(moveCount + 1);
                }
              }}
            >
              <img src={NextIcon} alt="Next move" />
            </button>
          </div>
        </div>

        <div className="text-container">
          <div className="instrument-panel">
            <div>
              <h1>Current square: {square}</h1>
            </div>
            <div className="instrument-panel-buttons">
              <button>
                <Link target="_blank" to={LawsOfChess} title="Laws of chess">
                  <img src={DocumentIcon} alt="Chess rules" />
                </Link>
              </button>
              <button onClick={() => navigate("/")}>
                <img src={LessonExit} alt="Exit lesson" />
              </button>
            </div>
          </div>
          <div className="lesson-header">
            <h1>{header}</h1>
          </div>
          <div className="lesson-text-box">
            <p>{comments.length !== 0 ? comments[moveCount].comment : ""}</p>
          </div>
          <div className="lesson-control-panel">
            <button
              disabled={lessonBtnState.previousLesson}
              onClick={() => {
                setLessonCounter(lessonCounter - 1);
                setMoveCount(0);
              }}
            >
              <img src={LessonArrow} alt="Next lesson" />
              <span>Previous lesson</span>
            </button>

            <button
              disabled={lessonBtnState.nextLesson}
              onClick={() => {
                setLessonCounter(lessonCounter + 1);
                setMoveCount(0);
              }}
            >
              <span>Next lesson</span>
              <img src={LessonArrow} alt="Next lesson" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaticBox;
