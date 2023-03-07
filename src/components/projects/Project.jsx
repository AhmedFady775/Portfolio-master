import React from "react";
import { TbBrandGithub } from "react-icons/tb";
import { IoMdOpen } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

function Project(props) {
  AOS.init();

  return (
    <div data-aos="fade-up" data-aos-duration="1000">
      <div className="project__cont">
        <div className="project__desc">
          <div>
            <p className="font-bold text-[#9146ff]">Featured Project</p>
            <p className="text-2xl font-bold">{props.name}</p>
          </div>
          <p className="h-10">{props.desc}</p>
          <div className="flex flex-row font-mono flex-wrap">
            {props.made.map((item) => (
              <div className="mr-4">{item}</div>
            ))}
          </div>
          <div>
            <span className="flex flex-row space-x-3">
              {props.github ? (
                <a href={props.github} target="_blank">
                  <TbBrandGithub size={25} />
                </a>
              ) : null}
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
    </div>
  );
}

export default Project;
