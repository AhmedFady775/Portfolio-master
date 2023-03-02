import React from "react";
import { TbBrandGithub } from "react-icons/tb";
import { IoMdOpen } from "react-icons/io";
import { Link } from "react-router-dom";

function Project(props) {
  return (
    <div className="project__cont">
      <div className="project__desc">
        <div>
          <p className="font-bold text-[#9146ff]">Featured Project</p>
          <p className="text-2xl font-bold">{props.name}</p>
        </div>
        <p>{props.desc}</p>
        <div className="flex flex-row gap-4 font-mono">
          {props.made.map((item) => (
            <div>{item}</div>
          ))}
        </div>
        <div>
          <span className="flex flex-row space-x-3">
            <a href={props.github} target="_blank">
              <TbBrandGithub size={25} />
            </a>
            <a href={props.live} target="_blank">
              <IoMdOpen size={25} />
            </a>
          </span>
        </div>
      </div>
      <div className="img__cont">
        <img
          className="w-full h-full object-cover rounded-md"
          src={props.src}
        />
      </div>
    </div>
  );
}

export default Project;
