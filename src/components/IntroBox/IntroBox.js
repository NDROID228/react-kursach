import ChessboardWrapper from "../Chessboard/ChessboardWrapper";
import "./IntroBox.scss";

const IntroBox = ({ boardConfig }) => {
  return (
    <div className="introduction-box">
      <div className="chessboard-box">
        <ChessboardWrapper boardConfig={boardConfig} key={boardConfig.id} />
      </div>
      <div className="text-box">
        <h1>Do you really think chess is a hard game?</h1>
        <h2>Then try out this website and think again!</h2>
      </div>
    </div>
  );
};

export default IntroBox;
