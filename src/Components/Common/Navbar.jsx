import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-[#05005e] h-[70px] flex items-center justify-around px-12 fixed z-20 w-full">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src="https://codesthinker.vercel.app/assets/companylogo-C8Mpu76G.webp"
          alt="Codes Thinker"
          className="h-14 object-contain"
        />
      </div>

      {/* Menu */}
      <ul className="hidden md:flex items-center gap-7 text-white text-[20px] font-semibold">
        <li>
          <a href="/" className="text-blue-500">
            Home
          </a>
        </li>
        <li>
          <a href="/about" className="hover:text-blue-500 transition">
            About
          </a>
        </li>
        <li>
          <a href="/services" className="hover:text-blue-500 transition">
            Services
          </a>
        </li>
        <li>
          <a href="/projects" className="hover:text-blue-500 transition">
            Projects
          </a>
        </li>
        <li>
          <a href="/Team" className="hover:text-blue-500 transition">
            Team
          </a>
        </li>
        <li>
          <a href="/Contact" className="hover:text-blue-500 transition">
            Contact
          </a>
        </li>
      </ul>

      {/* Login Button */}
      <button className="border border-white text-white px-8 py-2 rounded-full text-[20px] font-medium hover:bg-white hover:text-[#05005e] transition duration-300">
        Login
      </button>
    </nav>
  );
};

export default Navbar;