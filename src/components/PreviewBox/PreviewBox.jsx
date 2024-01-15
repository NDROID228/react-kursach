import "./PreviewBox.scss";
import { useNavigate } from "react-router-dom";

const PreviewBox = ({ title, description, image, articleID }) => {
  const navigate = useNavigate();

  const toArticleContent = () => {
    navigate(`/articles/${articleID}`);
  };

  return (
    <div className="article-preview" onClick={toArticleContent}>
      <img src={image} alt="" />
      <div className="article-content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default PreviewBox;
