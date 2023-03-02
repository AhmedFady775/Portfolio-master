import React from "react";
import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";

function Footer() {
  return (
    <div className="flex flex-col py-8 items-center ">
      <div className="flex flex-row space-x-8 mb-4">
        <FiGithub size={20} />
        <FiLinkedin size={20} />
        <FiFacebook size={20} />
        <FiTwitter size={20} />
      </div>
      <p className="text-violet-400">Designed & Built by Ahmed Fady</p>
    </div>
  );
}

export default Footer;
