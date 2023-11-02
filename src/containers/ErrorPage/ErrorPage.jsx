import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./ErrorPage.scss";

const ErrorPage = () => {
  return (
    <div className="container">
      <Header />
      <main>
        <div class="error-box">
          <h1 className="num-404">404</h1>
          <p className="text-404">Page is not found.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ErrorPage;
