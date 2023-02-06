import React, { Suspense, useContext, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./styles/index.scss";
import { useTheme } from "./provides";

import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "./provides";
import { NavBar } from "widgets/NavBar";


const App = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div className={classNames("app", {}, [theme])}>
      <NavBar/>
      <button onClick={toggleTheme}>TOGGLE</button>
      <AppRouter />
    </div>
  );
};

export default App;
