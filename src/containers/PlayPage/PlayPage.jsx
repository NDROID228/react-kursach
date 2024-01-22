import "./PlayPage.scss";
import Header from "./../../components/Header/Header";
import Footer from "./../../components/Footer/Footer";
import BasicBox from "./../../components/BasicBox/BasicBox";

const PlayPage = () => {
  return (
    <div className="container">
      <Header currentPage="playground" />
      <main>
        <div className="play-container">
          <div className="play-box">
            <BasicBox
              boardConfig={{
                id: "playground",
                preset: "playable",
                areArrowsAllowed: true,
                arePiecesDraggable: true,
              }}
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PlayPage;
