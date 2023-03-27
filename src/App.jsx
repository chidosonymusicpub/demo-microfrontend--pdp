import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Routes, Route, Outlet, Link } from 'react-router-dom'
import Footer from "home/Footer";
import Header from "home/Header";
import "remixicon/fonts/remixicon.css";
import "./index.scss";


import PDPContent from "../src/PDPContent";

const App = () => (
  <BrowserRouter>
      <div className="text-3xl mx-auto max-w-6xl">
      <Header />
      <div className="my-10">
      <Routes>
        <Route path="/product/:id" element={<PDPContent/>} />
      </Routes>
      </div>
      <Footer />
    </div>
  </BrowserRouter>
  


);
ReactDOM.render(<App />, document.getElementById("app"));
