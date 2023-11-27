import Engine from "../../assets/Engine/Engine";
import { Chess } from "chess.js";
import { useState, useEffect, useMemo } from "react";
import PlayableBox from "../PlayableBox/PlayableBox";
import StaticBox from "../StaticBox/StaticBox";
import "./BasicBox.scss";

const BasicBox = ({ boardConfig }) => {
  const presets = {
    "playable": <PlayableBox boardConfig={boardConfig} />,
    "static": <StaticBox boardConfig={boardConfig} />,
  };

  return presets[boardConfig.preset];
};

export default BasicBox;

//  <img src="/img/test_image.jpg" alt="test" />
//  const engine = useMemo(() => new Engine(), []);
//  const game = useMemo(() => new Chess(), []);
//  const [chessBoardPosition, setChessBoardPosition] = useState(game.fen());

// function findBestMove() {
//   engine.evaluatePosition(game.fen(), Math.random() * 10, ({ bestMove }) => {
//     if (bestMove) {
//       game.move(bestMove);

//       setChessBoardPosition(game.fen());
//     }
//   });
// }

// useEffect(() => {
//   if (!game.isGameOver() || game.isDraw()) {
//     setTimeout(findBestMove, 2000);
//   }
// }, [chessBoardPosition]);
