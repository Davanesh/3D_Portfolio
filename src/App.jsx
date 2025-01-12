import { BrowserRouter } from "react-router-dom";
import React, { useEffect, useState } from "react";
import {
  About,
  Contact,
  Hero,
  Navbar,
  Tech,
  Project,
  StarsCanvas,
  Social,
  Resume,
  Footer,
} from "./components";
import "./App.css";

const App = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div
          className="custom-cursor"
          style={{
            left: `${cursorPosition.x}px`,
            top: `${cursorPosition.y}px`,
          }}
        />
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar/>
          <Hero/>
        </div>
        <About/>
        <Tech/>
        <Project/>
        <div className="relative z-0">
          <Contact/>
          <StarsCanvas/>
        </div>
        <Social/>
      </div>
      <Resume/>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
