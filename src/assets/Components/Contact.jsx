import React from "react";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="contact" className="relative bg-[#123524] text-white overflow-hidden">

      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-green-500/20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-yellow-400/10 blur-3xl rounded-full"></div>

      {/* Main Footer */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">

        {/* Company Info */}
        <div>

          <h1 className="text-5xl ramp text-yellow-400">
            VilFresh
          </h1>

          <p className="mt-6 text-gray-300 leading-8">
            VilFresh delivers naturally grown farm-fresh mangoes
            directly from trusted local farms with premium quality
            assurance and fast doorstep delivery.
          </p>

          {/* Social Icons */}
          <div className="flex gap-5 mt-8">

            <a href="https://www.facebook.com/VILFRESH/"><div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-all duration-300 cursor-pointer">
              <FaFacebookF />
            </div>
</a>
            <a href="https://www.instagram.com/vilfresh_cbe/"><div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-all duration-300 cursor-pointer">
              <FaInstagram />
            </div>
</a>
            <a href=""><div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-all duration-300 cursor-pointer">
              <FaTwitter />
            </div></a>

            <a href="https://www.linkedin.com/company/vilfresh-laymen-agro/?originalSubdomain=in"><div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-all duration-300 cursor-pointer">
              <FaLinkedin />
            </div></a>

          </div>

        </div>

        {/* Quick Links */}
        <div>

          <h2 className="text-3xl font-bold text-yellow-400 mb-8">
            Quick Links
          </h2>

          <ul className="space-y-5 text-gray-300 text-lg">

            <a href="#home"><li className="hover:text-yellow-400 cursor-pointer transition-all duration-300">
              Home
            </li></a>

            <a href="#product"><li className="hover:text-yellow-400 cursor-pointer transition-all duration-300">
              Products
            </li></a>

            <a href="#about"><li className="hover:text-yellow-400 cursor-pointer transition-all duration-300">
              About
            </li></a>

            <a href="#features"><li className="hover:text-yellow-400 cursor-pointer transition-all duration-300">
              Features
            </li></a>

            <a href="#contact"><li className="hover:text-yellow-400 cursor-pointer transition-all duration-300">
              Contact
            </li></a>

          </ul>

        </div>

        {/* Contact Info */}
        <div>

          <h2 className="text-3xl font-bold text-yellow-400 mb-8">
            Contact Us
          </h2>

          <div className="space-y-6 text-gray-300">

            {/* Phone */}
            <div className="flex items-start gap-4">

              <div className="text-yellow-400 text-xl mt-1">
                <FaPhoneAlt />
              </div>

              <div>
                <h3 className="font-semibold text-white">
                  Phone
                </h3>

                <p className="mt-1">
                  +91 88255 85893
                </p>
              </div>

            </div>

            {/* Email */}
            <div className="flex items-start gap-4">

              <div className="text-yellow-400 text-xl mt-1">
                <FaEnvelope />
              </div>

              <div>
                <h3 className="font-semibold text-white">
                  Email
                </h3>

                <p className="mt-1">
                  hello@vilfresh.in
                </p>
              </div>

            </div>

            {/* Address */}
            <div className="flex items-start gap-4">

              <div className="text-yellow-400 text-xl mt-1">
                <FaMapMarkerAlt />
              </div>

              <div>
                <h3 className="font-semibold text-white">
                  Address
                </h3>

                <p className="mt-1 leading-7">
                  No. 19, CM Kalyanamandapa Road, Lane adjacent Coral Ennar Apts, Ganapathi

Gardens, Coimbatore – 641006, Tamil Nadu, India
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom Footer */}
      <div className="relative z-10 border-t border-white/10 py-6 text-center text-gray-400">

        <p>
          © 2026 VilFresh. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
};

export default Footer;