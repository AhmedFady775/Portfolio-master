import React from "react";
import Header from "../header";
import "./projects.css";
import Project1 from "./Project1";

function Projects() {
  const projects = [
    {
      name: "All'ives",
      src: "./ALLIVES.png",
      desc: "an online shop using next.js and deployed by vercel.",
      made: ["Next.js", "vercel"],
      live: "https://all-ives-next.vercel.app/",
    },
    {
      name: "E-commerce Shop",
      src: "./Shop.png",
      desc: "an online shop for selling any resources. deployed using Netlify and Heroku.",
      made: ["React", "Node.js", "Express.js", "Netlify", "Mongo db"],
      github: "https://github.com/AhmedFady775/Ecomm-shop",
      live: "https://vv2ss.netlify.app/",
    },
    {
      name: "SKYPOINT",
      src: "./SKYPOINT.png",
      desc: "a website for hotel bookings.",
      made: ["React", "Node.js", "Express.js", "Heroku", "Mongo db", "Netlify"],
      live: "https://www.skypoint.fi/",
    },
    {
      name: "Ahlullah academy",
      src: "./AHLULLAH.png",
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
