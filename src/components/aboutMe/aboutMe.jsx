import React from "react";
import Header from "../header";
import "./aboutMe.css";

function AboutMe() {
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
            Hello! My name is Ahmed. I enjoy creating responsive and
            eye-relieving websites on the Internet. I started
            <span className="text-[#9146ff]"> web development</span> circa 2021
            in my second year in
            <span className="text-[#9146ff]"> computer engineering</span>. I was
            working on a database project that made me interact with{" "}
            <span className="text-[#9146ff]"> HTML</span> &{" "}
            <span className="text-[#9146ff]"> CSS</span> for the first time!
          </p>
          <p className="aboutme-desc">
            Today, I have gained much knowledge in the web industry and started
            to pursue a path in{" "}
            <span className="text-[#9146ff]"> Frontend web development</span>{" "}
            using <span className="text-[#9146ff]"> React</span> as my main
            library. Also, I had the privilege of learning and using backend
            frameworks such as{" "}
            <span className="text-[#9146ff]"> Express.js</span> to make{" "}
            <span className="text-[#9146ff]"> fully compatible websites</span>{" "}
            for my agents and friends besides my side projects.
          </p>
          <p className="aboutme-desc">
            Here are a few technologies I have been working with recently:
            <ul className="skills__list">
              <li>React</li>
              <li>Next.js</li>
              <li>JavaScript (ES6+)</li>
              <li>Tailwind</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>Mongo db</li>
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
            <img src="./Hero.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
