import React, { useState, useEffect } from "react";
import "./SolvingProject.css";
import MatrixManipulation from "./Problem/Problem";

const SolvingProject = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showMenuModal, setShowMenuModal] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState("help");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [studentTextColor, setStudentTextColor] = useState("#000");
  const [studentText] = useState("weeVent");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomColor =
        "#" + Math.floor(Math.random() * 16777215).toString(16);

      setStudentTextColor(randomColor);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const handleLogin = () => {
    if (username === "aniavetisyan019" && password === "123456") {
      setShowLoginModal(false);
      setShowMenuModal(true);
    } else {
      alert("Չի հաջովել մուտք գործել");
    }
  };

  const handleMenuItemClick = (item) => {
    setSelectedMenuItem(item);
  };

  const handleLogout = () => {
    const confirmLogout = window.confirm("Դուք ցանկանու՞մ եք դուրս գալ");

    if (confirmLogout) {
      setShowMenuModal(false);
      setSelectedMenuItem("");
      setUsername("");
      setPassword("");
      setShowLoginModal(false);
    }
  };

  const handleCancelation = () => {
    setShowMenuModal(false);
    setSelectedMenuItem("");
    setUsername("");
    setPassword("");
    setShowLoginModal(false);
  };

  const getAdviceForTheDay = () => {
    const adviceMessages = [
      "Մի պահ հատկացրեք փոքր բաները գնահատելու համար:",
      "Այսօրվա համար իրատեսական նպատակներ դրեք և մնացեք կենտրոնացած:",
      "Կապվեք մեկի հետ, ում մասին հոգ եք տանում:",
      "Փորձեք ինչ-որ նոր բան կամ դուրս եկեք ձեր հարմարավետության գոտուց:",
      "Գնահատիր և շնորհակալ եղիր դրականի համար։",
      "Օրվա ընթացքում հանգստանալու և լիցքավորվելու համար ընդմիջումներ կատարեք:",
      "Հիշիր ժպտալ, դա շատ բան կարող է փոխել։",
    ];

    const dayOfWeek = new Date().getDay();
    const adviceIndex = dayOfWeek % adviceMessages.length;
    return adviceMessages[adviceIndex];
  };

  // const [adviceMessages, setAdviceMessages] = useState([]);

  // useEffect(() => {
  //   const fetchAdviceMessages = async () => {
  //     try {
  //       const response = await fetch("./advice.txt");
  //       const text = await response.text();
  //       const messages = text
  //         .split("\n")
  //         .filter((message) => message.trim() !== "");
  //       setAdviceMessages(messages);
  //     } catch (error) {
  //       console.error("Error fetching advice messages:", error);
  //     }
  //   };

  //   fetchAdviceMessages();
  // }, []);

  // const getAdviceForTheDay = () => {
  //   const dayOfWeek = new Date().getDay();
  //   const adviceIndex = dayOfWeek % adviceMessages.length;
  //   //console.log(adviceMessages[adviceIndex]);

  //   return adviceMessages[adviceIndex];
  // };

  return (
    <div className="appSolvingProject">
      <button className="buttonProject" onClick={() => setShowLoginModal(true)}>
        Կուրսային աշխատանք
      </button>

      {showLoginModal && (
        <div className="modalSolvingProject login-modal">
          <div
            className="modalSolvingProject-content"
            style={{ maxHeight: "400px", overflowY: "auto" }}
          >
            <label>
              Գաղտնանուն:
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
            <label>
              Գաղտնագիր:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <div className="menuSolvingProject">
              <button className="buttonProject" onClick={handleCancelation}>
                Փակել
              </button>
              <button className="buttonProject" onClick={handleLogin}>
                Հաստատել
              </button>
            </div>
          </div>
        </div>
      )}

      {showMenuModal && (
        <div className="modalSolvingProject menu-modal">
          <div className="menuSolvingProject">
            <button
              className="buttonProject"
              onClick={() => handleMenuItemClick("help")}
            >
              Օգնություն
            </button>
            <button
              className="buttonProject"
              onClick={() => handleMenuItemClick("student")}
            >
              Ուսանող
            </button>
            <button
              className="buttonProject"
              onClick={() => handleMenuItemClick("problem")}
            >
              Անհատական աշխատանք
            </button>
            <button
              className="buttonProject"
              onClick={() => handleMenuItemClick("advice")}
            >
              Օրվա խորհուրդ
            </button>
          </div>

          {selectedMenuItem === "help" && (
            <div className="page-content">
              <h2>Օգնություն</h2>
              <p>
                Այս հատվածում գտնվում է կուրսային աշխատանքի թեման։
                <hr></hr> <br></br>
                Անհատական աշխատանքը տեսնելու համար սեղմել «Անհատական աշխատանք»։
                <hr></hr> <br></br>
                Անհատական աշխատանքի լուծումը տեսնելու համար սեղմել «Գեներացնել
                մատրից», այնուհետև «Կատարել տեղափոխում», որից հետո մատրիցն
                աղյուսակի տեսքով կհայտնվի։
                <hr></hr> <br></br>
                Հեղինակին տեսնելու համար սեղմել «Ուսանող»։
                <hr></hr> <br></br>
                Օրվա խորհուրդն իմանալու համար սեղմել «Օրվա խորհուրդ»։
                <hr></hr> <br></br>
                Հետևյալ պատուհանից(«Կուրսային աշխատանք») դուրս գալու համար
                սեղմել «Դուրս գալ» կոճակը։
                <hr></hr> <br></br>
                weeVent կայքը նախատեսված է նորություններ տեղադրելու և այլ
                նորություններին ծանոթանալու համար։ Օգտվելու համար գրանցվել,
                մուտք գործել անհատակն էջ։ "Տեղադրել նորություն" կոճակի միջոցով
                կարող եք տեղադրել ձեր նորությունները, իսկ «Բոլոր նորություններ»
                կոճակի միջոցով՝ ծանոթանալ այլ օգտատերերի տեղադրած նորությունների
                հետ։
                <hr></hr> <br></br>
              </p>
            </div>
          )}

          {selectedMenuItem === "student" && (
            <div className="page-content">
              <h2>Ուսանող</h2>
              <p>Անի Ավետիսյան</p>
              <p>Երևանի ինֆորմատիկայի պետական քոլեջ, 019 կուրս</p>
              <br></br>
              <h3>Կուրսային աշխատանքի անվանում</h3>
              <h1 style={{ color: studentTextColor }}>{studentText}</h1>
              <br></br>
            </div>
          )}

          {selectedMenuItem === "problem" && (
            <div className="page-content">
              <h2>Անհատական աշխատանք</h2>
              <p>
                Տրված են m ամբողջ թիվը և mxm տարր պարունակող մատրից։ Ստանալ նոր
                մատրից՝ տեղափոխելով յուրքանաչյուր սյան մեծագույն և փոքրագույն
                տարրերը։
              </p>
              <br></br>
              <MatrixManipulation />
            </div>
          )}

          {selectedMenuItem === "advice" && (
            <div className="page-content">
              <h2>Օրվա խորհուրդ</h2>
              <p>{getAdviceForTheDay()}</p>
            </div>
          )}

          <button className="buttonProject" onClick={handleLogout}>
            Դուրս գալ
          </button>
        </div>
      )}
    </div>
  );
};

export default SolvingProject;
