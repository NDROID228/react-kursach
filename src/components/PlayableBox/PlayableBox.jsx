import "./PlayableBox.scss";
import ChessboardWrapper from "../ChessboardWrapper/ChessboardWrapper";
import ButtonBox from "../ButtonBox/ButtonBox";
import { useMemo, useState, useCallback } from "react";
import Engine from "../../assets/Engine/Engine";
import { Chess } from "chess.js";

const PlayableBox = ({ boardConfig }) => {
  const levels = {
    Easy: 2,
    Medium: 8,
    Hard: 15,
  };
  const colors = {
    White: () => {
      game.reset();
      setGamePosition(game.fen());
      setBoardConfig({
        ...boardConfigObj,
        boardOrientation: "white",
        onPieceDrop: onDrop,
      });
    },
    Black: () => {
      game.reset();
      setGamePosition(game.fen());
      setBoardConfig({
        ...boardConfigObj,
        boardOrientation: "black",
        onPieceDrop: onDrop,
      });
      findBestMove();
    },
    Random: () => {
      game.reset();
      const color = ["white", "black"];
      setGamePosition(game.fen());
      const index = Math.random() >= 0.5 ? 1 : 0;
      setBoardConfig({
        ...boardConfigObj,
        boardOrientation: color[index].toLowerCase(),
        onPieceDrop: onDrop,
      });
      if (color[index] === "black") {
        findBestMove();
      }
    },
  };
  const engine = useMemo(() => new Engine(), []);
  const game = useMemo(() => new Chess(), []);

  const [gamePosition, setGamePosition] = useState(game.fen());
  const [stockfishLevel, setStockfishLevel] = useState(2);

  const onDrop = useCallback(
    (sourceSquare, targetSquare, piece) => {
      function findBestMove() {
        engine.evaluatePosition(game.fen(), stockfishLevel, ({ bestMove }) => {
          if (bestMove) {
            game.move(bestMove);
            setTimeout(() => setGamePosition(game.fen()), 1000);
          }
        });
      }

      let move = null;

      try {
        move = game.move({
          from: sourceSquare,
          to: targetSquare,
          promotion: piece[1].toLowerCase() ?? "q",
        });
      } catch (err) {
        console.error(err);
        return false;
      }
      setGamePosition(game.fen());

      // illegal move
      if (move === null) return false;

      // exit if the game is over
      if (game.isGameOver() || game.isDraw()) return false;

      findBestMove();

      return true;
    },
    [game, engine, stockfishLevel]
  );

  const [boardConfigObj, setBoardConfig] = useState({
    ...boardConfig,
    onPieceDrop: onDrop,
  });

  function findBestMove() {
    engine.evaluatePosition(game.fen(), stockfishLevel, ({ bestMove }) => {
      if (bestMove) {
        game.move(bestMove);
        setTimeout(() => setGamePosition(game.fen()), 1000);
      }
    });
  }

  return (
    <div className="basics-container">
      <div className="basics-box">
        <div className="chessboard-container">
          <div className="chessboard-box">
            <ChessboardWrapper
              boardConfig={boardConfigObj}
              game={game}
              key={boardConfigObj.id}
            />
          </div>
        </div>

        <div className="text-container">
          <div className="color-box">
            <h2>Choose the color:</h2>
            {
              Object.entries(colors).map(([color, onClickEvt]) => {
                return <ButtonBox onClickEvt={onClickEvt} text={color} />;
              })
            }
          </div>
          <div className="level-box">
            <h2>Choose the level:</h2>
            {Object.entries(levels).map(([level, depth]) => (
              <ButtonBox
                onClickEvt={() => {
                  game.reset();
                  setGamePosition(game.fen());
                  setStockfishLevel(depth);
                }}
                text={level}
              />
            ))}
          </div>
          <div className="button-box">
            <div className="button-half-box">
              <ButtonBox
                onClickEvt={() => {
                  game.undo();
                  game.undo();
                  setGamePosition(game.fen());
                }}
                text="Undo"
              />
            </div>
            <div className="button-half-box">
              <ButtonBox
                onClickEvt={() => {
                  game.reset();
                  setGamePosition(game.fen());
                  if (boardConfigObj.boardOrientation === "black") {
                    findBestMove();
                  }
                }}
                text="Reset"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayableBox;
