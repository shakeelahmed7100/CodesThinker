
import React from "react";

const progressData = [
  {
    number: "4+",
    label: "Years of Experience",
  },
  {
    number: "50+",
    label: "Satisfied Clients",
  },
  {
    number: "17+",
    label: "Countries We Operate",
  },
  {
    number: "$200K+",
    label: "Managed Marketing Fund",
  },
  {
    number: "$2.9M+",
    label: "Clients Gain",
  },
];

const Hero7 = () => {
  return (
    <section className="w-full bg-[#f3f4f7] px-5 py-12 sm:px-8 sm:py-14 lg:px-12 lg:py-[50px]">
      <div className="mx-auto max-w-[1450px]">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-[38px] font-semibold leading-tight tracking-[-1.5px] text-black sm:text-[48px] lg:text-[58px]">
            Our{" "}
            <span className="text-[#1906b9]">
              Progress
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-[1200px] text-[17px] font-normal leading-[1.55] text-[#252a35] sm:text-[20px] lg:text-[24px]">
            TOJO GLOBAL connects your business directly to your target
            audience, eliminating the need to
            <br className="hidden lg:block" /> search for clients. With
            us, they'll find their way to you.
          </p>
        </div>

        {/* Statistics Cards */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-[70px] lg:grid-cols-5 lg:gap-8">
          {progressData.map((item) => (
            <div
              key={item.label}
              className="flex min-h-[180px] flex-col items-center justify-center rounded-[19px] border-2 border-white bg-gradient-to-r from-[#191568] to-[#3e55c5] px-4 py-7 text-center text-white transition-transform duration-300 hover:-translate-y-1 sm:min-h-[190px] lg:h-[204px] lg:px-3 lg:py-6"
            >
              <h3 className="text-[36px] font-bold leading-tight tracking-[-0.7px] sm:text-[40px] lg:text-[46px]">
                {item.number}
              </h3>

              <p className="mt-2 max-w-[220px] text-[16px] font-medium leading-[1.55] sm:text-[18px] lg:text-[19px]">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero7;