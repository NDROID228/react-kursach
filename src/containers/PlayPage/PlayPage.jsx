import "./PlayPage.scss";
import Header from "./../../components/Header/Header";
import Footer from "./../../components/Footer/Footer";
import PlayableBox from "../../components/PlayableBox/PlayableBox";

const PlayPage = () => {
  return (
    <div className="container">
      <Header currentPage="playground" />
      <main>
        <PlayableBox
          boardConfig={{
            id: "playground",
            areArrowsAllowed: true,
            arePiecesDraggable: true,
          }}
        />
      </main>
      <Footer />
    </div>
  );
};

export default PlayPage;
