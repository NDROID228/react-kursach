import { useState, useEffect } from "react";
import "./PuzzleModal.scss";
import {
  PuzzleDefault,
  PuzzleCorrect,
  PuzzleMistake,
} from "../../assets/img/Images";

const PuzzleModal = ({ modalType, modalMsg }) => {
  const [modalImage, setModalImage] = useState(PuzzleDefault);

  useEffect(() => {
    switch (modalType) {
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
  }, [modalType]);

  return (
    <div className="puzzle-modal-container">
      <div className={`puzzle-modal-box ${modalType}`}>
        <div className="puzzle-modal-image">
          <img src={modalImage} alt="" />
        </div>
        <p>{modalMsg}</p>
      </div>
    </div>
  );
};

export default PuzzleModal;
