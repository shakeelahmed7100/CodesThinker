import React from "react";

const Hero3 = () => {
  const features = [
    "Industry Expert Staff",
    "Client-Centric Focus",
    "Partner rather than Vendor",
    "Solutions Geared to Improve Productivity",
  ];

  return (
    <section className="bg-[#dfe8ef] py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side */}
          <div>
            <h1 className="text-1xl md:text-2xl  font-bold leading-none">
              About{" "}
              <span className="text-[#1E1BBE]">
                Code's
              </span>
            
              Thinker
            </h1>

            <p className="mt-8 text-1xl text-gray-800 leading-relaxed max-w-2xl">
              We redefine excellence in business solution at Code's Thinker...
            </p>

            <div className="mt-10 space-y-6">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-5 bg-[#e5edf4] rounded-3xl px-6 py-5 w-fit shadow-sm"
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600"></div>

                  <span className="text-1xl font-medium text-gray-900">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side Image */}
          <div className="flex justify-center">
            <div className="w-full max-w-[560px]">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQPdWgK-yQzmId6zsXolEj0q6AsPY8anC59aJjSeDhEg&s=10"
                alt="About Code Thinker"
                className="w-full h-[380px] object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="w-20 h-20 rounded-full bg-green-500 flex items-center justify-center shadow-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 24 24"
            className="w-10 h-10"
          >
            <path d="M20.52 3.48A11.86 11.86 0 0 0 12.05 0C5.5 0 .18 5.33.18 11.88c0 2.09.55 4.13 1.59 5.93L0 24l6.37-1.67a11.85 11.85 0 0 0 5.68 1.45h.01c6.55 0 11.88-5.33 11.88-11.88 0-3.17-1.24-6.15-3.42-8.42zm-8.47 18.3h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.78.99 1.01-3.68-.24-.38a9.88 9.88 0 0 1-1.51-5.24c0-5.46 4.45-9.9 9.91-9.9 2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 0 1 2.9 7c0 5.46-4.45 9.9-9.87 9.9zm5.43-7.42c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.48-1.77-1.65-2.07-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.47 0 1.45 1.07 2.86 1.22 3.06.15.2 2.1 3.2 5.08 4.49.71.31 1.27.5 1.71.64.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.41.25-.69.25-1.28.17-1.41-.08-.13-.28-.2-.58-.35z" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Hero3;