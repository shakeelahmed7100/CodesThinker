
import React from "react";

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
        alt="Team"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="max-w-5xl px-6 text-center">
          <h1 className="text-4xl font-bold leading-tight text-white md:text-7xl">
            Welcome to{" "}
            <span className="text-blue-500 transition-colors duration-300 hover:text-red-500">
              Codes Thinker
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-4xl text-lg leading-relaxed text-white md:text-3xl">
            We craft smart, user friendly digital solutions that help
            businesses innovate and grow.
          </p>

          {/* Buttons */}
          <div className="mt-12 flex flex-col justify-center gap-5 sm:flex-row">
            <button
              className="rounded-full bg-blue-600 px-10 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:bg-blue-800 hover:shadow-2xl active:scale-95"
            >
              View Our Work
            </button>

            <button
              className="rounded-full border-2 border-white px-10 py-4 text-lg font-semibold text-white transition-all duration-300 ease-in-out hover:scale-105 hover:border-red-600 hover:bg-red-600 hover:shadow-2xl active:scale-95"
            >
              Contact Us
            </button>
            <button className="hover:bg-amber-300">hello</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;