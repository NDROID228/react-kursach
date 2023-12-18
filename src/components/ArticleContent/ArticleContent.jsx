import "./ArticleContent.scss";
import Header from "../Header/Header";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Footer from "../Footer/Footer";

const ArticleContent = ({}) => {
  const articleID = useParams();
  const [articleObj, setArticleObj] = useState({});
  const navigate = useNavigate();

  const getArticleContent = new Promise((resolve, reject) => {
    fetch(`http://localhost:3003/getArticleContent`, {
      method: "PUT",
      body: JSON.stringify({ ID: articleID }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        // console.log(response);
        if (!response.ok) {
          reject(Error(response.statusText || "Something wrong"));
        } else {
          resolve(response.json());
        }
      })
      .catch((error) => {
        console.error(error);
      });
  });

  useEffect(() => {
    getArticleContent
      .then((strObj) => {
        // console.log("before op");
        let obj = JSON.parse(strObj);
        // console.log(obj.text);
        setArticleObj(obj);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const unpackText = (textObj) => {
    for (const key in textObj) {
      const values = {
        h1: <h1 key={textObj[key]}>{textObj[key]}</h1>,
        h3: <h3 key={textObj[key]}>{textObj[key]}</h3>,
        p: <p key={textObj[key]}>{textObj[key]}</p>,
        img: (
          <img
            alt={textObj[key]}
            src={`/img/${textObj[key]}`}
            key={textObj[key]}
          />
        ),
      };

      return values[key];
    }
  };

  const backToArticles = () => {
    navigate("/articles")
  }

  return (
    <div className="container">
      <Header currentPage="articles" />
      <main>
        <article>
          <button className="button-back" onClick={backToArticles}>Back</button>
          <div>
            <h1>{articleObj.title || null}</h1>
          </div>
          {articleObj.text !== undefined
            ? articleObj.text.map((textObj) => {
                console.log(textObj);
                return <div>{unpackText(textObj)}</div>;
              })
            : null}
          {/* <code>{JSON.stringify(articleObj) || null}</code> */}
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default ArticleContent;
