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

  const textIntro = (
    <>
      <h1>Do you really think chess is a hard game?</h1>
      <h2>Are your games messy the same way as there?</h2>
      <h2>Then try out this website and think again!</h2>
    </>
  );

  return (
    <div className="container">
      <Header currentPage="main" />
      <main>
        <div className="main-content">
          {boardConfigArr.map((config) => {
            return <IntroBox boardConfig={config} key={`box-${config.id}`} textContent={textIntro} />;
          })}
        </div>
      </main>
    </div>
  );
}

export default MainPage;
