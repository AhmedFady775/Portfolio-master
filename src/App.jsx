import React from "react";
import Navbar from "./components/navbar/navbar";
import Intro from "./components/intro";
import AboutMe from "./components/aboutMe/aboutMe";
import Projects from "./components/projects/projects";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  AOS.init();

  return (
    <div className="App">
      <Navbar />
      <main className="main__cont">
        <Intro />
        <AboutMe />
        <Projects />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}

export default App;
