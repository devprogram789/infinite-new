import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
//import { auth } from "./Config/firebase";
import "./App.css";
import Home from "./pages/Home/Home";
import Navigation from "./components/Navigation";
import About from "./pages/About";
import Work from "./pages/Work";
import Service from "./pages/Service/Service";
import Contact from "./pages/Contact";

function App() {
  //const [{user},dispatch] = useStateValue()

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="work" element={<Work />} />
          <Route path="service" element={<Service />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
