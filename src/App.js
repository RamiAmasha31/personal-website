import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Education from "./components/Education";
import LanguagesAndSkills from "./components/Languages";
import Projects from "./components/Projects";
import Footer from "./components/Footer"; // Import the Footer component

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Experience />
      <Education />
      <LanguagesAndSkills />
      <Projects />
      <Footer /> {/* Add the Footer component here */}
    </div>
  );
};

export default App;
