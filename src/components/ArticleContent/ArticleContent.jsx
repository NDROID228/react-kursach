import "./ArticleContent.scss";
import Header from "../Header/Header";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Footer from "../Footer/Footer";

const ArticleContent = ({}) => {
  const articleID = useParams();
  const [articleObj, setArticleObj] = useState({});

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

    //   setArticleObj(JSON.parse(json));
  });

  useEffect(() => {
    getArticleContent
      .then((strObj) => {
        let obj = JSON.parse(strObj);
        // console.log(obj.text);
        setArticleObj(obj);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const unpackText = (textObj) => {
    console.log(textObj);
    for (const key in textObj) {
      const values = {
        h1: <h1>{textObj[key]}</h1>,
        h3: <h3>{textObj[key]}</h3>,
        p: <>{textObj[key]}</>,
      };

      return values[key];
    }
  };

  return (
    <div className="container">
      <Header currentPage="articles" />
      <main>
        <article>
          <p>
            <h1>{articleObj.title || null}</h1>
          </p>
          {articleObj.text !== undefined
            ? articleObj.text.map((textObj) => {
                return <p>{unpackText(textObj)}</p>;
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
