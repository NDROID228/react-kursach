import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./containers/MainPage/MainPage";
import ArticlesPage from "./containers/ArticlesPage/ArticlesPage";
import ArticleContent from "./components/ArticleContent/ArticleContent";
import ErrorPage from "./containers/ErrorPage/ErrorPage";
import BasicsPage from "./containers/BasicsPage/BasicsPage";
import PuzzlesPage from "./containers/PuzzlesPage/PuzzlesPage";
import AboutPage from "./containers/AboutPage/AboutPage";
import PuzzlesContent from "./components/PuzzlesContent/PuzzlesContent";
import PlayPage from "./containers/PlayPage/PlayPage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/articles" element={<ArticlesPage />}></Route>
        <Route path="/articles/:articleID" element={<ArticleContent />}></Route>
        <Route path="/basics" element={<BasicsPage />}></Route>
        <Route path="/puzzles" element={<PuzzlesPage />}></Route>
        <Route
          path="/puzzles/:puzzleLevel"
          element={<PuzzlesContent />}
        ></Route>
        <Route path="/playground" element={<PlayPage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
