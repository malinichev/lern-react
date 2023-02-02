import React, { Suspense, useContext, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./styles/index.scss";
import { useTheme } from "./provides";

import { classNames } from "shared/lib/classNames/classNames";
import { MainPage } from "pages/MainPage";
import { AboutPage } from "pages/AboutPage";

const App = () => {
  const { theme, toggleTheme } = useTheme();
  const bool = true;
  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE</button>
      <Link to={"/"}>Главная</Link>
      <Link to={"/about"}>О сайте</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={"/about"} element={<AboutPage />} />
          <Route path={"/"} element={<MainPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
