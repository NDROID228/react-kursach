import "./AboutPage.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useState, useEffect } from "react";

const AboutPage = () => {
  // const [serverMsg, setServerMsg] = useState("");

  // const helloFromServer = async () => {
  //   let json;
  //   try {
  //     const serverResp = await fetch("http://localhost:3003/msg");

  //     if(!serverResp.ok) {
  //       throw Error(serverResp.statusText || "Something wrong");
  //     }

  //     json = await serverResp.json();
  //   } catch (serverError) {
  //     console.error(serverError);
  //   }

  //   const obj = JSON.parse(json);
  //   setServerMsg(obj.text);
  // }

  // useEffect(() => {
  //   helloFromServer();
  // }, []);

  return (
    <div className="container">
      <Header currentPage={"about"} />
      <main>
        <div className="main-content">
          <section>
            <div className="lit-title">
              <div>
                <h2>Dnipro Scientific Lyceum of Information Technologies</h2>
              </div>
              <div>
                <h1>Qualification work</h1>
                <h1>Chessy - site for chess beginners</h1>
              </div>
              <div>
                <ul>
                  <li>
                    Done by:
                    <ul>
                      <li>Dzhun Nikita</li>
                    </ul>
                  </li>
                  <li>
                    Supervisors:
                    <ul>
                      <li>Virolaynen Nina</li>
                      <li>Pasko Anatoliy</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          {/* <h1>{ serverMsg || "" }</h1> */}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
