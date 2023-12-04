import React from "react";
import { Link } from "react-router-dom";
import "./styles/index.scss";
import { useTheme } from "app/providers/ThemeProvider";
import { clsx } from "shared/lib/clsx/clsx";
import { AppRouter } from "app/providers/router";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={clsx(`app ${theme}`)}>
      <button onClick={toggleTheme}>switch</button>
      <Link to={"/"}>Main</Link>
      <Link to={"/about"}>About</Link>
      <AppRouter />
    </div>
  );
};

export default App;
