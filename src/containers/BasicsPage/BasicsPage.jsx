import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./BasicsPage.scss";

const BasicsPage = () => {
  return (
    <div className="container">
      <Header currentPage={"basics"} />
      <main>
        <div className="main-content">
          <h1>This is a basics page.</h1>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BasicsPage;
