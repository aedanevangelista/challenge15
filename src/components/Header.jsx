import React from "react";
import HuddleLogo from "../assets/huddle-landing-page-with-single-introductory-section-master/huddle-landing-page-with-single-introductory-section-master/images/logo.svg";

const Header = () => {
  return (
    <div className="flex justify-center lg:justify-start items-center my-8 mx-12">
      <img
        src={HuddleLogo}
        alt="HuddleLogo"
        className=" cursor-pointer hover:scale-110 duration-300"
      />
    </div>
  );
};

export default Header;
