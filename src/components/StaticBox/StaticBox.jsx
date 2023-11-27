import "./StaticBox.scss";
import { Chessboard } from "react-chessboard";
import { useState } from "react";

const StaticBox = ({ boardConfig }) => {
  const [square, setSquare] = useState('None');

  const onMouseOverSquareFn = (square) => {
    setSquare(square);
    
  };

  const onSquareClickFn = (square) => {
    console.log(square);

  }

  return (
    <div className="basics-container">
      <div className="basics-box">
        <div className="chessboard-container">
          <div className="chessboard-box">
            <Chessboard
              id={boardConfig.id}
              position={boardConfig.defaultPosition}
              onMouseOverSquare={onMouseOverSquareFn}
              onSquareClick={onSquareClickFn}
            />
          </div>
        </div>

        <div className="text-container">
          <div
            className="help-container"
            style={{
              width: "100%",
              height: "25%",
              backgroundColor: "#fff"
            }}
          >
            <h1><code>curr square:</code> {square}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaticBox;
