import React, { Component } from "react";
import "./App.css";
import Content from "./components/Content";
import Navbar from './components/Navbar';
import Packages from './components/Packages';
import Portfolio from "./components/Portfolio";
import Aboutsection from "./Aboutsection";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";



function App() {
  return (
    <>
      <Navbar tollnumber="+92-314-2138560" />
      <Content/>
      <Portfolio/>
      <Packages/>
      <Aboutsection/>
      <Testimonials/>
      <Footer/>
    </>
  );
}

export default App;
