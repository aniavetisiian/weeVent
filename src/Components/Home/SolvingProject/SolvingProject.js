import React, { useState, useEffect } from "react";
import "./SolvingProject.css";
import MatrixManipulation from "./Problem/Problem";

const SolvingProject = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showMenuModal, setShowMenuModal] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState("");
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
      alert("Invalid username or password");
    }
  };

  const handleMenuItemClick = (item) => {
    setSelectedMenuItem(item);
  };

  const handleLogout = () => {
    const confirmLogout = window.confirm("Do you want to leave?");

    if (confirmLogout) {
      setShowMenuModal(false);
      setSelectedMenuItem("");
      setUsername("");
      setPassword("");
      setShowLoginModal(true);
    }
  };

  const getAdviceForTheDay = () => {
    const adviceMessages = [
      "Take a moment to appreciate the small things.",
      "Set realistic goals for today and stay focused.",
      "Connect with someone you care about.",
      "Try something new or step out of your comfort zone.",
      "Practice gratitude and count your blessings.",
      "Take breaks to rest and recharge throughout the day.",
      "Remember to smile; it can make a big difference.",
    ];

    const dayOfWeek = new Date().getDay(); // 0 (Sunday) to 6 (Saturday)
    const adviceIndex = dayOfWeek % adviceMessages.length;
    return adviceMessages[adviceIndex];
  };

  return (
    <div className="appSolvingProject">
      <button onClick={() => setShowLoginModal(true)}>
        Project and Problem Solving
      </button>

      {showLoginModal && (
        <div className="modalSolvingProject login-modal">
          <div
            className="modalSolvingProject-content"
            style={{ maxHeight: "400px", overflowY: "auto" }}
          >
            <label>
              Username:
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
            <label>
              Password:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <button onClick={handleLogin}>Submit</button>
          </div>
        </div>
      )}

      {showMenuModal && (
        <div className="modalSolvingProject menu-modal">
          <div className="menuSolvingProject">
            <button onClick={() => handleMenuItemClick("help")}>Help</button>
            <button onClick={() => handleMenuItemClick("student")}>
              Student
            </button>
            <button onClick={() => handleMenuItemClick("problem")}>
              Problem
            </button>
            <button onClick={() => handleMenuItemClick("advice")}>
              Advice for the day
            </button>

            <button onClick={() => handleMenuItemClick("animation")}>
              Animation
            </button>
          </div>

          {selectedMenuItem === "help" && (
            <div className="page-content">
              <h2>Help</h2>
              <p>This is something for your web.</p>
            </div>
          )}

          {selectedMenuItem === "student" && (
            <div className="page-content">
              <h2>Student</h2>
              <p style={{ color: studentTextColor }}>{studentText}</p>
            </div>
          )}

          {selectedMenuItem === "problem" && (
            <div className="page-content">
              <h2>Problem</h2>
              <p>
                Given an integer m and a matrix containing mxm elements. Get a
                new matrix by moving the largest and smallest columns of each
                column.
              </p>
              <br></br>
              <MatrixManipulation />
            </div>
          )}

          {selectedMenuItem === "advice" && (
            <div className="page-content">
              <h2>Advice for the Day</h2>
              <p>{getAdviceForTheDay()}</p>
            </div>
          )}

          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default SolvingProject;
