
import React from "react";

export default function Contact1() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");

    const mailtoLink = `mailto:info@codesthinker.com?subject=${encodeURIComponent(
      subject || "Consultation Request"
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;

    window.location.href = mailtoLink;
  };

  return (
    <section className="w-full bg-white px-5 py-19 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
        {/* Page Heading */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-black sm:text-5xl">
            Get In <span className="text-indigo-800">Touch</span>
          </h1>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12">
          {/* Left Side: Contact Details */}
          <div className="pt-2">
            <h2 className="text-2xl font-semibold leading-snug text-gray-950 sm:text-3xl">
              Ready To Turn Your Vision Into Reality?
            </h2>

            <p className="mt-4 text-sm leading-6 text-gray-800">
              Want to blast your business off like a rocket? Tojo Global's got
              a secret weapon for you: an amazing custom Marketing, Management,
              Design, Development &amp; Crypto listing plan which will turn
              heads and grow your business faster than ever.
            </p>

            {/* Contact Information */}
            <div className="mt-7 space-y-7">
              {/* Phone */}
              <a
                href="tel:+921234567890"
                className="flex items-center gap-3 transition hover:text-indigo-800"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-indigo-950 text-white">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.56 3.57.56a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02z" />
                  </svg>
                </span>
                <span className="text-sm">+92 123 456 7890</span>
              </a>

              {/* Email */}
              <a
                href="mailto:info@codesthinker.com"
                className="flex items-center gap-3 transition hover:text-indigo-800"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-indigo-950 text-white">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <path d="M20 4H4a2 2 0 00-2 2v.4l10 6.25L22 6.4V6a2 2 0 00-2-2zM2 8.75V18a2 2 0 002 2h16a2 2 0 002-2V8.75l-9.47 5.92a1 1 0 01-1.06 0z" />
                  </svg>
                </span>
                <span className="text-sm">info@codesthinker.com</span>
              </a>

              {/* UK Address */}
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-indigo-950 text-white">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <path d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 9.5A2.5 2.5 0 1112 6.5a2.5 2.5 0 010 5z" />
                  </svg>
                </span>
                <p className="text-sm leading-5">
                  Bartle House 9 Oxford Court, Manchester M23WQ
                  <br />
                  United Kingdom (Regional Office)
                </p>
              </div>

              {/* Pakistan Address */}
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-indigo-950 text-white">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <path d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 9.5A2.5 2.5 0 1112 6.5a2.5 2.5 0 010 5z" />
                  </svg>
                </span>
                <p className="text-sm leading-5">
                  Hassan Manzil Basement Goheer Town
                  <br />
                  Bahawalpur (Global Delivery Center)
                </p>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="mt-9 flex items-center gap-3">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-indigo-600 bg-indigo-950 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-indigo-700"
              >
                f
              </a>

              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-blue-500 bg-black text-sm font-bold text-white transition hover:-translate-y-1"
              >
                𝕏
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-pink-500 bg-indigo-950 text-sm font-bold text-white transition hover:-translate-y-1"
              >
                ◎
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-cyan-400 bg-black text-sm font-bold text-white transition hover:-translate-y-1"
              >
                in
              </a>
            </div>
          </div>

          {/* Right Side: Consultation Form */}
          <div className="rounded-lg bg-white p-5 shadow-[0_3px_12px_rgba(0,0,0,0.12)] sm:p-7 lg:p-5">
            <h2 className="mb-5 text-center text-2xl font-semibold text-black">
              Book a Free Consultation
            </h2>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-1 block text-xs font-semibold text-gray-900"
                >
                  Full Name *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Full Name"
                  required
                  className="w-full rounded-md border border-black px-3 py-2 text-xs outline-none transition placeholder:text-gray-400 focus:border-indigo-800 focus:ring-1 focus:ring-indigo-800"
                />
              </div>

              {/* Work Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-1 block text-xs font-semibold text-gray-900"
                >
                  Work Email *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Working Email"
                  required
                  className="w-full rounded-md border border-black px-3 py-2 text-xs outline-none transition placeholder:text-gray-400 focus:border-indigo-800 focus:ring-1 focus:ring-indigo-800"
                />
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="mb-1 block text-xs font-semibold text-gray-900"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Enter your subject"
                  className="w-full rounded-md border border-black px-3 py-2 text-xs outline-none transition placeholder:text-gray-400 focus:border-indigo-800 focus:ring-1 focus:ring-indigo-800"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-1 block text-xs font-semibold text-gray-900"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Describe your message here"
                  required
                  className="w-full resize-y rounded-md border border-black px-3 py-2 text-xs outline-none transition placeholder:text-gray-400 focus:border-indigo-800 focus:ring-1 focus:ring-indigo-800"
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-end pt-1">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-indigo-950 px-5 py-3 text-xs font-semibold text-white transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
                >
                  SUBMIT
                  <span aria-hidden="true">➤</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
