import "./AboutPage.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useState } from "react";
import titleBoxText from "./titleBox";

const AboutPage = () => {
  const [selector, setSelector] = useState(0);

  return (
    <div className="container">
      <Header currentPage={"about"} />
      <main>
        <div className="main-content">
          <section>
            <div className="tutorial-video">
              <h2>
                Before you start exploring,<br />take a few minutes to watch a
                helpful video guide that walks you through the website's
                functionalities.
              </h2>
              <video src="/presentation.mp4" controls>
                <source src="presentation.mp4" type="video/mp4" />
                Your browser does not support HTML video.
              </video>
            </div>
            <div className="lit-title">
              <div>
                <h2>{titleBoxText[selector].school}</h2>
              </div>
              <div>
                <h1>{titleBoxText[selector].title_start}</h1>
                <h1>{titleBoxText[selector].title_end}</h1>
              </div>
              <div>
                <ul>
                  <li>
                    {titleBoxText[selector].done}
                    <ul>
                      <li>{titleBoxText[selector].creator}</li>
                    </ul>
                  </li>
                  <li>
                    {titleBoxText[selector].supervisors_list}
                    <ul>
                      <li>{titleBoxText[selector].supervisor_1}</li>
                      <li>{titleBoxText[selector].supervisor_2}</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div>
                <h3>{titleBoxText[selector].city}</h3>
              </div>
              <div>
                <div
                  className={`first-btn ${selector === 0 ? "select" : ""}`}
                  onClick={() => setSelector(0)}
                >
                  EN
                </div>
                <div
                  className={`second-btn ${selector === 1 ? "select" : ""}`}
                  onClick={() => setSelector(1)}
                >
                  UA
                </div>
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
