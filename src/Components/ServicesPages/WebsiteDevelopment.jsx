
import React from "react";

const WebsiteDevelopment = () => {
  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto grid max-w-[1536px] grid-cols-1 items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16 xl:gap-[10.5rem] lg:px-0">

        {/* Left Side Image */}
        <div className="w-full overflow-hidden rounded-xl">
          <img
            src="/images/website-development.png"
            alt="Website Development Illustration"
            className="h-auto w-full rounded-xl object-cover"
          />
        </div>

        {/* Right Side Content */}
        <div className="w-full">
          <h1 className="mb-4 text-3xl font-bold leading-tight tracking-tight text-black sm:text-4xl">
            Website Development
          </h1>

          <p className="text-justify text-base font-normal leading-[1.6] text-[#111111] sm:text-lg">
            We specialize in building fast, responsive, and SEO-friendly
            websites tailored to your brand. From simple landing pages to
            complex web platforms, our team ensures top-notch user experience,
            performance, and security using the latest technologies and
            industry best practices to help your business thrive online.
          </p>
        </div>

      </div>
    </section>
  );
};

export default WebsiteDevelopment;
