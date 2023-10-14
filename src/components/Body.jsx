import React from "react";

import illustration from "../assets/huddle-landing-page-with-single-introductory-section-master/huddle-landing-page-with-single-introductory-section-master/images/illustration-mockups.svg";

const Body = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:mx-14 lg:my-12 mx-[36rem]">
      <div className=" lg:w-[55%]">
        <img
          src={illustration}
          alt="illustration"
          className="lg:w-full lg:h-full"
          draggable="false"
        />
      </div>

      <div className=" text-center lg:text-start flex flex-col w-full lg:w-[45%] mt-12 lg:mt-0 lg:pl-14 lg:pr-20 lg:py-12 ">
        <h1 className=" font-Poppins text-3xl lg:text-4xl font-[700] lg:pr-8 lg:leading-[4rem]">
          Build The Community Your Fans Will Love
        </h1>
        <p className="my-8">
          Huddle re-imagines the way we build communities. You have a voice, but
          so does your audience. Create connections with your users as you
          engage in genuine discussion.
        </p>
        <button className="self-center hover:bg-[#684cb4] hover:text-white duration-300 shadow-black/60 shadow-md lg:self-start text-lg font-Poppins bg-white rounded-full my-4 py-3 px-16 text-[#684cb4]">
          Register
        </button>
      </div>
    </div>
  );
};

export default Body;
