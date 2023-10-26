import Header from "../../components/Header/Header";
import "./AboutPage.scss";

const AboutPage = () => {
  return (
    <div className="container">
      <Header currentPage={"about"} />
      <main>
        <div className="main-content">
          <h1>This is a AboutPage.</h1>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;
