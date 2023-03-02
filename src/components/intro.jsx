import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

function Intro() {
  AOS.init();
  return (
    <section className="intro__cont" id="intro">
      <p data-aos="fade-right" data-aos-duration="1500" className="intro">
        Hello, my name is
      </p>
      <p data-aos="fade-right" data-aos-duration="1500" className="intro-name">
        Ahmed Fady.
      </p>
      <p data-aos="fade-right" data-aos-duration="1500" className="intro-job">
        I'am a Front-end Developer & UI/UX Designer.
      </p>
      <p data-aos="fade-up" data-aos-duration="2000" className="intro-desc">
        I'm a computer engineer who build and design websites. Currently, I'm a
        student at The British universty in Egypt and a freelancer.
      </p>
      <Link to="#contacts" smooth>
        <button className="flex mt-10 px-6 py-2 border border-violet-400 rounded text-violet-400 hover:bg-violet-800/30 hover:transition">
          Contact me
        </button>
      </Link>
    </section>
  );
}

export default Intro;
