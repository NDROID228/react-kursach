import "./ButtonBox.scss";

const ButtonBox = ({ onClickEvt, text }) => {
  // console.log(type);
  return (
    <button onClick={onClickEvt} className={`basic-box-btn`}>
      {text}
    </button>
  );
};

export default ButtonBox;
