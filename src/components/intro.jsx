import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { BsArrowDownShort } from "react-icons/bs";
import Resume from "../assets/resume.pdf";

function Intro() {
  return (
    <section className="intro__cont" id="intro">
      <p data-aos="fade-down" data-aos-duration="2000" className="intro">
        Hello, my name is
      </p>
      <p data-aos="fade-down" data-aos-duration="1500" className="intro-name">
        Ahmed Fady.
      </p>
      <p data-aos="fade-down" data-aos-duration="1000" className="intro-job">
        I am a Front-end Web Developer & UI/UX Designer.
      </p>
      <p data-aos="fade-up" data-aos-duration="1000" className="intro-desc">
        I am a <span className="text-[#9146ff]"> computer engineer</span> who
        designs and builds websites. Currently, I'm a student at{" "}
        <span className="text-[#9146ff]"> The British Universty in Egypt</span>{" "}
        and a <span className="text-[#9146ff]"> freelancer</span>.
      </p>
      <div
        className="flex flex-row gap-8"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <Link to="#contacts" smooth>
          <button className="flex mt-10 px-6 py-2 border border-[#9146ff] rounded text-[#9146ff] hover:bg-[#9046ff1f] __hover">
            Contact me
          </button>
        </Link>
        <a
          href={Resume}
          target="_blank"
          className="flex mt-10 px-6 py-2 border border-[#9146ff] rounded hover:text-[#9146ff] text-[var(--sm-color-background-base)] bg-[#9146ff] hover:bg-transparent font-semibold __hover"
        >
          Resume
        </a>
      </div>

      <Link
        className="relative mx-auto top-32"
        to="#aboutme"
        data-aos="fade-up"
        data-aos-duration="1500"
        smooth
      >
        <div className="go__down border-2 rounded-2xl h-12 items-end border-[#9146ff] bg-[#9046ff1f] hover:bg-transparent  __hover">
          <BsArrowDownShort
            className="animate-bounce "
            size={35}
            color="#9146ff"
          />
        </div>
      </Link>
    </section>
  );
}

export default Intro;
