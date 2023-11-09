import ArticleSlider from "../../components/ArticleBox/ArticleBox";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { useState, useEffect } from "react";
import "./ArticlesPage.scss";

import { DarkLogo } from "../../assets/img/Images";
import ArticleBox from "../../components/ArticleBox/ArticleBox";

const ArticlesPage = () => {
  // const articlesArr = [
  //   {
  //     title: "Chess history",
  //     description:
  //       "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore nulla dolor consequatur pariatur est libero quam maxime impedit perspiciatis aliquam!",
  //     image: DarkLogo,
  //   },
  //   {
  //     title: "How to play chess?",
  //     description: "This article is about basic principles of playing chess.",
  //     image: DarkLogo,
  //   },
  //   {
  //     title: "Popular Grandmasters today",
  //     description:
  //       "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore nulla dolor perspiciatis aliquam!",
  //     image: DarkLogo,
  //   }
  // ];

  const [articlesArr, setArticlesArr] = useState([]);

  const getDataArticles = async () => {
    let json;

    try {
      const response = await fetch(`http://localhost:3003/getArticlesPreview`);

      if(!response.ok) {
        throw Error(response.statusText || "Something wrong");
      }

      json = await response.json();
    } catch (error) {
      console.error(error)
    }

    setArticlesArr(JSON.parse(json));
  }

  useEffect(() => {
    getDataArticles()
  }, []);

  return (
    <div className="container">
      <Header currentPage="articles" />
      <main>
        <div className="main-content">
          {articlesArr.map((articleDataObj) => {
            return (
              <ArticleBox
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
