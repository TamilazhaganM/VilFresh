import React, { useState } from "react";
import { FaHeart, FaStar } from "react-icons/fa";
import alphonso from "../Components/Images/alphonso.jpg";
import banganapalli from "../Components/Images/banganapalli.jpg";
import imam from "../Components/Images/langra.jpg";
import { useNavigate } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Alphonso Mango",
    price: "₹299 / kg",
    image: alphonso,
    desc: "The Alphonso mango is a named mango cultivar that originates from India. In the UK in 2012, it was considered one of the most prized mangoes, known for its saffron-coloured flesh.",
    altname: "VilFresh Alphonso Mangoes"
  },

  {
    id: 2,
    name: "Banganapalli Mango",
    price: "₹249 / kg",
    image: banganapalli,
    desc: `A timeless favourite across South India, Banganapalle mangoes are celebrated for their generous size, luminous golden-yellow skin, and irresistibly smooth non-fibrous pulp.`,
    altname: "VilFresh Banganapalli Mangoes"
  },

  {
    id: 3,
    name: "Langra Mango",
    price: "₹349 / kg",
    image: imam,
    desc: "The 'Langra' mango, also known as Benarasi Langra, is a mango cultivar that was first cultivated in Banaras in present-day Uttar Pradesh, India 250 to 300 years ago.",
    altname: "VilFresh Langra Mangoes"
  },
];

const Products = () => {

  const navigate = useNavigate();

  const [count, setCount] = useState(0);

  // Toast Message State
  const [wishlistMsg, setWishlistMsg] = useState(false);

  function handleorder() {
    navigate('/Shopping');
  }

  function handleincrement() {
    setCount(count + 1);
  }

  function handledecrement() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  // Wishlist Function
  function handleheart() {

    setWishlistMsg(true);

    setTimeout(() => {
      setWishlistMsg(false);
    }, 1500);

  }

  return (

    <>
    
      {/* Toast Message */}
      {
        wishlistMsg && (
          <div className="fixed top-5 left-1/2 -translate-x-1/2 bg-red-500 text-white px-6 py-3 rounded-2xl shadow-2xl z-50 animate-bounce">
            💛 Added to Wishlist
          </div>
        )
      }

      <section id="product" className="bg-[#fffaf3] py-20 px-6">

        {/* Heading */}
        <div className="text-center mb-14">

          <h4 className="bg-amber-600 md:w-1/4 mx-auto p-2 rounded-2xl mb-5 text-white">
            Our Mango varieties
          </h4>

          <h1 className="text-5xl md:w-1/2 mx-auto font-bold ramp text-yellow-500">
            The king of Fruits, From the Heart of India
          </h1>

          <p className="text-gray-500 mt-4 text-lg">
            Farm fresh organic mangoes delivered to your doorstep
          </p>

        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {products.map((item) => (

            <div
              key={item.id}
              className="bg-white rounded-3xl shadow-lg overflow-hidden hover:-translate-y-3 hover:shadow-2xl transition-all duration-300"
            >

              {/* Wishlist */}
              <div className="flex justify-end p-4">

                <FaHeart
                  onClick={handleheart}
                  className="text-gray-300 hover:text-red-500 cursor-pointer text-2xl transition-all duration-300"
                />

              </div>

              {/* Image */}
              <div className="flex justify-center">

                <img
                  src={item.image}
                  alt={item.altname}
                  className="w-[200px] h-[200px] object-contain hover:scale-110 transition-all duration-300"
                />

              </div>

              {/* Content */}
              <div className="p-5">

                {/* Rating */}
                <div className="flex gap-1 justify-center text-yellow-400 mb-3">

                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />

                </div>

                {/* Name */}
                <h2 className="text-2xl text-center font-bold mb-3">
                  {item.name}
                </h2>

                {/* Description */}
                <p className="text-gray-500 leading-7 text-center">
                  {item.desc}
                </p>

                {/* Price */}
                <h3 className="text-2xl font-bold text-center text-green-600 mt-4">
                  {item.price}
                </h3>

                {/* Quantity */}
                <div className="flex items-center justify-center gap-4 mt-5">

                  <button
                    onClick={handledecrement}
                    className="w-10 h-10 bg-gray-100 rounded-full text-xl hover:bg-yellow-400 transition-all duration-300"
                  >
                    -
                  </button>

                  <span className="text-xl font-semibold">
                    {count}
                  </span>

                  <button
                    onClick={handleincrement}
                    className="w-10 h-10 bg-gray-100 rounded-full text-xl hover:bg-yellow-400 transition-all duration-300"
                  >
                    +
                  </button>

                </div>

                {/* Button */}
                <button
                  onClick={handleorder}
                  className="w-full mt-6 bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded-xl text-md font-semibold transition-all duration-300"
                >
                  Add to Cart
                </button>

              </div>

            </div>

          ))}

        </div>

      </section>

    </>
  );
};

export default Products;