import React from "react";
import Header from "../header";
import "./projects.css";
import SHOP from "../../assets/Shop.png";
import ASUFE from "../../assets/ASUFE_CPC.png";
import ALLIVES from "../../assets/ALLIVES.png";
import SKYPOINT from "../../assets/SKYPOINT.png";
import AHLULLAH from "../../assets/AHLULLAH.png";
import Project1 from "./Project1";

function Projects() {
  const projects = [
    {
      name: "E-commerce Shop",
      src: SHOP,
      desc: "an online shop for selling any resources. deployed using Netlify and Heroku.",
      made: ["React", "Node.js", "Express.js", "Netlify", "Mongo db"],
      github: "https://github.com/AhmedFady775/Ecomm-shop",
      live: "https://vv2ss.netlify.app/",
    },
    {
      name: "All'ives",
      src: ALLIVES,
      desc: "an online shop using next.js and deployed by vercel.",
      made: ["Next.js", "vercel"],
      live: "https://all-ives-next.vercel.app/",
    },
    {
      name: "SKYPOINT",
      src: SKYPOINT,
      desc: "a website for hotel bookings.",
      made: ["React", "Node.js", "Express.js", "Heroku", "Mongo db", "Netlify"],
      live: "https://www.skypoint.fi/",
    },
    {
      name: "Ahlullah academy",
      src: AHLULLAH,
      desc: "an online course booking website.",
      made: ["Next.js", "Vercel", "Mongo db"],
      live: "https://www.ahlullah-academy.com/",
    },
  ];

  return (
    <div className="projects__section__cont" id="projects">
      <Header title="my Projects" />
      <section className="projects__cont">
        {projects.map((project) => (
          <Project1
            name={project.name}
            src={project.src}
            desc={project.desc}
            made={project.made}
            github={project.github}
            live={project.live}
          />
        ))}
      </section>
    </div>
  );
}

export default Projects;
