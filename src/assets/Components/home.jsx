import React, { useState } from 'react'
import logo from '../Components/Images/logo.png'
import { FaBars, FaTimes, FaArrowCircleUp, FaSearch, FaHeart, FaShoppingCart } from 'react-icons/fa'
import homeimage from '../Components/Images/home.png'
import mangoimage from '../Components/Images/mangoimage.png'
import { useNavigate } from 'react-router-dom'
import Comingsoon from './Comingsoon'
const Home = () => {
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)
  function handleorder(){
    navigate('/Shopping')
  }
 
  function handlehome() {
  const homeSection = document.getElementById('home')
  homeSection?.scrollIntoView({
    behavior: 'smooth'
  })
}


  return (
    <div>

     {/* Navbar */}
{/* ================= NAVBAR ================= */}

<nav className="w-full sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100">

  {/* Desktop Navbar */}
  <div className="hidden md:flex px-5 md:px-10 py-4 justify-between items-center">

    {/* Logo */}
    <div className="flex items-center gap-2">
      <a href="#home">
        <img
          src={logo}
          className="w-12 h-12 object-contain cursor-pointer"
          alt="logo"
        />
      </a>
    </div>

    {/* Menu */}
    <ul className="flex items-center gap-10 text-[17px] font-medium text-gray-700">

      <a href="#product">
        <li className="cursor-pointer hover:text-yellow-500 transition duration-300">
          PRODUCT
        </li>
      </a>

      <a href="#about">
        <li className="cursor-pointer hover:text-yellow-500 transition duration-300">
          ABOUT
        </li>
      </a>

      <a href="#features">
        <li className="cursor-pointer hover:text-yellow-500 transition duration-300">
          FEATURES
        </li>
      </a>

      <a href="#contact">
        <li className="cursor-pointer hover:text-yellow-500 transition duration-300">
          CONTACT
        </li>
      </a>

    </ul>

    {/* Right Section */}
    <div className="flex items-center gap-5">

      {/* Search */}
      <div className="flex items-center bg-gray-100 px-4 py-2 rounded-full">
        <FaSearch className="text-gray-500" />

        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none px-2 text-sm"
        />
      </div>

      {/* Heart */}
      <div className="relative cursor-pointer">
        <FaHeart className="text-xl text-gray-700 hover:text-red-500 transition duration-300" />

        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
          0
        </span>
      </div>

      {/* Cart */}
      <div className="relative cursor-pointer">
        <FaShoppingCart className="text-xl text-gray-700 hover:text-yellow-500 transition duration-300" />

        <span className="absolute -top-2 -right-2 bg-yellow-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
          0
        </span>
      </div>

    </div>
  </div>



  {/* ================= MOBILE NAVBAR ================= */}

  <div className="md:hidden px-5 py-4">

    {/* Top Row */}
    <div className="flex items-center justify-between">

      {/* Hamburger */}
      <div
        className="text-2xl cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Logo */}
      <a href="#home">
        <img
          src={logo}
          className="w-12 h-12 object-contain"
          alt="logo"
        />
      </a>

      {/* Icons */}
      <div className="flex items-center gap-5">

        {/* Heart */}
        <div className="relative">
          <FaHeart className="text-xl text-gray-700" />

          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
            0
          </span>
        </div>

        {/* Cart */}
        <div className="relative">
          <FaShoppingCart className="text-xl text-gray-700" />

          <span className="absolute -top-2 -right-2 bg-yellow-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
            0
          </span>
        </div>

      </div>

    </div>

    {/* Search Box */}
    <div className="flex items-center bg-gray-100 px-4 py-3 rounded-full mt-5">

      <FaSearch className="text-gray-500" />

      <input
        type="text"
        placeholder="Search mangoes..."
        className="bg-transparent outline-none px-2 w-full text-sm"
      />

    </div>

  </div>



  {/* ================= MOBILE MENU ================= */}

  {menuOpen && (
    <div className="md:hidden bg-white shadow-lg px-6 py-6 w-full border-t">

      <ul className="flex flex-col gap-5 text-lg font-medium text-gray-700">

        <a href="#product">
          <li className="cursor-pointer hover:text-yellow-500">
            PRODUCT
          </li>
        </a>

        <a href="#about">
          <li className="cursor-pointer hover:text-yellow-500">
            ABOUT
          </li>
        </a>

        <a href="#features">
          <li className="cursor-pointer hover:text-yellow-500">
            FEATURES
          </li>
        </a>

        <a href="#contact">
          <li className="cursor-pointer hover:text-yellow-500">
            CONTACT
          </li>
        </a>

      </ul>

    </div>
  )}

</nav>
      <div   id="home" className='h-full bg-cover bg-no-repeat  bg-center flex items-center justify-center ' style={{backgroundImage : `url(${homeimage})`}}>
           <div className='flex flex-col  mx-4 md:top-20 md:relative md:flex md:flex-row  '>
           <div className=' relative top-20 md:top-5'>
             <h1 className='text-4xl font-extrabold bigshoulder md:left-30 md:relative md:text-7xl'><span className='text-yellow-500'>VilFresh Mangoes</span> Straight from <span className='text-yellow-500'>the farm</span></h1><br></br>
             <h4 className='text-gray-500 w-3/4 md:relative left-30 md:text-xl font-semilight '>Order premium farm-fresh mangoes online from VilFresh by Laymen Agro.
Naturally ripened Banganapalle, Malliga & Sendoora mangoes delivered to your
doorstep. No chemicals.
Healthy, juicy, and delivered with care</h4>
           </div>
           <div className='w-4/6 '>
            <img className=' w-225 h-175 relative -right-30 bottom-35 md:relative md:right-20 md:bottom-0' src={mangoimage} alt="Fresh Mangoes"/>
           </div>

           </div>
        
      </div>
      <div className='flex justify-around md:justify-center md:gap-10 md:relative  bottom-20'>
       <button className='bg-yellow-500 relative bottom-70 md:bottom-25 hover:bg-amber-50 border p-3 rounded-2xl' onClick={handleorder}>Order Now 🥭</button>
       <a href="#contact"><button className='bg-white border relative bottom-70 md:bottom-25 border-yellow-500 hover:bg-yellow-500 p-3 rounded-2xl'>Connect with us</button></a>

      </div>
<button onClick={handlehome}
  className='fixed bottom-6 right-6 z-50 bg-white border-4 border-amber-400 p-3 rounded-full shadow-xl hover:scale-110 transition-all duration-300'
> <FaArrowCircleUp className='text-4xl text-green-800' /></button>
  
    </div>
  )
}

export default Home