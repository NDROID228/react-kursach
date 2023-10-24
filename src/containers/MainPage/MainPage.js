import Header from "../../components/Header/Header";
import IntroBox from "../../components/IntroBox/IntroBox";
import { useState } from "react";
import "./MainPage.scss";

function MainPage() {
  // const [boardConfigArr, setBoardConfigArr] = useState([]);

  // useState(() => {
  //   setBoardConfigArr([
  //     {
  //       id: "intro_board"
  //     }
  //   ])
  // }, []);
  const boardConfigArr = [
    {
      id: "intro_board",
    },
  ];

  return (
    <div className="container">
      <Header />
      <main>
        <div className="main-content">
          {boardConfigArr.map((config) => {
            return <IntroBox boardConfig={config} key={`box-${config.id}`}/>;
          })}
        </div>
      </main>
    </div>
  );
}

export default MainPage;
