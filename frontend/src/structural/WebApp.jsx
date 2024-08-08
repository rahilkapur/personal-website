import React, {useState, useEffect} from "react";
import Landing from "../screens/Landing";
import About from "../screens/About";
import Experience from "../screens/Experience";
import Skills from "../screens/Skills";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navi from "./Navigation";
import Contact from "../screens/Contact";

function WebApp() { //will contain all screens

    return (
        <BrowserRouter>
      <Navi />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
    </BrowserRouter>
    )
    

}

export default WebApp;