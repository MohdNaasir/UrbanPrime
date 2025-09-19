import React from 'react'
import Title from '../components/Title'
import NewLetterBox from '../components/NewLetterBox'

const About = () => {
  return (
    <div className='w-[99vw] min-h-[100vh] md:w-[100vw] flex items-center justify-center flex-col bg-gradient-to-l from-[#141414] to-[#0c2025] gap-[50px] pt-[80px]'>
      <Title text1={"ABOUT"} text2={" US"} />

      {/* Centered text section */}
      <div className='w-[90%] lg:w-[70%] flex flex-col items-center justify-center text-center gap-[20px]'>
        <p className='text-white md:text-[16px] text-[13px]'>
          UrbanPrime was born for smart, seamless shopping—created to deliver quality products, trending styles, and everyday essentials in one place. With reliable service, fast delivery, and great value, UrbanPrime makes your online shopping experience simple, satisfying, and stress-free.
        </p>
        <p className='text-white md:text-[16px] text-[13px]'>
          Modern shoppers—combining style, convenience, and affordability. Whether it’s fashion, essentials, or trends, we bring everything you need to one trusted platform with fast delivery, easy returns, and a customer-first shopping experience you’ll love.
        </p>
        <h2 className='text-white font-bold text-xl mt-[10px]'>Our Mission</h2>
        <p className='text-white md:text-[16px] text-[13px]'>
          Our mission is to redefine online shopping by delivering quality, affordability, and convenience. OneCart connects customers with trusted products and brands, offering a seamless, customer-focused experience that saves time, adds value, and fits every lifestyle and need.
        </p>
      </div>

      {/* Why Choose Us Section */}
      <div className='w-[100%] flex items-center justify-center flex-col gap-[20px] mt-[40px]'>
        <Title text1={"WHY"} text2={" CHOOSE US"} />
        <div className="w-[90%] flex items-center justify-center lg:flex-row flex-col py-[40px] gap-[20px]">

          <div className="lg:w-[33%] w-[90%] h-[250px] border border-gray-100 flex flex-col items-center justify-center gap-[20px] px-[20px] text-center text-white backdrop-blur-[2px] bg-[#ffffff0b]">
            <b className="text-[20px] font-semibold text-[#bff1f9]">Quality Assurance</b>
            <p>We guarantee quality through strict checks, reliable sourcing, and a commitment to customer satisfaction always.</p>
          </div>

          <div className="lg:w-[33%] w-[90%] h-[250px] border border-gray-100 flex flex-col items-center justify-center gap-[20px] px-[20px] text-center text-white backdrop-blur-[2px] bg-[#ffffff0b]">
            <b className="text-[20px] font-semibold text-[#bff1f9]">Convenience</b>
            <p>Shop easily with fast delivery, simple navigation, secure checkout, and everything you need in one place.</p>
          </div>

          <div className="lg:w-[33%] w-[90%] h-[250px] border border-gray-100 flex flex-col items-center justify-center gap-[20px] px-[20px] text-center text-white backdrop-blur-[2px] bg-[#ffffff0b]">
            <b className="text-[20px] font-semibold text-[#bff1f9]">Exceptional Customer Service</b>
            <p>Our dedicated support team ensures quick response, helpful solutions, and a smooth shopping experience every time.</p>
          </div>
        </div>
      </div>

      <NewLetterBox />
    </div>
  )
}

export default About
