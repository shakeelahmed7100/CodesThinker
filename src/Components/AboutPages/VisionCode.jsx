
import React from "react";

const VisionCode = () => {
  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-[60px]">
      <div className="mx-auto grid max-w-[1536px] grid-cols-1 items-center gap-10 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:px-8 xl:gap-24">

        {/* Left Image */}
        <div className="flex w-full items-center justify-center">
          <img
            src="https://cdn.mos.cms.futurecdn.net/v2/t:0,l:0,cw:2121,ch:1193,q:80,w:2121/E9McoauPoaJ4vYJyXqR4P4.jpg"
            alt="Codes Thinker team"
            className="h-[300px] w-full border border-gray-300 object-cover sm:h-[400px] lg:h-[473px] lg:max-w-[596px]"
          />
        </div>

        {/* Right Content */}
        <div className="w-full">
          <p className="mb-3 text-base font-normal uppercase text-black">
            WHO <span className="text-[#1700B8]">WE</span> ARE
          </p>

          <h2 className="mb-3 text-3xl font-semibold leading-tight tracking-tight text-black sm:text-4xl lg:text-[40px]">
            YOUR <span className="text-[#1700B8]">VISION OUR</span> CODE
          </h2>

          <p className="text-justify text-base leading-[1.7] text-[#171717] sm:text-lg">
            At Codes Thinker, we are a passionate team of developers,
            designers, and strategists dedicated to building smart,
            scalable, and user-focused digital solutions. We thrive on
            creativity, and cutting-edge technology to transform ideas
            into impactful products. With a commitment to quality,
            transparency, and client satisfaction, we don't just deliver
            code — we deliver value. Every project we take on reflects
            our belief in innovation, precision, and long-term
            partnerships.
          </p>

          {/* Feature Buttons */}
          <div className="mt-7 flex flex-col items-start gap-4">

            <div className="inline-flex items-center gap-5 rounded-full bg-white px-4 py-3 shadow-[0_12px_22px_rgba(0,0,0,0.12)] transition duration-300 hover:-translate-y-1">
              <span className="text-2xl font-semibold leading-none">➜</span>
              <span className="text-base font-medium sm:text-lg">
                Industry Expert Staff
              </span>
            </div>

            <div className="inline-flex items-center gap-5 rounded-full bg-white px-4 py-3 shadow-[0_12px_22px_rgba(0,0,0,0.12)] transition duration-300 hover:-translate-y-1">
              <span className="text-2xl font-semibold leading-none">➜</span>
              <span className="text-base font-medium sm:text-lg">
                Client-Centric Focus
              </span>
            </div>

            <div className="inline-flex items-center gap-5 rounded-full bg-white px-4 py-3 shadow-[0_12px_22px_rgba(0,0,0,0.12)] transition duration-300 hover:-translate-y-1">
              <span className="text-2xl font-semibold leading-none">➜</span>
              <span className="text-base font-medium sm:text-lg">
                Partner rather than Vendor
              </span>
            </div>

            <div className="inline-flex items-center gap-5 rounded-full bg-white px-4 py-3 shadow-[0_12px_22px_rgba(0,0,0,0.12)] transition duration-300 hover:-translate-y-1">
              <span className="text-2xl font-semibold leading-none">➜</span>
              <span className="text-base font-medium sm:text-lg">
                Solutions Geared to Improve Productivity
              </span>
            </div>

            <div className="inline-flex items-center gap-5 rounded-full bg-white px-4 py-3 shadow-[0_12px_22px_rgba(0,0,0,0.12)] transition duration-300 hover:-translate-y-1">
              <span className="text-2xl font-semibold leading-none">➜</span>
              <span className="text-base font-medium sm:text-lg">
                Collaborative Approach Throughout the Process
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default VisionCode;
