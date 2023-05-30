import React from "react";
import Header from "../header";
import "./projects.css";
import SHOP from "../../assets/Shop.png";
import ASUFE from "../../assets/ASUFE_CPC.png";
import ALLIVES from "../../assets/ALLIVES.png";
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
      name: "Universty project",
      src: ASUFE,
      desc: "competitive programming management web app.",
      made: ["React", "Flask", "SQL"],
      live: "https://asufe-cpc.me/home",
    },
    {
      name: "All'ives",
      src: ALLIVES,
      desc: "an online shop using next.js and deployed by vercel.",
      made: ["Next.js", "vercel"],
      live: "https://all-ives-next.vercel.app/",
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
