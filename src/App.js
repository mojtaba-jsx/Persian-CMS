import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
// * Components
import SideBar from "./components/SideBar/SideBar";
import Header from "./components/Header/Header";
import Products from './components/Products/Products';
import Comments from './components/Comments/Comments';
import Users from './components/Users/Users';
import Orders from './components/Orders/Orders';
import Offs from './components/Offs/Offs';


function App() {
  return (
    <>
      <SideBar />
      <div className="main">
        <Header />
        <Routes>
          <Route path="/products" element={<Products />} />
          <Route path="/comments" element={<Comments />} />
          <Route path="/users" element={<Users />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/offs" element={<Offs />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
