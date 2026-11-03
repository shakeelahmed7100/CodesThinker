import React, { useState } from "react";
const projects = [
  {
    title: "Akoya Deluxe Cleaning",
    category: "Website Development",
    description:
      "Professional cleaning website with a modern, responsive design.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=100",
    thumbnails: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=300&q=80",
    ],
    link: "#",
  },
  {
    title: "Multi-Service Creative Agency",
    category: "Website Development",
    description:
      "Creative agency website for digital marketing and design services.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
    thumbnails: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=300&q=80",
    ],
    link: "https://novietaaplus.com/",
  },
  {
    title: "Trend Car Care",
    category: "Website Development",
    description:
      "Automotive care and detailing website with a modern presentation.",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=900&q=80",
    thumbnails: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1485291571150-772bcfc10da5?auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&w=300&q=80",
    ],
    link: "https://www.trackcarcare.com/",
  },
  {
    title: "The Givers Consulting",
    category: "Website Development",
    description:
      "Professional consulting website with a clean corporate layout.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80",
    thumbnails: [
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1497366858526-0766cadbe8fa?auto=format&fit=crop&w=300&q=80",
    ],
    link: "#",
  },
  {
    title: "Cash Rewards Game",
    category: "App Development",
    description:
      "Rewards app concept with a modern interface and engaging visuals.",
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=900&q=80",
    thumbnails: [
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=300&q=80",
    ],
    link: "https://www.y8.com/games/bmx_adventure",
  },
];

const categories = ["All", "Website Development", "UI/UX", "App Development"];

export default function ProjectSec() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const visibleProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 5);

  return (
    <section className="min-h-screen bg-white px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        {/* Section Heading */}
        <div className="mb-7 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[3px] text-indigo-700">
            Our Portfolio
          </p>

          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Project Section
          </h2>

          <p className="mx-auto mt-2 max-w-xl text-xs leading-5 text-gray-500 sm:text-sm">
            Explore a range of projects we've worked on across web, mobile,
            and design.
          </p>
        </div>

        {/* Category Filters */}
        <div className="mb-8 flex flex-wrap items-center justify-center gap-3 sm:gap-5">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setShowAll(false);
              }}
              className={`rounded-md px-4 py-2 text-xs font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-indigo-950 text-white shadow-md"
                  : "bg-transparent text-gray-700 hover:bg-indigo-50 hover:text-indigo-800"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="space-y-12">
          {visibleProjects.map((project) => (
            <article
              key={project.title}
              className="group grid grid-cols-1 gap-4 rounded-xl border border-gray-100 bg-white p-3 shadow-[0_5px_14px_rgba(0,0,0,0.10)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg sm:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] sm:gap-4 sm:p-3"
            >
              {/* Main Project Image */}
              <a
                href={project.link}
                aria-label={`View ${project.title}`}
                className="block overflow-hidden rounded-lg bg-gray-100"
              >
                <img
                  src={project.image}
                  alt={`${project.title} website preview`}
                  className="h-100 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] sm:h-[340px] lg:h-[340px]"
                  loading="lazy"
                />
              </a>

              {/* Project Details */}
              <div className="flex min-w-0 flex-col justify-center py-1 sm:py-0">
                <h3 className="text-base font-bold text-gray-900 sm:text-[15px]">
                  {project.title}
                </h3>

                <p className="mt-1 text-xs leading-5 text-gray-500">
                  {project.description}
                </p>

                {/* Thumbnail Gallery */}
                <div className="mt-3 grid grid-cols-4 gap-2">
                  {project.thumbnails.map((thumbnail, index) => (
                    <a
                      href={project.link}
                      key={thumbnail}
                      aria-label={`${project.title} preview ${index + 1}`}
                      className="overflow-hidden rounded-lg border border-gray-200 bg-gray-50"
                    >
                      <img
                        src={thumbnail}
                        alt={`${project.title} screenshot ${index + 1}`}
                        loading="lazy"
                        className="h-30 w-full object-cover transition duration-300 hover:scale-110 sm:h-9 lg:h-30"
                      />
                    </a>
                  ))}
                </div>

                {/* View Project Button */}
                <div className="mt-3">
                  <a
                    href={project.link}
                    className="inline-flex items-center gap-1 rounded-full bg-indigo-950 px-3 py-2 text-[10px] font-semibold text-white transition duration-300 hover:bg-indigo-700"
                  >
                    View Project
                    <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>
            </article>
          ))}

          {visibleProjects.length === 0 && (
            <p className="py-10 text-center text-sm text-gray-500">
              No projects available in this category yet.
            </p>
          )}
        </div>

        {/* View More */}
        {filteredProjects.length > 5 && (
          <div className="mt-7 flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="rounded-full bg-indigo-950 px-6 py-2.5 text-xs font-semibold text-white shadow-md transition duration-300 hover:bg-indigo-700"
            >
              {showAll ? "View Less" : "View More"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}