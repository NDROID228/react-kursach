import ArticleSlider from "../../components/ArticleSlider/ArticleSlider";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./ArticlesPage.scss";

const ArticlesPage = () => {
  return (
    <div className="container">
      <Header currentPage="articles" />
        <main>
          <div className="main-content">{/* <ArticleSlider /> */}</div>
        </main>
      <Footer />
    </div>
  );
};

export default ArticlesPage;
