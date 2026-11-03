
import React from "react";
import { Link } from "react-router-dom";

const CreativeServices = () => {
  return (
    <section className="w-full bg-white px-5 py-9 sm:px-8 lg:px-[3.35%]">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">

        {/* Graphic Designing */}
        <article className="flex flex-col overflow-hidden rounded-t-xl rounded-b-xl border-t-4 border-b-[7px] border-blue-800 bg-white">
          <img
            src="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=1000&q=85"
            alt="Graphic Designing"
            className="h-[255px] w-full object-cover"
          />

          <div className="flex flex-1 flex-col px-4 pb-6 pt-5">
            <h2 className="text-2xl font-semibold tracking-tight text-black">
              Graphic Designing
            </h2>

            <p className="mt-2 text-[17px] leading-[1.65] text-slate-700">
              Eye-catching graphics that represent your brand identity
              and convey your message effectively.
            </p>

            <div className="mt-auto flex justify-center pt-9">
              <Link
                to="/services/graphic-designing"
                className="rounded-full bg-gradient-to-r from-[#08002f] to-[#1800c9] px-6 py-3 text-xl font-bold text-white transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </article>

        {/* Video Editing */}
        <article className="flex flex-col overflow-hidden rounded-t-xl rounded-b-xl border-t-4 border-b-[7px] border-blue-800 bg-white">
          <img
            src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1000&q=85"
            alt="Video Editing"
            className="h-[255px] w-full object-cover"
          />

          <div className="flex flex-1 flex-col px-4 pb-6 pt-5">
            <h2 className="text-2xl font-semibold tracking-tight text-black">
              Video Editing
            </h2>

            <p className="mt-2 text-[17px] leading-[1.65] text-slate-700">
              Professional video editing for marketing, branding,
              tutorials, and more.
            </p>

            <div className="mt-auto flex justify-center pt-9">
              <Link
                to="/services/video-editing"
                className="rounded-full bg-gradient-to-r from-[#08002f] to-[#1800c9] px-6 py-3 text-xl font-bold text-white transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </article>

        {/* Code Calling */}
        <article className="flex flex-col overflow-hidden rounded-t-xl rounded-b-xl border-t-4 border-b-[7px] border-blue-800 bg-white">
          <img
            src="https://images.unsplash.com/photo-1587614382346-4ec70e388b28?auto=format&fit=crop&w=1000&q=85"
            alt="Code Calling and Live Coding Support"
            className="h-[255px] w-full object-cover"
          />

          <div className="flex flex-1 flex-col px-4 pb-6 pt-5">
            <h2 className="text-2xl font-semibold tracking-tight text-black">
              Code Calling
            </h2>

            <p className="mt-2 text-[17px] leading-[1.65] text-slate-700">
              Real-time expert coding assistance and live debugging
              for quick issue resolution.
            </p>

            <div className="mt-auto flex justify-center pt-9">
              <Link
                to="/services/code-calling"
                className="rounded-full bg-gradient-to-r from-[#08002f] to-[#1800c9] px-6 py-3 text-xl font-bold text-white transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </article>

      </div>
    </section>
  );
};

export default CreativeServices;
