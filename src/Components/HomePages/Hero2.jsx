import React from "react";
import {
  FaLightbulb,
  FaUsers,
  FaMicrochip,
  FaStopwatch,
} from "react-icons/fa";

const Hero2 = () => {
  const features = [
    {
      icon: <FaLightbulb size={40} />,
      title: "Custom Web",
      subtitle: "Experiences",
    },
    {
      icon: <FaUsers size={40} />,
      title: "Innovative UI/UX",
      subtitle: "Design",
    },
    {
      icon: <FaMicrochip size={40} />,
      title: "Scalable Tech",
      subtitle: "Solutions",
    },
    {
      icon: <FaStopwatch size={40} />,
      title: "24/7 Support &",
      subtitle: "Maintenance",
    },
  ];

  return (
    <section className="bg-[#dfe8ef] py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-center text-[#1717B8] text-3xl md:text-4xl font-bold mb-16">
          What Makes Us Stand Out?
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-[40px] h-[250px] flex flex-col items-center justify-center shadow-sm"
            >
              <div className="w-23 h-23 rounded-full bg-blue-600 flex items-center justify-center text-white mb-8">
                {item.icon}
              </div>

              <h3 className="text-1xl font-semibold text-center text-black leading-relaxed">
                {item.title}
                <br />
                {item.subtitle}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero2;