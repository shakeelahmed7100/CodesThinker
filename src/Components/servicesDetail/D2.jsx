
import React from "react";

const D2 = () => {
  return (
    <section className="w-full bg-white px-6 py-12 sm:px-10 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-[1480px]">

        {/* Heading */}
        <h1 className="text-4xl font-semibold leading-tight tracking-tight text-black sm:text-5xl lg:text-[54px]">
          OUR <span className="text-[#1800B8]">VALUE</span>
        </h1>

        {/* Subtitle */}
        <h2 className="mt-2 text-xl font-semibold tracking-tight text-black sm:text-2xl">
          A melting pot for the best ideas
        </h2>

        {/* Value 1: Integrity */}
        <div className="mt-10 flex items-center gap-5">
          <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-[14px] bg-[#090044]">
            <svg
              viewBox="0 0 64 64"
              className="h-14 w-14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="integrityGradient" x1="8" y1="5" x2="55" y2="58">
                  <stop stopColor="#20D8FF" />
                  <stop offset="1" stopColor="#D000FF" />
                </linearGradient>
              </defs>
              <path
                d="M32 52C19 45 10 34 13 23C23 22 30 29 32 39C34 25 42 18 52 21C56 34 44 46 32 52Z"
                stroke="url(#integrityGradient)"
                strokeWidth="3.5"
                strokeLinejoin="round"
              />
              <path
                d="M32 51C24 37 21 20 32 8C44 19 42 37 32 51Z"
                stroke="url(#integrityGradient)"
                strokeWidth="3.5"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div>
            <h3 className="text-2xl font-semibold leading-tight text-black">
              Integrity
            </h3>
            <p className="mt-1 text-base leading-relaxed text-[#171717] sm:text-xl">
              We hold ourselves to a strong ethical and moral code.
            </p>
          </div>
        </div>

        {/* Value 2: Trust */}
        <div className="mt-14 flex items-center gap-5">
          <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-[14px] bg-[#090044]">
            <svg
              viewBox="0 0 64 64"
              className="h-14 w-14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="trustGradient" x1="10" y1="4" x2="52" y2="60">
                  <stop stopColor="#20D8FF" />
                  <stop offset="1" stopColor="#D000FF" />
                </linearGradient>
              </defs>
              <path
                d="M32 5C40 11 48 12 56 12V28C56 41 45 52 32 59C19 52 8 41 8 28V12C17 12 25 10 32 5Z"
                stroke="url(#trustGradient)"
                strokeWidth="3.5"
                strokeLinejoin="round"
              />
              <path
                d="M20 31L28 39L44 22"
                stroke="url(#trustGradient)"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div>
            <h3 className="text-2xl font-semibold leading-tight text-black">
              Trust
            </h3>
            <p className="mt-1 text-base leading-relaxed text-[#171717] sm:text-xl">
              We are dependable, loyal, and hardworking to achieve the same goal.
            </p>
          </div>
        </div>

        {/* Value 3: Excellence */}
        <div className="mt-14 flex items-center gap-5">
          <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-[14px] bg-[#090044]">
            <svg
              viewBox="0 0 64 64"
              className="h-14 w-14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="excellenceGradient" x1="8" y1="8" x2="55" y2="56">
                  <stop stopColor="#20D8FF" />
                  <stop offset="1" stopColor="#D000FF" />
                </linearGradient>
              </defs>
              <path
                d="M30 9H54V35H40"
                stroke="url(#excellenceGradient)"
                strokeWidth="4"
                strokeLinejoin="round"
              />
              <path
                d="M30 22V35"
                stroke="url(#excellenceGradient)"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <circle
                cx="20"
                cy="43"
                r="17"
                stroke="url(#excellenceGradient)"
                strokeWidth="4"
              />
            </svg>
          </div>

          <div>
            <h3 className="text-2xl font-semibold leading-tight text-black">
              Excellence
            </h3>
            <p className="mt-1 max-w-[650px] text-base leading-relaxed text-[#171717] sm:text-xl">
              We consistently strive to deliver high-quality work without
              room for error.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default D2;


