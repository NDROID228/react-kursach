import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { useState, useEffect } from "react";
import "./ArticlesPage.scss";

import { DarkLogo } from "../../assets/img/Images";
import PreviewBox from "../../components/PreviewBox/PreviewBox";

const ArticlesPage = () => {
  const [articlesArr, setArticlesArr] = useState([]);

  const getDataArticles = async () => {
    let json;

    try {
      const response = await fetch(`http://localhost:3003/getArticlesPreview`);

      if (!response.ok) {
        throw Error(response.statusText || "Something wrong");
      }

      json = await response.json();
    } catch (error) {
      console.error(error);
    }

    setArticlesArr(JSON.parse(json));
  };

  useEffect(() => {
    getDataArticles();
  }, []);

  return (
    <div className="container">
      <Header currentPage="articles" />
      <main>
        <div className="main-content">
          {articlesArr.map((articleDataObj) => {
            return (
              <PreviewBox
                articleID={articleDataObj._id}
                title={articleDataObj.title}
                description={articleDataObj.description}
                image={DarkLogo}
              />
            );
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ArticlesPage;
