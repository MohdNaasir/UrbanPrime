import React from 'react'
import logo from '../assets/vcart logo.png'

const Footer = () => {
  return (
    <div className="w-full bg-[#0e0d0d] text-white">
      {/* Top Section */}
      <div className="w-full flex flex-col md:flex-row items-center md:items-start justify-between gap-6 md:gap-12 px-5 md:px-16 py-10">
        
        {/* Logo + Description */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-3 md:w-[40%]">
          <div className="flex items-center gap-2">
            <img src={logo} alt="UrbanPrime Logo" className="md:w-12 md:h-12 w-8 h-8" />
            <p className="text-lg md:text-xl font-semibold">UrbanPrime</p>
          </div>
          <p className="text-sm md:text-base text-gray-300 hidden md:block">
            UrbanPrime is your all-in-one online shopping destination, offering
            top-quality products, unbeatable deals, and fast delivery—all backed
            by trusted service designed to make your life easier every day.
          </p>
          <p className="text-sm text-gray-300 md:hidden">
            Fast. Easy. Reliable. UrbanPrime Shopping
          </p>
        </div>

        {/* Company Links */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-3 md:w-[25%]">
          <p className="text-lg md:text-xl font-semibold">COMPANY</p>
          <ul className="flex flex-col gap-2">
            <li className="text-sm text-gray-300">Home</li>
            <li className="text-sm text-gray-300">About Us</li>
            <li className="text-sm text-gray-300">Delivery</li>
            <li className="text-sm text-gray-300">Privacy Policy</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-3 md:w-[25%]">
          <p className="text-lg md:text-xl font-semibold">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2">
            <li className="text-sm text-gray-300">+91-6396664639</li>
            <li className="text-sm text-gray-300">contact@UrbanPrime.com</li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-[1px] bg-[#272626ec]"></div>

      {/* Bottom Section */}
      <div className="w-full h-[50px] flex items-center justify-center text-xs md:text-sm text-gray-400">
        Copyright © 2025 UrbanPrime.com — All Rights Reserved
      </div>
    </div>
  )
}

export default Footer
