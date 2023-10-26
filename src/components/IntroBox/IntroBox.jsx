import ChessboardWrapper from "../Chessboard/ChessboardWrapper";
import "./IntroBox.scss";

const IntroBox = ({ boardConfig, textContent }) => {
  return (
    <div className="introduction-box">
      <div className="chessboard-box">
        <ChessboardWrapper boardConfig={boardConfig} key={boardConfig.id} />
      </div>
      <div className="text-box">
        { textContent }
      </div>
    </div>
  );
};

export default IntroBox;
