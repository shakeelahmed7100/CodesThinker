
import React from "react";

const teamMembers = [
  {
    role: "CEO",
    name: "Chief Executive Officer",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=85",
  },
  {
    role: "HEAD",
    name: "Head of Operations",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=900&q=85",
  },
  {
    role: "Business Developer",
    name: "Business Development",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=85",
  },
];

export default function TeamMember() {
  return (
    <section className="w-full bg-white px-5 py-12 sm:px-8 lg:px-16 lg:py-16">
      <div className="mx-auto max-w-7xl">

        {/* Main Heading */}
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-black sm:text-5xl">
            Meet Our{" "}
            <span className="text-indigo-800">Team</span>
          </h2>

          <p className="mx-auto mt-4 max-w-4xl text-base leading-7 text-gray-900 sm:text-lg">
            Our team of passionate and experienced professionals is dedicated
            to driving your success.
            <br className="hidden sm:block" />
            From strategy to execution, we combine creativity, innovation, and
            insight to deliver
            <br className="hidden lg:block" />
            exceptional results.
          </p>
        </div>

        {/* Global Leadership */}
        <div className="mt-14 sm:mt-16">
          <h3 className="mb-6 text-center text-2xl font-semibold tracking-tight text-black sm:text-left sm:text-3xl lg:ml-[12%]">
            Global{" "}
            <span className="text-indigo-800">Leadership</span>
          </h3>

          {/* Team Cards */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {teamMembers.map((member) => (
              <article
                key={member.role}
                className="group relative h-[320px] overflow-hidden rounded-lg bg-gray-200 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:h-[340px] lg:h-[320px]"
              >
                {/* Member Image */}
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/10" />

                {/* Member Information */}
                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <span className="inline-block rounded-full bg-indigo-800 px-3 py-1 text-xs font-semibold">
                    {member.role}
                  </span>

                  <h4 className="mt-2 text-xl font-semibold">
                    {member.name}
                  </h4>

                  <div className="mt-3 h-1 w-12 rounded-full bg-indigo-400 transition-all duration-300 group-hover:w-20" />
                </div>
              </article>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}