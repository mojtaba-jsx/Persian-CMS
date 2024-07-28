import React from "react";
import "./App.css";
import { Routes, Route, useRoutes } from "react-router-dom";
import routes from "./routes";
// * Components
import SideBar from "./components/SideBar/SideBar";
import Header from "./components/Header/Header";

function App() {
  const router = useRoutes(routes);
  return (
    <>
      <SideBar />
      <div className="main">
        <Header />
        {router}
      </div>
    </>
  );
}

export default App;
