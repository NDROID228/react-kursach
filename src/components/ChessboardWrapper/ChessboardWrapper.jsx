import { Chessboard } from "react-chessboard";
import "./ChessboardWrapper.scss";
import { useEffect, useState } from "react";

const ChessboardWrapper = ({ boardConfig, game }) => {
  // console.log(boardConfig);
  const [boardWidth, setBoardWidth] = useState(100);
  const [boardPosition, setBoardPosition] = useState(game.fen());
  

  // useEffect(() => {
  //   const onResizeHandler = () => {
  //     console.log("window resized");
  //   }

  //   window.addEventListener("resize", onResizeHandler)
  // });

  return (
    <div className="desk">
      <Chessboard
        id={boardConfig.id}
        position={game.fen()}
        arePiecesDraggable={boardConfig.arePiecesDraggable || null}
        areArrowsAllowed={boardConfig.areArrowsAllowed || null}
        onPieceDrop={boardConfig.onPieceDrop || (() => {})}
        boardOrientation={boardConfig.boardOrientation || "white"}
        // boardWidth={"100%"}
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
