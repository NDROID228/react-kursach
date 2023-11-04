import "./AboutPage.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useState, useEffect } from "react";

const AboutPage = () => {
  const [serverMsg, setServerMsg] = useState("");

  const helloFromServer = async () => {
    let json;
    try {
      const serverResp = await fetch("http://localhost:3003/msg");

      if(!serverResp.ok) {
        throw Error(serverResp.statusText || "Something wrong");
      }

      json = await serverResp.json();
    } catch (serverError) {
      console.error(serverError);
    }

    const obj = JSON.parse(json);
    setServerMsg(obj.text);
  }

  useEffect(() => {
    helloFromServer();
  }, []);

  return (
    <div className="container">
      <Header currentPage={"about"} />
      <main>
        <div className="main-content">
          <h1>This is a AboutPage.</h1>
          <h1>{ serverMsg || "" }</h1>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
