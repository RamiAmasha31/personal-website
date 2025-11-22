import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import LanguagesAndSkills from "./components/Languages";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Education />
      <LanguagesAndSkills />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
