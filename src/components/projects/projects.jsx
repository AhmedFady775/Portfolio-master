import React from "react";
import Header from "../header";
import HERO from "../../assets/My_project.png";
import "./projects.css";
import SHOP from "../../assets/Shop.png";
import Project from "./Project";

function Projects() {
  const projects = [
    {
      name: "E-commerce",
      src: SHOP,
      desc: "hello",
      made: ["React", "Node.js"],
      github: "https://github.com/AhmedFady775/ECOMM-Frontend",
      live: "https://tiny-brigadeiros-bbe0fd.netlify.app/",
    },
    {
      name: "Universty project",
      src: SHOP,
      desc: "hello",
      made: ["React", "Node.js"],
    },
    {
      name: "Universty project",
      src: SHOP,
      desc: "hello",
      made: ["React", "Node.js"],
    },
  ];

  return (
    <div className="projects__section__cont" id="projects">
      <Header title="my Projects" />
      <section className="projects__cont">
        {projects.map((project) => (
          <Project
            name={project.name}
            src={project.src}
            desc={project.desc}
            made={project.made}
            github={project.github}
            live={project.live}
          />
        ))}
        {/* <section className="rounded-md relative h-96">
          <div className="absolute z-50 p-6 flex flex-col justify-between w-full h-full">
            <div>
              <p className="font-bold text-purple-600">Featured Project</p>
              <p className="text-2xl font-bold">Ecommerce Shop</p>
            </div>
            <p>Description</p>
            <p>Made with</p>
            <div>
              <span className="flex flex-row space-x-3">
                <TbBrandGithub size={25} />
                <IoMdOpen size={25} />
              </span>
            </div>
          </div>
          <div className="absolute bg-violet-900/20 z-40 h-full w-full rounded"></div>
          <img
            className="absolute w-full h-full grayscale object-cover opacity-10 rounded-md"
            src={SHOP}
          />
        </section>

        <section className="rounded-md relative h-96">
          <div className="absolute z-50 p-6 flex flex-col justify-between w-full h-full">
            <div>
              <p className="font-bold text-purple-600">Featured Project</p>
              <p className="text-2xl font-bold">Ecommerce Shop</p>
            </div>
            <p>Description</p>
            <p>Made with</p>
            <div>
              <span className="flex flex-row space-x-3">
                <TbBrandGithub size={25} />
                <IoMdOpen size={25} />
              </span>
            </div>
          </div>
          <div className="absolute bg-violet-900/20 z-40 h-full w-full rounded"></div>
          <img
            className="w-full h-full grayscale object-cover opacity-10 rounded-md"
            src={SHOP}
          />
        </section> */}
      </section>
    </div>
  );
}

export default Projects;
