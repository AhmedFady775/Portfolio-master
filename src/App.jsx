import React from "react";
import Navbar from "./components/navbar/navbar";
import Intro from "./components/intro";
import AboutMe from "./components/aboutMe/aboutMe";
import Projects from "./components/projects/projects";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="main__cont">
        <Intro />
        <AboutMe />
        <Projects />
        <Contacts />
        <Footer />
      </main>
    </div>
  );
}

export default App;
