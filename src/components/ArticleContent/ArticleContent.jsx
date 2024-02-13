import "./ArticleContent.scss";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import CommentBox from "../../components/CommentBox/CommentBox";

const ArticleContent = () => {
  const articleID = useParams();
  const [articleObj, setArticleObj] = useState({});

  const navigate = useNavigate();

  const backToArticles = () => {
    navigate("/articles");
  };

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

  const [commentsArr, setCommentsArr] = useState([]);
  const getDataComments = async () => {
    let json;

    try {
      const response = await fetch(`http://localhost:3003/getArticleComments`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(articleID),
      });

      if (!response.ok) {
        throw Error(response.statusText || "Something wrong");
      }

      json = await response.json();
      
      if (json !== undefined) {
        const commentsObj = JSON.parse(json);
        console.log(JSON.parse(json));

        setCommentsArr(commentsObj.comments)
      } else {
        setCommentsArr([])
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getArticleContent
      .then((strObj) => {
        let obj = JSON.parse(strObj);
        setArticleObj(obj);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  useEffect(() => {
    getDataComments()
  }, []);

  return (
    <div className="container">
      <Header currentPage="articles" />
      <main>
        <article>
          <button className="button-back" onClick={backToArticles}>
            Back
          </button>
          <div>
            <h1>{articleObj.title || null}</h1>
          </div>
          {articleObj.text !== undefined
            ? articleObj.text.map((textObj) => {
                // console.log(textObj);
                return <div>{unpackText(textObj)}</div>;
              })
            : null}
          {/* <code>{JSON.stringify(articleObj) || null}</code> */}
        </article>
        <hr />
        <CommentBox
          commentsArr={commentsArr}
          setCommentsArr={setCommentsArr}
          articleID={articleID}
        />
      </main>
      <Footer />
    </div>
  );
};

export default ArticleContent;
