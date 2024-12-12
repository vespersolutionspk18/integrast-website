import React from 'react'
import ButtonArrowwhite from "@/public/assets/buttonarrowwhite.svg"; 
import ButtonArrow from "@/public/assets/buttonarrow.svg"; 
const Hero = () => {
  return (
    <div className="flex flex-col p-10 ">
        <div className="flex flex-row mt-24 h-[190px] gap-5 ">
            <div className="w-[55%] flex flex-col">
                <h1 className="font-light font-sans text-6xl text-gray-600">Unlock Prosperity, <span className="text-gray-800">Choose Expert Guidance</span></h1>
                <h4 className="text-xl font-sans text-gray-900 mt-6">Embark on a transformative journey to financial prosperity with our personalized accountancy services</h4>
            </div>
            <div className="w-[45%] flex flex-col justify-between ">
                <h4 className="text-xl text-justify font-sans text-slate-900">Unlock tailored strategies, benefit from insightful guidances, and follow a clear pathway to achieve your financial success. Elevate your financial journey with our dedicated support and expertise. Contact us today to start your journey towards financial freedom.</h4>
                <div className="flex flex-row gap-5 pt-10">
                <div>
                <div id="button"
  className="group  bg-white h-[44px] flex-row border-[1px] border-gray-700 text-gray-900 text-[16px] py-1 px-1 font-light rounded-full hidden md:flex items-center justify-between w-[170px] transition-width duration-500 ease-in-out  hover:w-[195px] hover:bg-gray-700 hover:border-gray-700 hover:text-white "
  
>
  <div className="mx-3 font-sans font-regular">Get In Touch</div>
  <div className="bg-gray-700 rounded-full h-[36px] w-[36px] flex items-center justify-center transition-transform duration-500 ease-in-out group-hover:rotate-45">
    <ButtonArrowwhite className="h-[24px] w-[24px]" />
  </div>
            </div>
                </div>
                <div>
                <div id="button"
  className="group  bg-gray-700 h-[44px] flex-row border-[1px] border-gray-700 text-white text-[16px] py-1 px-1 font-light rounded-full hidden md:flex items-center justify-between w-[170px] transition-width duration-500 ease-in-out  hover:w-[195px] hover:bg-white hover:border-gray-700 hover:text-gray-700 "
  
>
  <div className="mx-3 font-sans font-regular">Get a Quote</div>
  <div className="bg-white rounded-full h-[36px] w-[36px] flex items-center justify-center transition-transform duration-500 ease-in-out group-hover:rotate-45">
    <ButtonArrow className="h-[24px] w-[24px]" />
  </div>
            </div>
                </div>

                </div>
            </div>
        </div>


        <div className="flex flex-row h-[340px] gap-4 mt-16">
            <div className="w-[65%] rounded-2xl bg-cover bg-center" style={{backgroundImage: `url('/assets/heroimage1.jpg')`}}></div>
            <div className="w-[35%] flex flex-col justify-between ">
                <div className="w-full h-[80%] rounded-2xl bg-cover bg-center" style={{backgroundImage: `url('/assets/heroimage1.jpg')`}}></div>
            </div>
        </div>
    </div>
  )
}

export default Hero