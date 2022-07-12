import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//import { auth } from "./Config/firebase";
import "./App.css";
import Home from "./pages/Home/Home";
import Navigation from "./components/Navigation/Navigation";
import About from "./pages/About/About";
import Work from "./pages/Work/Work";
import Services from "./pages/Service/Service";
import Contact from "./pages/Contact/Contact";
import SocialMedia from "./pages/SubService/SocialMedia/SocialMedia";
import Seo from "./pages/SubService/Seo/Seo";
import ProGramming from "./pages/SubService/ProGramming/ProGramming";
import WebDesign from "./pages/SubService/WebDesign/WebDesign";

function App() {
  //const [{user},dispatch] = useStateValue()

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="work" element={<Work />} />
          <Route path="contact" element={<Contact />} />
          <Route path="services/">
            <Route path="digital" element={<SocialMedia />} />
            <Route path="seo" element={<Seo />} />
            <Route path="code" element={<ProGramming />} />
            <Route path="design" element={<WebDesign />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
