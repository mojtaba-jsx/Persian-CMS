import React from "react";
import "./App.css";
// * Components
import SideBar from "./components/SideBar/SideBar";
import Header from "./components/Header/Header";
function App() {
  return (
    <>

        <SideBar />
        <div className="main">
          <Header/>
          {/* {Routes} */}
        </div>

    </>
  );
}

export default App;
