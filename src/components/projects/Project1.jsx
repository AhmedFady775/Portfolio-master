import React from "react";
import { TbBrandGithub } from "react-icons/tb";
import { IoMdOpen } from "react-icons/io";
// You can also use <link> for styles

function Project(props) {
  return (
    <div data-aos="fade-up" data-aos-duration="1000">
      <a href={props.live} target="_blank">
        <div className="project__cont">
          <div className="img__cont">
            <img
              className="w-full h-full object-cover rounded-md"
              src={props.src}
            />
          </div>
          <div className="project__desc">
            <div>
              <p className="font-bold text-[#9146ff]">Featured Project</p>
              <p className="text-2xl font-bold ">{props.name}</p>
            </div>
            <p className="h-10">{props.desc}</p>
            <div className="flex flex-row font-mono flex-wrap">
              {props.made.map((item) => (
                <div className="mr-4 text-[#ccd6f6]">{item}</div>
              ))}
            </div>
            <div>
              <span className="flex flex-row space-x-3">
                {props.github ? (
                  <a
                    className="__hover hover:text-[#9146ff]"
                    href={props.github}
                    target="_blank"
                  >
                    <TbBrandGithub size={25} />
                  </a>
                ) : null}
                <a
                  className="__hover hover:text-[#9146ff]"
                  href={props.live}
                  target="_blank"
                >
                  <IoMdOpen size={25} />
                </a>
              </span>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

export default Project;
