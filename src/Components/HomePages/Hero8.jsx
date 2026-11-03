
import React, { useState } from "react";

const reviews = [
  {
    rating: "5.0",
    name: "BMX Adventure",
    role: "Customer",
    message:
      "BMX Adventure came alive online thanks to Codes Thinker stunning design, fast performance, and powerful impact!",
    avatar:
      "https://api.dicebear.com/9.x/avataaars/svg?seed=BMXAdventure",
  },
  {
    rating: "5.0",
    name: "Creative Solutions",
    role: "Customer",
    message:
      "Codes Thinker delivered an outstanding digital experience with excellent design, smooth performance, and attention to detail.",
    avatar:
      "https://api.dicebear.com/9.x/avataaars/svg?seed=CreativeSolutions",
  },
];

const Hero8 = () => {
  const [activeReview, setActiveReview] = useState(0);
  const [showReviewForm, setShowReviewForm] = useState(false);

  const review = reviews[activeReview];

  return (
    <section className="min-h-[535px] w-full bg-[#07043f] px-5 py-10 text-white sm:px-8 lg:px-12 lg:py-[41px]">
      <div className="mx-auto grid max-w-[1540px] grid-cols-1 items-center gap-10 lg:grid-cols-[0.72fr_1.85fr] lg:gap-[70px]">

        {/* Left Heading */}
        <div className="text-center lg:-translate-y-7">
          <h2 className="text-[35px] font-semibold leading-[1.45] tracking-[-1.4px] sm:text-[42px] lg:text-[44px]">
            Our{" "}
            <span className="text-[#fff000]">Clients,</span>
            <br />
            In Their Own Words
          </h2>
        </div>

        {/* Right Review Content */}
        <div className="w-full">
          <div className="min-h-[320px] rounded-[11px] bg-gradient-to-br from-[#10066e] to-[#0d0750] px-6 py-7 sm:px-8 sm:py-8 lg:h-[361px] lg:px-[29px] lg:py-[29px]">

            {/* Rating */}
            <div className="flex items-center gap-3">
              <span className="text-[27px] font-bold sm:text-[31px]">
                {review.rating}
              </span>

              <div className="flex gap-[7px]" aria-label="5 out of 5 stars">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    viewBox="0 0 24 24"
                    className="h-[25px] w-[25px] fill-[#ffb900] sm:h-[29px] sm:w-[29px]"
                    aria-hidden="true"
                  >
                    <path d="M12 2.2l2.95 5.98 6.6.96-4.78 4.66 1.13 6.57L12 17.27l-5.9 3.1 1.13-6.57-4.78-4.66 6.6-.96L12 2.2z" />
                  </svg>
                ))}
              </div>
            </div>

            {/* Customer Details */}
            <div className="mt-5 flex items-center gap-[19px]">
              <img
                src={review.avatar}
                alt={`${review.name} avatar`}
                className="h-[100px] w-[100px] rounded-full bg-white object-cover"
              />

              <div>
                <h3 className="text-[20px] font-bold tracking-[-0.5px] sm:text-[24px]">
                  {review.name}
                </h3>
                <p className="mt-1 text-[17px] text-[#d1d0ef] sm:text-[20px]">
                  {review.role}
                </p>
              </div>
            </div>

            {/* Testimonial */}
            <p className="mt-5 text-[16px] leading-[1.65] text-white sm:text-[18px] lg:text-[20px]">
              {review.message}
            </p>

            {/* Pagination Dots */}
            <div className="mt-[-17px] flex justify-center gap-[10px] pt-1 lg:mt-[-17px]">
              {reviews.map((item, index) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setActiveReview(index)}
                  aria-label={`Show review ${index + 1}`}
                  aria-pressed={activeReview === index}
                  className={`h-[9px] w-[9px] rounded-full transition-colors ${
                    activeReview === index
                      ? "bg-[#0785ff]"
                      : "bg-[#08033b]"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Add Review Button */}
          <div className="mt-[37px] flex justify-center">
            <button
              type="button"
              onClick={() => setShowReviewForm(!showReviewForm)}
              className="rounded-[20px] bg-[#ffed00] px-9 py-[17px] text-[18px] font-semibold text-black transition-all duration-300 hover:bg-[#ffe000] hover:shadow-lg hover:shadow-yellow-400/10"
            >
              {showReviewForm ? "Close Review Form" : "Add Your Reviews"}
            </button>
          </div>

          {/* Review Form */}
          {showReviewForm && (
            <form
              className="mt-6 space-y-4 rounded-xl bg-[#10066e] p-6"
              onSubmit={(event) => {
                event.preventDefault();
                alert("Thank you! Your review form is ready to connect to a backend.");
              }}
            >
              <h3 className="text-xl font-semibold">Share Your Experience</h3>

              <input
                type="text"
                required
                placeholder="Your name"
                className="w-full rounded-lg border border-white/20 bg-[#07043f] p-3 text-white outline-none placeholder:text-gray-400 focus:border-yellow-300"
              />

              <select
                required
                defaultValue="5"
                className="w-full rounded-lg border border-white/20 bg-[#07043f] p-3 text-white outline-none focus:border-yellow-300"
              >
                <option value="5">5 Stars</option>
                <option value="4">4 Stars</option>
                <option value="3">3 Stars</option>
                <option value="2">2 Stars</option>
                <option value="1">1 Star</option>
              </select>

              <textarea
                required
                rows="3"
                placeholder="Write your review..."
                className="w-full rounded-lg border border-white/20 bg-[#07043f] p-3 text-white outline-none placeholder:text-gray-400 focus:border-yellow-300"
              />

              <button
                type="submit"
                className="rounded-lg bg-[#ffed00] px-6 py-3 font-semibold text-black hover:bg-yellow-300"
              >
                Submit Review
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero8;