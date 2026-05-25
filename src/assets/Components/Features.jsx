import React from "react";
import {
  FaLeaf,
  FaTruck,
  FaShieldAlt,
  FaWarehouse,
} from "react-icons/fa";

const features = [
  {
    id: 1,
    title: "Organic & Naturally Ripened",
    desc: "Fresh mangoes grown naturally without harmful chemicals or artificial ripening methods.",
    icon: <FaLeaf />,
    color: "text-green-500",
    bg: "bg-green-100",
  },

  {
    id: 2,
    title: "Fast Delivery",
    desc: "Quick and safe doorstep delivery to keep your mangoes fresh and juicy.",
    icon: <FaTruck />,
    color: "text-orange-500",
    bg: "bg-orange-100",
  },

  {
    id: 3,
    title: "Quality Assurance",
    desc: "Every mango is carefully checked to ensure premium farm-fresh quality.",
    icon: <FaShieldAlt />,
    color: "text-blue-500",
    bg: "bg-blue-100",
  },

  {
    id: 4,
    title: "Farm Direct Supply",
    desc: "Directly sourced from trusted local farms with authentic natural taste.",
    icon: <FaWarehouse />,
    color: "text-yellow-500",
    bg: "bg-yellow-100",
  },
];

const Features = () => {
  return (
    <section id="features" className="relative py-24 px-6 bg-[#fff8e8] overflow-hidden">

      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-300/30 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-orange-500/30 blur-3xl rounded-full"></div>

      {/* Heading */}
      <div className="relative z-10 text-center mb-20">

        <p className="uppercase tracking-[4px] text-yellow-600 font-semibold mb-4">
          Why Choose VilFresh
        </p>

        <h1 className="text-5xl md:text-6xl font-extrabold ramp text-gray-800">
          Freshness You Can Trust
        </h1>

        <p className="mt-6 text-gray-500 text-lg max-w-3xl mx-auto leading-8">
          We bring premium farm-fresh mangoes directly from local farms
          with natural quality, freshness, and fast delivery.
        </p>

      </div>

      {/* Feature Cards */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">

        {features.map((item) => (
          <div
            key={item.id}
            className="group bg-white rounded-[30px] p-8 shadow-lg hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 border border-yellow-100"
          >

            {/* Icon Box */}
            <div
              className={`w-20 h-20 ${item.bg} rounded-2xl flex items-center justify-center text-4xl ${item.color} mb-8 group-hover:scale-110 transition-all duration-500`}
            >
              {item.icon}
            </div>

            {/* Title */}
            <h2 className="text-2xl font-bold text-gray-800 leading-snug">
              {item.title}
            </h2>

            {/* Description */}
            <p className="mt-5 text-gray-500 leading-8">
              {item.desc}
            </p>

            {/* Hover Line */}
            <div className="w-0 group-hover:w-full h-1 bg-yellow-400 rounded-full mt-8 transition-all duration-500"></div>

          </div>
        ))}

      </div>

    </section>
  );
};

export default Features;