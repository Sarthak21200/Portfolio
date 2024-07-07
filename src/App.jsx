import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/PortFolio";
import Experience from "./components/Experiance";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import AnimatedBackground from "./components/AnimatedBackground"; // Adjust path as needed
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="relative">
      <AnimatedBackground className="absolute inset-0 z-0" />
      <div className="relative z-10">
        <Navbar />
        <Home />
        <About />
        <Portfolio />
        <Experience />
        <Contact />
        <Footer />
        <Toaster />
      </div>
    </div>
  );
}

export default App;
