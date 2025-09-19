import React from 'react'
import { RiExchangeFundsLine } from "react-icons/ri";
import { TbRosetteDiscountCheckFilled } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";
import Title from './Title';

const OurPolicy = () => {
  return (
    <div className="w-[100vw] min-h-[100vh] flex flex-col items-center justify-start bg-gradient-to-l from-[#141414] to-[#0c2025] px-6 py-16">
      
      {/* Section Title */}
      <div className="text-center mt-[40px] mb-[50px]">
        <Title text1="OUR" text2=" POLICY" />
        <p className="text-[15px] md:text-[22px] text-blue-100 px-4">
          Customer-Friendly Policies 🛡 Committed to Your Satisfaction and Safety.
        </p>
      </div>

      {/* Policy Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-7xl">
        
        {/* Card 1 */}
        <div className="bg-gradient-to-r from-indigo-800 via-red-600 to-indigo-900 p-10 rounded-2xl shadow-2xl flex flex-col items-center justify-center text-center hover:scale-105 transition-transform duration-300">
          <RiExchangeFundsLine className="w-20 h-20 text-white mb-6" />
          <p className="font-bold text-2xl md:text-3xl text-white">Easy Exchange Policy</p>
          <p className="text-base md:text-lg text-gray-100 mt-3 leading-relaxed">
            Exchange Made Easy - Quick, Simple, and Customer-Friendly Process.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-gradient-to-r from-indigo-800 via-red-600 to-indigo-900 p-10 rounded-2xl shadow-2xl flex flex-col items-center justify-center text-center hover:scale-105 transition-transform duration-300">
          <TbRosetteDiscountCheckFilled className="w-20 h-20 text-white mb-6" />
          <p className="font-bold text-2xl md:text-3xl text-white">7 Days Return Policy</p>
          <p className="text-base md:text-lg text-gray-100 mt-3 leading-relaxed">
            Shop with Confidence - 7 Days easy Return Guarantee.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-gradient-to-r from-indigo-800 via-red-600 to-indigo-900 p-10 rounded-2xl shadow-2xl flex flex-col items-center justify-center text-center hover:scale-105 transition-transform duration-300">
          <BiSupport className="w-20 h-20 text-white mb-6" />
          <p className="font-bold text-2xl md:text-3xl text-white">Best Customer Support</p>
          <p className="text-base md:text-lg text-gray-100 mt-3 leading-relaxed">
            Trusted customer support - Your satisfaction is our priority.
          </p>
        </div>

      </div>
    </div>
  )
}

export default OurPolicy
