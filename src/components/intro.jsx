import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { TbArrowNarrowDown } from "react-icons/tb";

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
        I am a Front-end Developer & UI/UX Designer.
      </p>
      <p data-aos="fade-up" data-aos-duration="1000" className="intro-desc">
        I am a <span className="text-[#9146ff]"> computer engineer</span> who
        design and build websites. Currently, I'm a student at{" "}
        <span className="text-[#9146ff]"> The British Universty in Egypt</span>{" "}
        and a <span className="text-[#9146ff]"> freelancer</span>.
      </p>
      <Link data-aos="fade-up" data-aos-duration="1000" to="#contacts" smooth>
        <button className="flex mt-10 px-6 py-2 border border-violet-400 rounded text-violet-400 hover:bg-violet-800/30 hover:transition">
          Contact me
        </button>
      </Link>
      <Link
        className="relative mx-auto top-32"
        to="#aboutme"
        data-aos="fade-up"
        data-aos-duration="1000"
        smooth
      >
        <div className="border-2 flex rounded-2xl h-12 items-end border-[#9146ff]">
          <TbArrowNarrowDown
            className="animate-bounce"
            size={35}
            color="#9146ff"
          />
        </div>
      </Link>
    </section>
  );
}

export default Intro;
