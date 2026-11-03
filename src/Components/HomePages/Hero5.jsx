
import React from "react";
import {
  FaBitcoin,
  FaBriefcase,
  FaLock,
  FaRocket,
  FaExchangeAlt,
  FaLightbulb,
} from "react-icons/fa";

const features = [
  {
    title: "Blockchain Expertise",
    icon: FaBitcoin,
    position: "md:translate-x-0",
  },
  {
    title: "Small Business Support",
    icon: FaBriefcase,
    position: "md:translate-x-10",
  },
  {
    title: "Crypto Solutions",
    icon: FaLock,
    position: "md:translate-x-20",
  },
  {
    title: "Startup Business",
    icon: FaRocket,
    position: "md:translate-x-20",
  },
  {
    title: "B2B Integration",
    icon: FaExchangeAlt,
    position: "md:translate-x-10",
  },
  {
    title: "Fintech Innovation",
    icon: FaLightbulb,
    position: "md:translate-x-0",
  },
];

const Hero5 = () => {
  return (
    <section className="w-full bg-[#f3f4f6] px-5 py-12 sm:px-8 md:min-h-[594px] md:py-10">
      <div className="mx-auto flex max-w-[1150px] flex-col items-center justify-center gap-10 md:min-h-[514px] md:flex-row md:gap-0">
        {/* Center Circle */}
        <div className="relative z-10 flex h-[260px] w-[260px] shrink-0 items-center justify-center rounded-full border border-black bg-[#f3f4f6] shadow-[20px_28px_35px_rgba(0,0,0,0.13)] sm:h-[300px] sm:w-[300px] md:h-[360px] md:w-[360px]">
          <h2 className="text-center text-[30px] font-bold leading-tight tracking-tight text-black sm:text-[30px]">
            KEY
            <br />
            FEATURES
          </h2>
        </div>

        {/* Feature Cards */}
        <div className="flex w-full max-w-[580px] flex-col gap-3 md:ml-[-70px] md:max-w-[580px]">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className={`relative flex min-h-[73px] w-full items-center rounded-full border-[1.5px] border-black bg-white px-5 shadow-[0px_5px_5px_rgba(0,0,0,0.25)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0px_8px_12px_rgba(0,0,0,0.18)] sm:px-6 ${feature.position}`}
              >
                <Icon
                  aria-hidden="true"
                  className="h-[22px] w-[22px] shrink-0 text-black"
                />

                <span className="flex-1 pr-3 text-center text-base font-semibold tracking-tight text-black sm:text-lg md:text-[20px]">
                  {feature.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero5;