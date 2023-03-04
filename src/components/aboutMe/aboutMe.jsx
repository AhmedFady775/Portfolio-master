import React from "react";
import Header from "../header";
import HERO from "../../assets/Hero.jpg";
import "./aboutMe.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

function AboutMe() {
  AOS.init();
  return (
    <div className="aboutme__cont" id="aboutme">
      <Header title={"About me"} />
      <div
        className="descrp__pic__cont"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="flex flex-col space-y-6">
          <p className="aboutme-desc">
            Hello! My name is Ahmed and I enjoy creating eye-relieving websites
            on the internet. i have started web developing in 2021 at my second
            year in computer engineering while working on a data base project
            which made me interact with frontend and learned HTML & CSS for the
            first time!
          </p>
          <p className="aboutme-desc">
            Today, I have gained a lot of knowledge in web industry and started
            working with React as a main library. Also, I had the privilege of
            making websites for my agents and friends beside my side projects.
          </p>
          <p className="aboutme-desc">
            Here are a few technologies I have been working with recently:
            <ul className="skills__list">
              <li>React</li>
              <li>Node.js</li>
              <li>Tailwind</li>
              <li>JavaScript (ES6+)</li>
              <li>Mongo</li>
              <li>Illustrator</li>
              <li>Photoshop</li>
            </ul>
          </p>
        </div>

        <div>
          {/* <p className="text-sm text-violet-600">
            hover on the image for some cool effects !!
          </p> */}
          <div className="wrapper">
            <img src={HERO} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
