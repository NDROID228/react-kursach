import Footer from "../../components/Footer/Footer";
import BasicBox from "../../components/BasicBox/BasicBox";
import Header from "../../components/Header/Header";
import "./BasicsPage.scss";

const BasicsPage = () => {
  const boardConfigArr = [
    {
      id: "basic_board",
      preset: "static",
      defaultPosition: "8/8/8/8/8/8/8/8",
    }
  ];

  return (
    <div className="container">
      <Header currentPage={"basics"} />
      <main>
        <div className="main-content">
          {boardConfigArr.map((config) => {
            return <BasicBox boardConfig={config} />;
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BasicsPage;
