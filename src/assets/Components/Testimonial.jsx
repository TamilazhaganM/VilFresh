import React from 'react'
import mangofarmer from '../Components/Images/mangofarmer.webp'

const Testimonial = () => {
  return (
    <div>
<section className="w-full py-20 px-5 md:px-16 bg-[#38891a]">

  <div className="flex flex-col md:flex-row items-center gap-12 bg-white shadow-xl rounded-3xl overflow-hidden">

    {/* Left Image */}
    <div className="md:w-1/2 w-full">
      <img
        src={mangofarmer}
        alt="farmers"
        className="w-full h-[300px] md:h-[500px] object-cover"
      />
    </div>

    {/* Right Content */}
    <div className="md:w-1/2 w-full px-8 md:px-12 py-10">

      <p className="text-yellow-500 uppercase tracking-[4px] font-semibold mb-4">
        Our Farmers
      </p>

      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-6">
        The People Behind <br /> Your Mangoes
      </h1>

      <p className="text-gray-600 leading-8 text-[16px] mb-6">
        Our farmers are the heart of every mango we deliver.
        With years of experience, natural farming practices,
        and dedication to quality, they carefully grow each fruit
        with love and responsibility.
      </p>

      <p className="text-gray-600 leading-8 text-[16px]">
        Every bite supports hardworking farming families,
        sustainable agriculture, and a healthier future
        for both people and nature.
      </p>

    </div>

  </div>


  {/* Statistics */}
  <div className="grid grid-cols-1 md:grid-cols-3 border border-gray-200 rounded-3xl overflow-hidden shadow-md bg-white mt-16">

    <div className="text-center py-10 px-6 border-b md:border-b-0 md:border-r border-gray-200">
      <h1 className="text-4xl font-bold text-yellow-500 mb-3">
        50+
      </h1>

      <p className="text-lg font-medium text-gray-700">
        Partner Farmers
      </p>
    </div>

    <div className="text-center py-10 px-6 border-b md:border-b-0 md:border-r border-gray-200">
      <h1 className="text-4xl font-bold text-yellow-500 mb-3">
        2000+
      </h1>

      <p className="text-lg font-medium text-gray-700">
        Happy Families
      </p>
    </div>

    <div className="text-center py-10 px-6">
      <h1 className="text-4xl font-bold text-yellow-500 mb-3">
        100%
      </h1>

      <p className="text-lg font-medium text-gray-700">
        Chemical Free
      </p>
    </div>

  </div>

</section>



{/* ================= TESTIMONIAL SECTION ================= */}

<section className="w-full py-20 px-5 md:px-16 bg-white overflow-hidden">

  {/* Heading */}
  <div className="text-center mb-16">

    <p className="text-yellow-500 font-semibold tracking-widest uppercase mb-3">
      Testimonials
    </p>

    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-5">
      What Families Say About Us
    </h1>

    <p className="max-w-2xl mx-auto text-gray-500 leading-7">
      Thousands of families trust our naturally grown mangoes 
      for freshness, sweetness, and farm-direct quality.
    </p>
  </div>


  {/* Carousel */}
  <div className="relative w-full overflow-hidden">

    <div className="flex gap-8 animate-scroll ">

      {/* Card 1 */}
      <div className="min-w-[340px] max-w-[340px] bg-[#fffdf8] rounded-3xl shadow-lg p-8 text-center">

        {/* Text */}
        <p className="text-gray-600 leading-7 mb-8 ">
          “The mangoes were incredibly fresh and naturally sweet. 
          My whole family loved them. Definitely ordering again!”
        </p>

        {/* Stars */}
        <div className="flex justify-center gap-1 text-yellow-400 mb-6">
          ⭐ ⭐ ⭐ ⭐ ⭐
        </div>

        {/* Image */}
        <img
          src="https://randomuser.me/api/portraits/women/44.jpg"
          alt=""
          className="w-20 h-20 rounded-full object-cover mx-auto border-4 border-yellow-400 mb-4"
        />

        {/* Name */}
        <h1 className="text-xl font-semibold text-gray-800">
          Priya Sharma
        </h1>

        <p className="text-gray-500 text-sm">
          Premium Family Plan
        </p>

      </div>



      {/* Card 2 */}
      <div className="min-w-[340px] max-w-[340px] bg-[#fffdf8] rounded-3xl shadow-lg p-8 text-center  border border-yellow-100">

        <p className="text-gray-600 leading-7 mb-8">
          “Farm fresh quality with authentic taste. 
          You can truly feel the difference compared to market mangoes.”
        </p>

        <div className="flex justify-center gap-1 text-yellow-400 mb-6">
          ⭐ ⭐ ⭐ ⭐ ⭐
        </div>

        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt=""
          className="w-20 h-20 rounded-full object-cover mx-auto border-4 border-yellow-400 mb-4"
        />

        <h1 className="text-xl font-semibold text-gray-800">
          Arjun Kumar
        </h1>

        <p className="text-gray-500 text-sm">
          Gold Mango Plan
        </p>

      </div>



      {/* Card 3 */}
      <div className="min-w-[340px] max-w-[340px] bg-[#fffdf8] rounded-3xl shadow-lg p-8 text-center">

        <p className="text-gray-600 leading-7 mb-8">
          “Loved the packaging and freshness. 
          It feels great to support real farmers directly.”
        </p>

        <div className="flex justify-center gap-1 text-yellow-400 mb-6">
          ⭐ ⭐ ⭐ ⭐ ⭐
        </div>

        <img
          src="https://randomuser.me/api/portraits/women/68.jpg"
          alt=""
          className="w-20 h-20 rounded-full object-cover mx-auto border-4 border-yellow-400 mb-4"
        />

        <h1 className="text-xl font-semibold text-gray-800">
          Meera Patel
        </h1>

        <p className="text-gray-500 text-sm">
          Organic Family Pack
        </p>

      </div>



      {/* Duplicate Cards for Smooth Infinite Scroll */}
            <div className="min-w-[340px] max-w-[340px] bg-[#fffdf8] rounded-3xl shadow-lg p-8 text-center">

        <p className="text-gray-600 leading-7 mb-8">
          “The mangoes were incredibly fresh and naturally sweet. 
          My whole family loved them. Definitely ordering again!”
        </p>

        <div className="flex justify-center gap-1 text-yellow-400 mb-6">
          ⭐ ⭐ ⭐ ⭐ ⭐
        </div>

        <img
          src="https://randomuser.me/api/portraits/women/44.jpg"
          alt=""
          className="w-20 h-20 rounded-full object-cover mx-auto border-4 border-yellow-400 mb-4"
        />

        <h1 className="text-xl font-semibold text-gray-800">
          Priya Sharma
        </h1>

        <p className="text-gray-500 text-sm">
          Premium Family Plan
        </p>

      </div>


      
    </div>
  </div>
</section>
    </div>
  )
}

export default Testimonial