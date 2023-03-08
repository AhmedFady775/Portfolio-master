import React from "react";
import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";

function Footer() {
  return (
    <div className="flex flex-col py-8 items-center ">
      <div className="flex flex-row space-x-8 mb-4">
        <a
          className="icon__hover"
          href="https://github.com/AhmedFady775"
          target="_blank"
        >
          <FiGithub size={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/ahmed-fady-4a7b17248/"
          target="_blank"
          className="icon__hover"
        >
          <FiLinkedin size={20} />
        </a>
        <a
          href="https://www.facebook.com/ahmed.fadi.9"
          target="_blank"
          className="icon__hover"
        >
          <FiFacebook size={20} />
        </a>
        {/* <a
          href="https://github.com/AhmedFady775"
          target="_blank"
          className="icon__hover"
        >
          <FiTwitter size={20} />
        </a> */}
      </div>
      <p className="text-violet-400">Designed & Built by Ahmed Fady</p>
    </div>
  );
}

export default Footer;
