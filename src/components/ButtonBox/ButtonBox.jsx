import "./ButtonBox.scss";

const ButtonBox = ({ onClickEvt, text, isDisabled }) => {
  return (
    <button onClick={onClickEvt} className={`basic-box-btn`} disabled={isDisabled || false}>
      {text}
    </button>
  );
};

export default ButtonBox;
