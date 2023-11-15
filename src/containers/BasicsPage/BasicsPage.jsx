import Footer from "../../components/Footer/Footer";
import BasicBox from "../../components/BasicBox/BasicBox";
import Header from "../../components/Header/Header";
import "./BasicsPage.scss";

const BasicsPage = () => {
  const boardConfig = {
    id: "basic_board",
    areArrowsAllowed: true,
    arePiecesDraggable: false,
  };

  return (
    <div className="container">
      <Header currentPage={"basics"} />
      <main>
        <div className="main-content">
          <BasicBox boardConfig={boardConfig} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BasicsPage;
