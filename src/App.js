import "./App.css";
import Header from "./Components/Header";
import BigBoxesData from "./Data/BigBoxesData";
import BigBoxCard from "./Components/BigBoxCard";
import SmallBoxesData from "./Data/SmallBoxesData";
import SmallBoxCard from "./Components/SmallBoxCard";
import React, { Fragment, useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const darkModeHandler = () => {
    darkMode ? setDarkMode(false) : setDarkMode(true);
    if (darkMode) {
      document.body.style.backgroundImage = "linear-gradient( hsl(225, 100%, 98%) 35%, hsl(0, 0%, 100%) 35%)";
    } else {
      document.body.style.backgroundImage = 'linear-gradient(hsl(232, 19%, 15%) 35%, hsl(230, 17%, 14%) 35%)';
    }
  };

  return (
    <Fragment>
      <Header darkMode={darkMode} darkModeHandler={darkModeHandler} />
      <BigBoxCard darkMode={darkMode} data={BigBoxesData} />
      <SmallBoxCard darkMode={darkMode} data={SmallBoxesData} />
    </Fragment>
  );
}

export default App;
