import "./ArticleContent.scss";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

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
        console.log(response);
        if (!response.ok) {
          reject(Error(response.statusText || "Something wrong"));
        } else {
          resolve(response.json());
        }
      })
      .catch((error) => {
        console.log(error);
      });

    //   setArticleObj(JSON.parse(json));
  });
  //   async () => {
  //     let json;

  //     try {
  //       const response = await fetch(`http://localhost:3003/getArticleContent`, {
  //         method: "PUT",
  //         body: JSON.stringify({ ID: articleID }),
  //         headers: {
  //           "Content-Type": "application/json",
  //           Accept: "application/json",
  //         },
  //       });
  //       console.log(response);

  //       if (!response.ok) {
  //         throw Error(response.statusText || "Something wrong");
  //       }

  //       json = await response.json();
  //     } catch (error) {
  //       console.error(error);
  //       //   return
  //     }

  //     setArticleObj(JSON.parse(json));
  //   };

  useEffect(() => {
    getArticleContent
      .then((strObj) => {
        let obj = JSON.parse(strObj);
        console.log(obj.text);
        let textArr = unpackText(obj.text);
        const objModified = {
            ...obj,
            text: textArr
        }
        console.log(objModified);
        setArticleObj(objModified);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const unpackText = (textObj) => {
    console.log(textObj);
    const tmpArr = [];
    for (const key in textObj) {
      switch (key) {
        case "h3":
          console.log(textObj[key]);
          tmpArr.push(<h3>{textObj[key]}</h3>);
          break;
        case "p":
          console.log(textObj[key]);
          tmpArr.push(<p>{textObj[key]}</p>);
          break;
        default:
          break;
      }
    }
    console.log(tmpArr);
    return tmpArr;
  };

  return (
    <div>
      <div>
        <h1>{articleObj.title}</h1>
        { articleObj.text !== undefined ? articleObj.text.map((elem) => {
          return elem;
        }) : null }
        {JSON.stringify(articleObj)}
      </div>
    </div>
  );
};

export default ArticleContent;
