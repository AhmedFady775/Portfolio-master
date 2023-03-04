import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { HiMenuAlt3 } from "react-icons/hi";
import { FaReact } from "react-icons/fa";
import { RiCloseFill } from "react-icons/ri";
import { useState } from "react";
import "./navbar.css";
import { Helmet } from "react-helmet";

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
          "0 10px 30px -10px #10021b");
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
        <FaReact size={40} color="#9146ff" />
        <Helmet>
          <body className={open ? "overflow-hidden" : " "} />
        </Helmet>
        <ul className="nav__list">
          <li>
            <Link to="#intro" smooth>
              Quick Glance
            </Link>
          </li>
          <li>
            <Link to="#aboutme" smooth>
              About me
            </Link>
          </li>
          <li>
            <Link to="#projects" smooth>
              projects
            </Link>
          </li>
          <li>
            <Link to="#contacts" smooth>
              Contact
            </Link>
          </li>
          <a href="resume.pdf" className="CV__button" target="_blank">
            Resume
          </a>
        </ul>
        <HiMenuAlt3
          className="sidenav__button"
          onClick={handleNav}
          size={40}
          color="#9146ff"
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
          className="flex flex-col space-y-10 h-screen w-full justify-center items-center text-md font bg-[#170a2f]"
          onClick={handleNav}
        >
          <li>
            <Link to="#intro" smooth>
              A GLANCE
            </Link>
          </li>
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
