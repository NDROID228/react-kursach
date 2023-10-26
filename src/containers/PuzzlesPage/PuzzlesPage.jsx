import Header from "../../components/Header/Header";
import "./PuzzlesPage.scss";

const PuzzlesPage = () => {
  return (
    <div className="container">
      <Header currentPage={"puzzles"} />
      <main>
        <div className="main-content">
          <h1>This is a PuzzlesPage.</h1>
        </div>
      </main>
    </div>
  );
};

export default PuzzlesPage;
