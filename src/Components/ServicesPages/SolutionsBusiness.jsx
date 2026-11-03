
import React from "react";

const SolutionsBusiness = () => {
  return (
    <section className="w-full min-h-[516px] bg-white">
      <div className="mx-auto grid min-h-[516px] max-w-[1696px] grid-cols-1 items-center gap-10 px-6 py-12 sm:px-10 lg:grid-cols-2 lg:px-0 lg:py-16">

        {/* Left Content */}
        <div className="w-full">
          <h1 className="text-4xl font-bold leading-[1.05] tracking-tight text-black sm:text-5xl lg:text-[68px]">
            Perfect It{" "}
            <span className="text-[#1800B9]">Solutions</span>
            <br />
            Business
          </h1>

          <p className="mt-5 max-w-[900px] text-justify text-base font-normal leading-[1.7] text-black sm:text-lg">
            Perfect IT Solutions provides expert services in software
            development, IT consulting, cloud solutions, network security,
            data management, technical support, web design, and system
            integration to empower business growth and efficiency.
          </p>

          <a
            href="#contact"
            className="mt-14 inline-flex items-center justify-center rounded-full
            bg-gradient-to-r from-[#1800C9] to-[#09004B]
            px-8 py-[19px] text-lg font-semibold text-white
            transition-all duration-300 hover:-translate-y-1
            hover:shadow-lg hover:shadow-indigo-200"
          >
            Contact Us
          </a>
        </div>

        {/* Right Image */}
        <div className="flex w-full items-center justify-center lg:justify-start">
          <img
            src="https://cdn.mos.cms.futurecdn.net/x8oyLJtDJBPmL59WUoa36C.jpg"
            alt="Perfect IT Solutions"
            className="h-auto w-full max-w-[600px] object-contain"
          />
        </div>

      </div>
    </section>
  );
};

export default SolutionsBusiness;
