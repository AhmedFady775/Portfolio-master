import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { HiMenuAlt3 } from "react-icons/hi";
import { RiCloseFill } from "react-icons/ri";
import { useState } from "react";
import "./navbar.css";
import { Helmet } from "react-helmet";
import Resume from "../../assets/resume.pdf";

function Navbar() {
  const [open, setOpen] = useState(false);
  const handleNav = () => {
    setOpen(!open);
  };

  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;

    if (currentScrollPos === 0) {
      (document.getElementById("navbar").style.height = "100px"),
        (document.getElementById("navbar").style.boxShadow = null);
    } else {
      (document.getElementById("navbar").style.height = "70px"),
        (document.getElementById("navbar").style.boxShadow =
          "0 10px 30px -10px #10021b"),
        (document.getElementById("navbar").style.backgroundColor = "#1a0a2ff6");
    }

    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
  };

  return (
    <header className="header" id="navbar">
      <nav className="nav">
        <Link to="#intro" smooth>
          <img
            data-aos="fade-right"
            data-aos-duration="1000"
            src="https://img.icons8.com/external-others-inmotus-design/35/9146ff/external-A-alphabet-others-inmotus-design-12.png"
          />
        </Link>
        {/* <FaReact
          size={40}
          color="#9146ff"
          data-aos="fade-right"
          data-aos-duration="1000"
        /> */}
        <Helmet>
          <body className={open ? "overflow-hidden" : " "} />
        </Helmet>
        <ul className="nav__list">
          {/* <li>
            <Link to="#intro" smooth>
              A GLANCE
            </Link>
          </li> */}
          <li data-aos="fade-down" data-aos-duration="1000">
            <Link className="__hover" to="#aboutme" smooth>
              ABOUT
            </Link>
          </li>
          <li data-aos="fade-down" data-aos-duration="1200">
            <Link className="__hover" to="#projects" smooth>
              PROJECTS
            </Link>
          </li>
          <li data-aos="fade-down" data-aos-duration="1400">
            <Link className="__hover" to="#contacts" smooth>
              CONTACTS
            </Link>
          </li>
          <button data-aos="fade-down" data-aos-duration="1600">
            <a href={Resume} className="CV__button __hover" target="_blank">
              Resume
            </a>
          </button>
        </ul>
        <HiMenuAlt3
          className="sidenav__button"
          onClick={handleNav}
          size={40}
          color="#9146ff"
          data-aos="fade-left"
          data-aos-duration="1000"
        />
      </nav>

      <div
        style={
          open
            ? {
                display: "flex",
                position: "absolute",
                top: 0,
                right: 0,
                transition: "all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)",
                width: "100%",
                zIndex: 1000,
              }
            : {
                display: "flex",
                position: "absolute",
                top: 0,
                right: "-100%",
                transition: "all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)",
                width: "100%",
                zIndex: 1000,
              }
        }
      >
        <ul
          className="flex flex-col space-y-10 h-screen w-full justify-center items-center text-md font bg-[#1a0a2f]"
          onClick={handleNav}
        >
          {/* <li>
            <Link to="#intro" smooth>
              A GLANCE
            </Link>
          </li> */}
          <li>
            <Link to="#aboutme" smooth>
              ABOUT
            </Link>
          </li>
          <li>
            <Link to="#projects" smooth>
              PROJECTS
            </Link>
          </li>
          <li>
            <Link to="#contacts" smooth>
              CONTACTS
            </Link>
          </li>
          <button data-aos="fade-down" data-aos-duration="1600">
            <a href={Resume} className="CV__button __hover" target="_blank">
              Resume
            </a>
          </button>
        </ul>
        <RiCloseFill
          className="absolute top-7 right-5"
          onClick={handleNav}
          size={40}
          color="#9146ff"
        />
      </div>
    </header>
  );
}

export default Navbar;
