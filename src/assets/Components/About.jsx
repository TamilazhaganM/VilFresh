import React from "react";
import { FaLeaf, FaSeedling, FaTruck } from "react-icons/fa";

import farmImage from "../Components/Images/farm.webp";
import leafBg from "../Components/Images/leafbg.jpg";

const About = () => {
  return (
    <section id="about"
      className="relative py-24 px-6 overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${leafBg})` }}
    >

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* Left Side Image */}
        <div className="flex justify-center">

          <div className="relative">

            {/* Green Shape */}
            <div className="absolute -top-6 -left-6 w-full h-full bg-green-500 rounded-[40px] rotate-6"></div>

            {/* Image */}
            <img
              src={farmImage}
              alt="Farm"
              className=" relative w-full max-w-[500px] rounded-[40px] shadow-2xl object-cover"
            />

          </div>

        </div>

        {/* Right Side Content */}
        <div className="text-white">

          {/* Small Tag */}
          <div className="flex items-center gap-2 text-white-400 mb-5">
            <FaLeaf />
          <span className="uppercase tracking-[5px] text-2xl md:text-3xl font-bold text-gray-100 relative inline-block">

  About <span className="text-green-500">VilFresh</span>

  <span className="absolute left-0 -bottom-2 w-full h-1 bg-gradient-to-r from-yellow-400 to-green-600 rounded-full"></span>

</span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl font-extrabold  leading-tight ">
            From Our Farmers Hands to Your Home : <br /> The Story of VilFresh
          </h1>

          {/* Description */}
          <p className="mt-8 text-2xl font-bold leading-8 text-gray-200">
         VilFresh, the consumer brand of Laymen Agro Ventures, was built with a single purpose: to bring
village-fresh agro-products to urban citizens through an aggregation model that channels the lion's share
of the consumer's price back to the rural economy.
Founded in 2016 by Selvakumar Varadharajan in Coimbatore, Tamil Nadu, VilFresh was born from the
belief that urban consumers deserve unadulterated, truly fresh produce — and that farmers deserve a fair
price for growing it. <br></br> <br></br>
VilFresh empowers rural youth as entrepreneurs — called VillagePreneurs — who collect fruits and
vegetables directly from farmers and deliver them to nearby cities in under 162 minutes, distributed under
Laymen Agro's quality certification. The result: farmers earn 40% to 60% better returns on fruits and
vegetables, substantially improving their livelihoods.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">

            <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/20 hover:scale-105 transition-all duration-300">

              <FaSeedling className="text-4xl text-yellow-400 mb-4" />

              <h2 className="text-3xl font-bold">
                100%
              </h2>

              <p className="mt-2 text-gray-300">
                Organic Mangoes
              </p>

            </div>

            <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/20 hover:scale-105 transition-all duration-300">

              <FaLeaf className="text-4xl text-green-400 mb-4" />

              <h2 className="text-3xl font-bold">
                50+
              </h2>

              <p className="mt-2 text-gray-300">
                Local Farms
              </p>

            </div>

            <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/20 hover:scale-105 transition-all duration-300">

              <FaTruck className="text-4xl text-orange-400 mb-4" />

              <h2 className="text-3xl font-bold">
                Fast
              </h2>

              <p className="mt-2 text-gray-300">
                Farm Delivery
              </p>

            </div>

          </div>

          {/* Button */}
          <button className="mt-10 bg-yellow-500 hover:bg-yellow-600 px-8 py-4 rounded-full text-lg font-semibold shadow-xl transition-all duration-300">
            Explore More
          </button>

        </div>

      </div>

      {/* Organic Blur Shapes */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-yellow-400/20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-10 left-10 w-72 h-72 bg-green-500/20 blur-3xl rounded-full"></div>

    </section>
  );
};

export default About;