import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./ArticlesPage.scss";

const ArticlesPage = () => {
  return (
    <div className="container">
      <Header currentPage="articles" />
      <main>
        <div className="main-content">
          <h1>This is an articles page.</h1>
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default ArticlesPage;
