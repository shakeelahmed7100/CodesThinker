
import React from "react";

const ReadySoftware = () => {
  return (
    <section className="w-full min-h-[565px] bg-[#EAF6FF]">
      <div className="mx-auto grid max-w-[1500px] grid-cols-1 items-center gap-10 px-6 py-10 md:px-10 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-[34px]">

        {/* Left Content */}
        <div className="w-full lg:pl-8 xl:pl-12">
          <h1 className="mb-5 text-3xl font-semibold leading-tight tracking-tight text-black sm:text-4xl">
            Building{" "}
            <span className="text-[#1600B8]">
              Future-Ready Software
            </span>
          </h1>

          <p className="text-justify text-base leading-[1.8] text-[#111111] sm:text-lg">
            We are a team of passionate developers, designers, and
            thinkers building scalable solutions for tomorrow. At
            [Codes Thinker], we don't just build software — we craft
            scalable, intelligent solutions that drive real-world
            impact. Our team of developers, designers, and strategists
            work together to deliver innovative digital products
            tailored for tomorrow's challenges. Rooted in collaboration,
            quality, and forward thinking, we're committed to helping
            businesses grow through technology.
          </p>
        </div>

        {/* Right Image */}
        <div className="h-[100vh] w-[100%]  flex items-center justify-center" >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSguruytCLFoak1bTYxsGFJ5BlTsrkp_hwuUmgtKoFm375opcbSZM9f9w&s=10"
            alt="Codes Thinker software development team"
            className="h-[350px] w-[500px] object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default ReadySoftware ;
