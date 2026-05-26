import React, { useState } from 'react'
import { FaArrowCircleUp } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const Comingsoon = () => {
    const Navigate = useNavigate()
    const [mail,setMail] = useState('')
    function handlenotify(){
        setMail(' ')
    }
    function handlehome(){
        Navigate('/')
    }   
  return (
    <div>
        <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-yellow-100 via-orange-50 to-green-100 flex items-center justify-center px-6">
      {/* Background Blur Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-300/40 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-300/40 blur-3xl rounded-full"></div>

      {/* Main Card */}
      <div className="relative z-10 max-w-4xl w-full bg-white/70 backdrop-blur-xl border border-white/40 rounded-[40px] shadow-2xl p-10 md:p-16 text-center">

        {/* Badge */}
        <div className="inline-block px-6 py-2 rounded-full bg-yellow-400 text-black font-semibold tracking-wide text-sm shadow-lg animate-pulse">
          🚧 Website Under Construction
        </div>

        {/* Heading */}
        <h1 className="mt-10 text-5xl md:text-7xl font-black leading-tight text-gray-800">
          Coming
          <span className="text-yellow-500"> Soon</span>
        </h1>

        {/* Description */}
        <p className="mt-8 text-lg md:text-2xl text-gray-600 leading-9 max-w-2xl mx-auto">
          We’re preparing something fresh, juicy, and exciting for you.
          VilFresh is currently being crafted with love to bring you
          premium farm-fresh mangoes directly from nature.
        </p>

        {/* Animated Dots */}
        <div className="flex justify-center gap-4 mt-10">
          <div className="w-5 h-5 bg-yellow-400 rounded-full animate-bounce"></div>
          <div className="w-5 h-5 bg-green-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
          <div className="w-5 h-5 bg-orange-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
        </div>

        {/* Subscribe Box */}
        <div className="mt-14 flex flex-col md:flex-row items-center justify-center gap-4">
          <input
          onChange={(e)=>setMail(e.target.value)}
          value={mail}
            type="email"
            placeholder="Enter your email"
            className="w-full md:w-[400px] px-6 py-4 rounded-2xl border border-gray-200 outline-none focus:ring-4 focus:ring-yellow-300 text-lg"
          />

          <button onClick={handlenotify} className="bg-yellow-500 hover:bg-yellow-600 transition-all duration-300 text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-xl hover:scale-105">
            Notify Me
          </button>
        </div>

        {/* Footer Text */}
        <p className="mt-12 text-gray-500 text-sm md:text-base">
          © 2026 VilFresh • Freshness is arriving soon 🍋
        </p>
      </div>
    </div>
    
     <button onClick={handlehome} className='fixed bottom-6 right-6 z-50 bg-white border-4 border-amber-400 p-3 rounded-full shadow-xl hover:scale-110 transition-all duration-300'
    >
        <FaArrowCircleUp className='text-4xl text-green-800' />
    </button>
      
      
    </div>
  )
}

export default Comingsoon