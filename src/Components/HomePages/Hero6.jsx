
import React from "react";

const values = [
  {
    title: "Integrity",
    description:
      "We hold ourselves to a strong ethical and moral code.",
    icon: "integrity",
  },
  {
    title: "Trust",
    description:
      "We are dependable, loyal, and hardworking to achieve the same goal.",
    icon: "trust",
  },
  {
    title: "Excellence",
    description:
      "We consistently strive to deliver high-quality work without room for error.",
    icon: "excellence",
  },
];

const ValueIcon = ({ type }) => {
  return (
    <div className="flex h-[84px] w-[84px] shrink-0 items-center justify-center rounded-[15px] bg-[#080044]">
      <svg
        viewBox="0 0 64 64"
        className="h-[60px] w-[60px]"
        fill="none"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id={`icon-gradient-${type}`}
            x1="0"
            y1="0"
            x2="64"
            y2="64"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#C026FF" />
            <stop offset="100%" stopColor="#00D9FF" />
          </linearGradient>
        </defs>

        <g stroke={`url(#icon-gradient-${type})`}>
          {type === "integrity" && (
            <>
              <path d="M32 8 C20 10 13 19 12 29" />
              <path d="M32 8 C44 10 51 19 52 29" />
              <path d="M32 15 C23 25 21 35 32 53 C43 35 41 25 32 15Z" />
              <path d="M10 33 C20 32 28 40 32 53 C17 52 8 44 10 33Z" />
              <path d="M54 33 C44 32 36 40 32 53 C47 52 56 44 54 33Z" />
            </>
          )}

          {type === "trust" && (
            <>
              <path d="M32 6 L56 15 V29 C56 43 45 53 32 60 C19 53 8 43 8 29 V15Z" />
              <path d="M19 32 L28 41 L45 23" />
            </>
          )}

          {type === "excellence" && (
            <>
              <path d="M28 9 H55 V36 H38" />
              <path d="M28 9 V24" />
              <circle cx="23" cy="42" r="17" />
            </>
          )}
        </g>
      </svg>
    </div>
  );
};

const Hero6 = () => {
  return (
    <section className="min-h-screen bg-white px-5 pb-12 pt-12 font-sans text-black sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1532px]">
        {/* Section Heading */}
        <div className="mb-10">
          <h1 className="text-[42px] font-normal leading-[1.15] tracking-[-1.8px] sm:text-[50px] lg:text-[58px]">
            OUR{" "}
            <span className="font-semibold text-[#1715A5]">
              VALUE
            </span>
          </h1>

          <h2 className="mt-3 text-[22px] font-semibold leading-tight tracking-[-0.6px] sm:text-[26px] lg:text-[30px]">
            A melting pot for the best ideas
          </h2>
        </div>

        {/* Values List */}
        <div className="flex max-w-[800px] flex-col gap-[46px] sm:gap-[60px]">
          {values.map((item) => (
            <article
              key={item.title}
              className="flex items-start gap-4 sm:gap-[19px]"
            >
              <ValueIcon type={item.icon} />

              <div className="min-w-0 flex-1 pt-[1px]">
                <h3 className="text-[23px] font-semibold leading-[1.25] tracking-[-0.5px] sm:text-[27px] lg:text-[29px]">
                  {item.title}
                </h3>

                <p className="mt-1 text-[17px] font-normal leading-[1.4] tracking-[-0.15px] sm:text-[19px] lg:text-[22px]">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero6;