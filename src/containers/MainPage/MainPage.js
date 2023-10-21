import Header from "../../components/Header/Header";
import IntroBox from "../../components/IntroBox/IntroBox";
import "./MainPage.scss";

function MainPage() {
  return (
    <div className="container">
      <Header />
      <main>
        <div className="main-content">
          <IntroBox />
          <IntroBox />
          <IntroBox />
        </div>
      </main>
    </div>
  );
}

export default MainPage;
