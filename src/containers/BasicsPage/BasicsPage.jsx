import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import StaticBox from "../../components/StaticBox/StaticBox";
import "./BasicsPage.scss";
import { useState } from "react";
import LessonConfig from "./LessonConfig";

const BasicsPage = () => {
  const [lessonCounter, setLessonCounter] = useState(0);
  const [lessonConfig, setLessonConfig] = useState(LessonConfig);

  return (
    <div className="container">
      <Header currentPage={"basics"} />
      <main>
        <div className="main-content">
          <StaticBox
            boardConfig={lessonConfig[lessonCounter]}
            setLessonCounter={setLessonCounter}
            lessonCounter={lessonCounter}
            lessonAmount={lessonConfig.length}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BasicsPage;
