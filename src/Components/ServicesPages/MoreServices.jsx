
import React from "react";
import { Link } from "react-router-dom";

const MoreServices = () => {
  return (
    <section className="w-full bg-white px-5 py-4 sm:px-8 lg:px-[3.5%]">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">

        {/* Machine Learning */}
        <article className="flex flex-col overflow-hidden rounded-t-xl rounded-b-xl border-t-4 border-b-[7px] border-blue-800 bg-white">
          <img
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1000&q=85"
            alt="Machine Learning and Artificial Intelligence"
            className="h-[220px] w-full object-cover"
          />

          <div className="flex flex-1 flex-col px-4 pb-6 pt-5">
            <h2 className="text-2xl font-semibold tracking-tight text-black">
              Machine Learning
            </h2>

            <p className="mt-2 text-[17px] leading-[1.6] text-slate-700">
              Leverage AI and machine learning to automate processes,
              analyze data, and improve decision-making.
            </p>

            <div className="mt-auto flex justify-center pt-9">
              <Link
                to="/services/machine-learning"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#08002f] to-[#1600c9] px-6 py-3 text-xl font-bold text-white transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </article>

        {/* Blockchain */}
        <article className="flex flex-col overflow-hidden rounded-t-xl rounded-b-xl border-t-4 border-b-[7px] border-blue-800 bg-white">
          <img
            src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1000&q=85"
            alt="Blockchain technology"
            className="h-[220px] w-full object-cover"
          />

          <div className="flex flex-1 flex-col px-4 pb-6 pt-5">
            <h2 className="text-2xl font-semibold tracking-tight text-black">
              Blockchain
            </h2>

            <p className="mt-2 text-[17px] leading-[1.6] text-slate-700">
              Secure and transparent blockchain solutions for smart
              contracts, decentralized apps, and more.
            </p>

            <div className="mt-auto flex justify-center pt-9">
              <Link
                to="/services/blockchain"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#08002f] to-[#1600c9] px-6 py-3 text-xl font-bold text-white transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </article>

        {/* Website Hosting */}
        <article className="flex flex-col overflow-hidden rounded-t-xl rounded-b-xl border-t-4 border-b-[7px] border-blue-800 bg-white">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1000&q=85"
            alt="Website hosting and cloud infrastructure"
            className="h-[220px] w-full object-cover"
          />

          <div className="flex flex-1 flex-col px-4 pb-6 pt-5">
            <h2 className="text-2xl font-semibold tracking-tight text-black">
              Website Hosting
            </h2>

            <p className="mt-2 text-[17px] leading-[1.6] text-slate-700">
              Reliable and secure web hosting services with high uptime
              and technical support to keep your site running smoothly.
            </p>

            <div className="mt-auto flex justify-center pt-9">
              <Link
                to="/services/website-hosting"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#08002f] to-[#1600c9] px-6 py-3 text-xl font-bold text-white transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-300"
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

export default MoreServices;
