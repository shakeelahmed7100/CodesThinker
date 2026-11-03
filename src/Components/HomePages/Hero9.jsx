
import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaComments,
  FaHeadset,
  FaChevronDown,
  FaArrowRight,
} from "react-icons/fa";

const Hero9 = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const contactItems = [
    {
      icon: FaComments,
      title: "Discuss Your Project",
      description:
        "Share your ideas and requirements with our team to explore the best solutions for your business.",
    },
    {
      icon: FaPhoneAlt,
      title: "Get a Free Consultation",
      description:
        "Book a free consultation to discuss your goals and discover a solution tailored to your needs.",
    },
    {
      icon: FaHeadset,
      title: "Reach Us Anytime",
      description:
        "Our team is here to answer your questions and help you move your project forward.",
    },
  ];

  const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "We offer web development, mobile applications, UI/UX design, cloud solutions, and custom software development.",
    },
    {
      question: "How long does a project usually take?",
      answer:
        "Timelines depend on your project requirements. We provide a clear delivery schedule after discussing the scope.",
    },
    {
      question: "Do you offer post-launch support?",
      answer:
        "Yes. We provide maintenance, bug fixes, technical support, and performance optimization after launch.",
    },
    {
      question: "Can I get a custom design for my brand?",
      answer:
        "Absolutely. We create unique designs that reflect your brand identity, business objectives, and audience.",
    },
    {
      question: "How do I get started with a project?",
      answer:
        "Complete the contact form with your details and requirements. Our team can then discuss the next steps with you.",
    },
  ];

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass =
    "w-full rounded-lg border border-gray-200 bg-gray-50/70 px-3.5 py-3 text-sm text-gray-800 placeholder:text-gray-400 outline-none transition duration-200 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10";

  return (
    <main className="min-h-screen bg-white font-sans text-gray-900">
      {/* Contact Section */}
      <section
        id="contact"
        className="relative overflow-hidden bg-[#f8f9fc] py-16 sm:py-20 lg:py-24"
      >
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-indigo-100/50 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          {/* Section Heading */}
          <div className="mb-12 text-center sm:mb-16">
            <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-indigo-700 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" />
              Let's Talk
            </span>

            <h1 className="text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl lg:text-5xl">
              Let's Collaborate{" "}
              <span className="text-indigo-700">and Innovate</span>
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
              Have an idea in mind? Let's turn your vision into a
              powerful digital experience.
            </p>
          </div>

          {/* Contact Grid */}
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Contact Information */}
            <div className="space-y-5 lg:pt-4">
              {contactItems.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group flex gap-5 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-indigo-100 hover:shadow-lg sm:p-6"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-lg text-indigo-700 transition group-hover:bg-indigo-700 group-hover:text-white">
                      <Icon />
                    </div>

                    <div>
                      <span className="mb-1 block text-[11px] font-semibold uppercase tracking-widest text-indigo-600">
                        0{index + 1} / Contact
                      </span>

                      <h3 className="text-base font-bold text-gray-900 sm:text-lg">
                        {item.title}
                      </h3>

                      <p className="mt-2 max-w-md text-sm leading-6 text-gray-500">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}

              <div className="rounded-2xl bg-indigo-950 p-6 text-white sm:p-7">
                <p className="text-lg font-semibold">
                  Ready to start your next project?
                </p>
                <p className="mt-2 text-sm leading-6 text-indigo-200">
                  Tell us what you need. We'll help you plan the next step.
                </p>

                <a
                  href="#contact-form"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-indigo-200"
                >
                  Start a Conversation
                  <FaArrowRight className="text-xs" />
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div
              id="contact-form"
              className="rounded-2xl border border-gray-100 bg-white p-5 shadow-[0_15px_55px_rgba(15,23,42,0.08)] sm:p-8 lg:p-9"
            >
              <div className="mb-7">
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-600">
                  Get In Touch
                </span>

                <h2 className="mt-2 text-2xl font-bold tracking-tight text-gray-950">
                  Contact Us
                </h2>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  Fill in the details below and tell us about your project.
                </p>
              </div>

              {submitted ? (
                <div
                  className="rounded-xl border border-green-100 bg-green-50 p-6"
                  role="status"
                >
                  <h3 className="font-bold text-green-800">
                    Thank you for reaching out!
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-green-700">
                    Your form passed local validation. Connect a backend
                    to deliver your message to your team.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-sm font-semibold text-green-800 underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-xs font-semibold text-gray-700"
                      >
                        Full Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleChange}
                        className={inputClass}
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-2 block text-xs font-semibold text-gray-700"
                      >
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        placeholder="Enter phone number"
                        value={formData.phone}
                        onChange={handleChange}
                        className={inputClass}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-xs font-semibold text-gray-700"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className={inputClass}
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-xs font-semibold text-gray-700"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Tell us a little about your project..."
                      value={formData.message}
                      onChange={handleChange}
                      className={`${inputClass} resize-y`}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="group flex w-full items-center justify-center gap-3 rounded-xl bg-indigo-800 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-900/15 transition duration-300 hover:-translate-y-0.5 hover:bg-indigo-700 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-indigo-500/25 sm:w-auto sm:min-w-40"
                  >
                    Send Message
                    <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
                  </button>

                  <p className="text-xs leading-5 text-gray-400">
                    Your information is used to respond to your inquiry.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          {/* FAQ Heading */}
          <div className="mb-12 text-center sm:mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-600">
              Got Questions?
            </span>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">
              Frequently Asked{" "}
              <span className="text-indigo-700">Questions</span>
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-500 sm:text-base">
              Find answers to common questions about our services and
              how we work.
            </p>
          </div>

          {/* FAQ Content */}
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
            {/* Accordion */}
            <div className="space-y-3">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;

                return (
                  <div
                    key={faq.question}
                    className={`overflow-hidden rounded-xl border transition duration-300 ${
                      isOpen
                        ? "border-indigo-200 bg-indigo-50/50 shadow-sm"
                        : "border-gray-200 bg-white hover:border-indigo-200"
                    }`}
                  >
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() =>
                        setOpenFaq(isOpen ? null : index)
                      }
                      className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                    >
                      <span className="flex items-center gap-3 text-sm font-semibold leading-6 text-gray-900 sm:text-base">
                        <span className="text-xs font-bold text-indigo-600">
                          0{index + 1}
                        </span>
                        {faq.question}
                      </span>

                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition ${
                          isOpen
                            ? "bg-indigo-700 text-white"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        <FaChevronDown
                          className={`text-xs transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </span>
                    </button>

                    <div
                      className={`grid transition-all duration-300 ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="px-5 pb-5 pl-12 text-sm leading-7 text-gray-600">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* FAQ Visual Panel */}
            <div className="relative min-h-[350px] overflow-hidden rounded-3xl bg-[#ffe78c] p-8 sm:min-h-[420px] sm:p-10 lg:min-h-[510px]">
              <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full border-[35px] border-white/25" />
              <div className="absolute -bottom-20 -left-16 h-64 w-64 rounded-full border-[45px] border-white/20" />

              <div className="relative z-10 flex min-h-[285px] flex-col justify-between sm:min-h-[340px] lg:min-h-[430px]">
                <div>
                  <span className="inline-flex rounded-full bg-white/70 px-4 py-2 text-xs font-bold uppercase tracking-wider text-indigo-950">
                    We're Here to Help
                  </span>

                  <h3 className="mt-7 max-w-md text-3xl font-bold leading-tight tracking-tight text-indigo-950 sm:text-4xl">
                    Every Great Project Starts With a Conversation.
                  </h3>

                  <p className="mt-4 max-w-sm text-sm leading-7 text-indigo-950/75">
                    Still have questions? Our team is ready to help you
                    find the right solution for your business.
                  </p>
                </div>

                <a
                  href="#contact-form"
                  className="mt-8 inline-flex w-fit items-center gap-3 rounded-xl bg-indigo-950 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-indigo-800"
                >
                  Talk to Our Team
                  <FaArrowRight className="text-xs" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero9;