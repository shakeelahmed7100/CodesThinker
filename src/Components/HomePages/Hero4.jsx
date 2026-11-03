
import React, { useState } from "react";

const serviceCategories = [
  {
    name: "Development",
    services: [
      "Custom Development",
      "Web App Development",
      "Mobile App Development",
      "Blockchain Dev",
      "Crypto Token Dev",
      "Wordpress Dev",
    ],
  },
  {
    name: "Management",
    services: [
      "Project Management",
      "Community Management",
      "Social Media Management",
      "Brand Management",
      "Discord Management",
      "Telegram Management",
    ],
  },
  {
    name: "Marketing",
    services: [
      "Digital Marketing",
      "Social Media Marketing",
      "SEO Optimization",
      "Influencer Marketing",
      "Crypto Marketing",
      "Email Marketing",
    ],
  },
  {
    name: "Graphics & Visuals",
    services: [
      "Logo Design",
      "Brand Identity",
      "UI/UX Design",
      "Social Media Graphics",
      "3D Design",
      "Website Design",
    ],
  },
  {
    name: "Video Editing",
    services: [
      "Promotional Videos",
      "Reels & Shorts",
      "Motion Graphics",
      "YouTube Editing",
      "Product Videos",
      "Explainer Videos",
    ],
  },
  {
    name: "Content Writing",
    services: [
      "Website Content",
      "Blog Writing",
      "SEO Content",
      "Copywriting",
      "Whitepaper Writing",
      "Social Media Content",
    ],
  },
];

const Hero4 = () => {
  const [activeCategory, setActiveCategory] = useState("Development");

  const activeServices = serviceCategories.find(
    (category) => category.name === activeCategory
  );

  return (
    <section className="w-full overflow-hidden bg-white px-5 py-10 font-sans text-black sm:px-8 md:py-12">
      <div className="mx-auto max-w-[1500px]">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-4xl font-bold leading-tight tracking-tight sm:text-2xl md:text-[40px]">
            <span className="text-[#1600b8]">Services</span>{" "}
            <span className="text-black">We Offer</span>
          </h2>

          <p className="mx-auto mt-6 max-w-[1000px] text-base font-normal leading-relaxed sm:text-lg md:text-[20px]">
            TOJO GLOBAL offers crypto solutions, targeted marketing,
            impactful design, custom development, and professional video
            editing to elevate your brand.
          </p>
        </div>

        {/* Services Content */}
        <div className="mt-10 grid grid-cols-1 gap-10 md:mt-11 md:grid-cols-[minmax(280px,435px)_1fr] md:gap-12 lg:gap-20">
          {/* Category Buttons */}
          <div className="flex flex-col gap-4">
            {serviceCategories.map((category) => {
              const isActive = activeCategory === category.name;

              return (
                <button
                  key={category.name}
                  type="button"
                  onClick={() => setActiveCategory(category.name)}
                  aria-pressed={isActive}
                  className={`min-h-[61px] w-full rounded-full border-2 px-5 py-3 text-lg font-semibold transition-all duration-300 sm:text-xl md:text-[28px] md:leading-tight ${
                    isActive
                      ? "border-[#1600b8] bg-gradient-to-r from-[#090044] to-[#1600b8] text-white shadow-sm"
                      : "border-[#e2e5eb] bg-white text-black hover:border-[#1600b8] hover:text-[#1600b8]"
                  }`}
                >
                  {category.name}
                </button>
              );
            })}
          </div>

          {/* Services List */}
          <div className="flex min-w-0 items-center justify-center py-4 md:py-0">
            <div
              key={activeCategory}
              className="grid w-full grid-cols-1 gap-x-5 gap-y-6 text-center sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-10"
            >
              {activeServices.services.map((service) => (
                <div
                  key={service}
                  className="flex min-h-8 items-center justify-center text-base font-semibold tracking-tight text-black transition-colors duration-200 hover:text-[#1600b8] sm:text-lg lg:text-[21px]"
                >
                  {service}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero4;