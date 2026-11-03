import React from 'react'
// import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#06004D] text-white relative">
      <div className="max-w-7xl mx-auto px-8 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & About */}
          <div>
            <img
              src="https://codesthinker.vercel.app/assets/companylogo-C8Mpu76G.webp"
              alt="Code Thinker"
              className="h-16 mb-8"
            />

            <p className="text-[13px] leading-10 text-gray-100">
              We offer a range of cutting-edge web development and software
              solutions tailored to meet client needs. Our experienced team
              delivers collaboratively and efficiently.
            </p>

            <div className="flex  w-[295px]  gap-5 mt-10">
              {[
                <FaFacebookF />,
                <FaTwitter />,
                <FaInstagram />,
                <FaLinkedinIn />,
              ].map((icon, index) => (
                <div
                  key={index}
                  className="w-10 h-10 bg-blue-700  rounded-full flex items-center justify-center text-2xl cursor-pointer hover:scale-105 duration-300"
                >
                  {icon}
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-3x1 font-bold mb-4">Services</h3>

            <ul className="space-y-4 text-[15px]">
              <li>Business Intelligence</li>
              <li>Virtual Workstation</li>
              <li>Network Services</li>
              <li>Data Science</li>
              <li>IT Strategy</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-3x1 font-bold mb-8">Company</h3>

            <ul className="space-y-4 text-[18px]">
              <li>About Us</li>
              <li>Latest Projects</li>
              <li>IT Solutions</li>
              <li>Team Members</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-3x1 font-bold mb-8">Contact Info</h3>

            <div className="space-y-8 text-[18px]">
              <div className="flex gap-5">
                <div className="w-12 h-12 rounded-full bg-blue-700 flex items-center justify-center">
                  <FaPhoneAlt />
                </div>
                <p>+44 7470 103120</p>
              </div>

              <div className="flex gap-5">
                <div className="w-12 h-12 rounded-full bg-blue-700 flex items-center justify-center">
                  <FaEnvelope />
                </div>
                <p>info@codesthinker.com</p>
              </div>

              <div className="flex gap-5">
                <div className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center">
                  <FaMapMarkerAlt />
                </div>

                <p className='text-[13px]'>
                  Bartle House 9 Oxford Court,
                  <br />
                  Manchester M23WQ
                  <br />
                  United Kingdom
                  <br />
                  (Regional Office)
                </p>
              </div>

              <div className="flex gap-5">
                <div className="w-12 h-12 rounded-full bg-blue-700 flex items-center justify-center">
                  <FaMapMarkerAlt />
                </div>

                <p>
                  Hassan Manzil Basement
                  <br />
                  Goheer Town Bahawalpur
                  <br />
                  (Global Delivery Center)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="flex justify-end mt-16">
          <div className="flex w-full max-w-xl">
            <input
              type="email"
              placeholder="Your Mail"
              className="flex-1 h-16 px-6 text-black bg-white text-xl outline-none rounded-l-lg"
            />

            <button className="bg-blue-700 px-10 text-xl font-semibold rounded-r-lg">
              Submit
            </button>
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
    
    </footer>
  );
};




  
  


export default Footer
