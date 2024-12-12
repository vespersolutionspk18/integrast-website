import React from 'react'
import ButtonArrow from "@/public/assets/buttonarrowwhite.svg"; 
const Hero = () => {
  return (
    <div className="flex flex-col p-10 ">
        <div className="flex flex-row mt-24 h-[280px] gap-5 ">
            <div className="w-[55%] flex flex-col">
                <h1 className="font-light font-sans text-6xl text-gray-600">Unlock Prosperity, <span className="text-gray-800">Choose Expert Guidance</span></h1>
                <h4 className="text-xl font-sans text-gray-900 mt-6">Embark on a transformative journey to financial prosperity with our personalized accountancy services</h4>
            </div>
            <div className="w-[45%] flex flex-col items-start ">
                <h4 className="text-xl text-justify font-sans text-slate-900">Unlock tailored strategies, benefit from insightful guidances, and follow a clear pathway to achieve your financial success. Elevate your financial journey with our dedicated support and expertise</h4>
                <div className="flex flex-row gap-5">
                <div id="button"
  className="group  bg-white h-[44px] flex-row  text-gray-900 text-[16px] py-1 px-1 font-light rounded-full hidden md:flex items-center justify-between w-[200px] transition-width duration-500 ease-in-out  hover:w-[225px] "
  
>
  <div className="mx-3 font-sans font-medium">Get a Price Quote</div>
  <div className="bg-gray-900 rounded-full h-[36px] w-[36px] flex items-center justify-center transition-transform duration-500 ease-in-out group-hover:rotate-45">
    <ButtonArrow className="h-[24px] w-[24px]" />
  </div>
            </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero