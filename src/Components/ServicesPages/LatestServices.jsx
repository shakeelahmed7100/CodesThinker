
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const LatestServices = () => {
  
const navigate=useNavigate()
    const handleClick=()=>{
        navigate("/websitedevelopment")
    }
  return (
    <section className="min-h-screen bg-white px-5 py-14 sm:px-8 lg:px-[4.8%]">
      <h1 className="mb-16 text-center text-3xl font-bold tracking-tight text-black sm:text-4xl">
        Latest Services
      </h1>

      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
        {/* Website Development */}
        <article className="flex flex-col overflow-hidden rounded-t-xl border-t-4 border-b-8 border-blue-800 rounded-b-xl">
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=85"
            alt="Website Development"
            className="h-64 w-full object-cover"
          />

          <div className="flex flex-1 flex-col px-4 pb-6 pt-5 sm:px-4">
            <h2 className="mb-2 text-2xl font-semibold tracking-tight text-black">
              Website Development
            </h2>

            <p className="text-[17px] leading-[1.6] text-slate-700">
              Custom, responsive websites designed to meet your business needs
              and provide an excellent user experience.
            </p>

            <div className="mt-auto flex justify-center pt-9">
              <Link
                to="/services/website-development"
                className="rounded-full bg-gradient-to-r from-[#08002f] to-[#1700c9] px-6 py-3 text-lg font-bold text-white transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </article>

        {/* App Development */}
        <article className="flex flex-col overflow-hidden rounded-t-xl border-t-4 border-b-8 border-blue-800 rounded-b-xl">
          <img
            src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1000&q=85"
            alt="App Development"
            className="h-64 w-full object-cover"
          />

          <div className="flex flex-1 flex-col px-4 pb-6 pt-5 sm:px-4">
            <h2 className="mb-2 text-2xl font-semibold tracking-tight text-black">
              App Development
            </h2>

            <p className="text-[17px] leading-[1.6] text-slate-700">
              High-quality mobile apps for iOS and Android that deliver
              seamless performance and great user experience.
            </p>

            <div className="mt-auto flex justify-center pt-9">
              <Link
                to="/services/app-development"
                className="rounded-full bg-gradient-to-r from-[#08002f] to-[#1700c9] px-6 py-3 text-lg font-bold text-white transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </article>

        {/* DevOps & Cloud */}
        <article className="flex flex-col overflow-hidden rounded-t-xl border-t-4 border-b-8 border-blue-800 rounded-b-xl">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1000&q=85"
            alt="DevOps and Cloud"
            className="h-64 w-full object-cover"
          />

          <div className="flex flex-1 flex-col px-4 pb-6 pt-5 sm:px-4">
            <h2 className="mb-2 text-2xl font-semibold tracking-tight text-black">
              DevOps &amp; Cloud
            </h2>

            <p className="text-[17px] leading-[1.6] text-slate-700">
              Automate deployments, improve scalability, and reduce downtime
              with our DevOps and cloud solutions.
            </p>

            <div className="mt-auto flex justify-center pt-9">
              <Link
                to="/WebsiteDevelopment"
                className="rounded-full bg-gradient-to-r from-[#08002f] to-[#1700c9] px-6 py-3 text-lg font-bold text-white transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-300"
                 onClick={handleClick} 
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

export default LatestServices;
