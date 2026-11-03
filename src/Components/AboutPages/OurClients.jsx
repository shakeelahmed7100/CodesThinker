
import React, { useState } from "react";

const Ourclients = () => {
  const [activeReview, setActiveReview] = useState(0);

  const reviews = [
    {
      name: "Muhammad Waseem",
      role: "Customer",
      rating: "5.0",
      message:
        "Excellent service! Codes Thinker delivered a stunning, responsive website on time. Highly recommended for web solutions.",
      avatar:
        "https://capturely.com/wp-content/uploads/2026/03/09-male-headshot-gray-1.webp",
    },
    {
      name: "Ahmed Ali",
      role: "Customer",
      rating: "5.0",
      message:
        "Great experience working with Codes Thinker. The team delivered a professional solution and provided excellent support.",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpWRNjSbUt6_tiONEmOHxesFKki_cr0jQDQU0qZcRW6g&s=10",
    },
  ];

  const review = reviews[activeReview];

  return (
    <section className="w-full bg-[#08043F] px-5 py-10 text-white sm:px-8 lg:min-h-[510px] lg:px-12 lg:py-[39px]">
      <div className="mx-auto grid max-w-[1500px] grid-cols-1 items-center gap-10 lg:grid-cols-[0.48fr_1.52fr] lg:gap-12">

        {/* Left Heading */}
        <div className="text-center lg:text-left">
          <h2 className="text-2xl font-semibold leading-[1.4] tracking-tight sm:text-4xl lg:text-[42px]">
            Our <span className="text-[#FFEB00]">Clients,</span>
            <br />
            In Their Own Words
          </h2>
        </div>

        {/* Right Review Section */}
        <div className="flex flex-col ">
          <div className="w-full rounded-lg bg-[#10085E] px-6 py-7 sm:px-7 sm:py-8 lg:min-h-[338px]">

            {/* Rating */}
            <div className="mb-5 flex items-center gap-2">
              <span className="mr-1 text-2xl font-bold sm:text-[30px]">
                {review.rating}
              </span>

              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  viewBox="0 0 24 24"
                  fill="#FFB800"
                  className="h-6 w-6 sm:h-7 sm:w-7"
                >
                  <path d="M12 2.5l2.9 5.88 6.49.94-4.7 4.58 1.11 6.47L12 17.31l-5.8 3.06 1.11-6.47-4.7-4.58 6.49-.94L12 2.5z" />
                </svg>
              ))}
            </div>

            {/* Customer Details */}
            <div className="flex items-center gap-4">
              <img
                src={review.avatar}
                alt={review.name}
                className="h-24 w-24 shrink-0 rounded-full bg-white object-cover"
              />

              <div>
                <h3 className="text-lg font-bold sm:text-2xl">
                  {review.name}
                </h3>
                <p className="mt-1 text-base text-gray-200 sm:text-lg">
                  {review.role}
                </p>
              </div>
            </div>

            {/* Review Text */}
            <p className="mt-5 text-base leading-[1.65] text-white sm:text-lg">
              {review.message}
            </p>

            {/* Slider Dots */}
            <div className="mt-4 flex justify-center gap-3">
              {reviews.map((item, index) => (
                <button
                  key={item.name}
                  type="button"
                  aria-label={`Show review ${index + 1}`}
                  onClick={() => setActiveReview(index)}
                  className={`h-[9px] w-[9px] rounded-full transition-colors ${
                    activeReview === index
                      ? "bg-[#0785FF]"
                      : "bg-[#08043F]"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Add Review Button */}
       <div className="">
           <button
            type="button"
            onClick={() =>
              window.open(
                "https://www.google.com/search?q=Codes+Thinker+reviews",
                "_blank",
                "noopener,noreferrer"
              )
            }
            className="mt-9  rounded-[19px] bg-[#FFEB00] px-8 py-4 text-base font-semibold text-black transition duration-300 hover:bg-yellow-400 sm:px-9 sm:text-lg"
          >
            Add Your Reviews
          </button>
       </div>
        </div>
      </div>
    </section>
  );
};

export default Ourclients;
