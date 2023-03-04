import React from "react";
import AOS from "aos";

function Header(props) {
  AOS.init();
  return (
    <div
      className="flex flex-row items-center relative mb-10"
      data-aos="fade-right"
      data-aos-duration="1000"
    >
      {/* <div className="font-bold text-5xl lg:text-9xl opacity-5 absolute w-full flex">
        {props.title.toUpperCase()}
      </div> */}
      <div className="font-bold text-2xl lg:text-3xl header__before">
        {props.title.toUpperCase()}
      </div>
    </div>
  );
}

export default Header;
