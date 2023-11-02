import Header from "../../components/Header/Header";
import "./AboutPage.scss";
import Footer from "../../components/Footer/Footer";

const AboutPage = () => {
  return (
    <div className="container">
      <Header currentPage={"about"} />
      <main>
        <div className="main-content">
          <h1>This is a AboutPage.</h1>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
