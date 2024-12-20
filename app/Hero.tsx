import React from 'react'
import ButtonArrowwhite from "@/public/assets/buttonarrowwhite.svg"; 

const Hero = () => {
  return (
    <div className="flex flex-col p-7 lg:p-10 ">
        <div className="flex flex-col lg:flex-row mt-5 lg:mt-24 lg:h-[190px] gap-5 ">
            <div className="w-full lg:w-[55%] flex flex-col">
                <h1 className="font-light font-sans text-4xl lg:text-6xl text-[#ec8123]">Unlock Prosperity, <span className="text-gray-800">Choose Expert Guidance</span></h1>
                <h4 className="hidden xl:block text-xl font-sans font-light text-gray-900 mt-6">Embark on a transformative journey to financial prosperity with our personalized accountancy services</h4>
            </div>
            <div className="w-full lg:w-[45%] flex flex-col justify-between ">
                <h4 className="text-lg leading-tight lg:leading-normal  md:text-xl text-justify font-light font-sans text-gray-900 mb-10 xl:mb-0">Unlock tailored strategies, benefit from insightful guidances, and follow a clear pathway to achieve your financial success. Elevate your financial journey with our dedicated support and expertise. Contact us today to start your journey towards financial freedom.</h4>
                <div className="hidden xl:flex flex-row gap-5 pt-10">
                <div>
                <div id="button"
  className="group  bg-white h-[44px] flex-row border-[1px] border-gray-700 text-gray-900 text-[16px] py-1 px-1 font-light rounded-full hidden lg:flex items-center justify-between w-[170px] transition-width duration-500 ease-in-out  hover:w-[195px] hover:bg-gray-700 hover:border-gray-700 hover:text-white hover:cursor-pointer "
  
>
  <div className="mx-3 font-sans font-regular">Get In Touch</div>
  <div className="bg-gray-700 rounded-full h-[36px] w-[36px] flex items-center justify-center transition-transform duration-500 ease-in-out group-hover:rotate-45 group-hover:bg-[#ec8123]">
    <ButtonArrowwhite className="h-[24px] w-[24px]" />
  </div>
            </div>
                </div>
                <div>
               
                </div>

                </div>
            </div>
        </div>


        <div className="hidden lg:flex flex-col lg:flex-row lg:h-[380px] gap-4  lg:mt-16">
            <div className="w-full lg:w-[70%] h-36 lg:h-auto transition-all duration-500 ease-in-out hover:w-[90%] rounded-2xl bg-cover bg-center" style={{backgroundImage: `url('/assets/heroimage3.jpg')`}}></div>
            <div className="w-full lg:w-[30%] transition-all duration-500 ease-in-out hover:w-[40%] flex flex-col justify-between ">
                <div className="w-full h-full rounded-2xl bg-cover bg-center" style={{backgroundImage: `url('/assets/heroimage4.jpg')`}}></div>
                <h5 className="font-sans text-gray-900 text-justify text-lg leading-tight lg:leading-normal lg:text-xl mt-3  font-light">Tailored solutions, expert guidance, and strategic planning to secure your wealth and achieve your financial goals seamlessly</h5>
            </div>
        </div>
        <div className="block lg:hidden w-full h-56  rounded-2xl bg-cover" style={{backgroundImage: `url('/assets/heroimage3.jpg')`}}></div>
        <div className="block xl:hidden mt-10">
  <div
    id="button"
    className="group bg-white h-[44px] flex-row border-[1px] border-gray-700 text-gray-900 text-[16px] py-1 px-1 font-light rounded-full flex items-center justify-between w-[170px] transition-width duration-500 ease-in-out hover:w-[195px] hover:bg-gray-700 hover:border-gray-700 hover:text-white hover:cursor-pointer"
  >
    <div className="mx-3 font-sans font-regular">Get In Touch</div>
    <div className="bg-gray-700 rounded-full h-[36px] w-[36px] flex items-center justify-center transition-transform duration-500 ease-in-out group-hover:rotate-45 group-hover:bg-[#ec8123]">
      <ButtonArrowwhite className="h-[24px] w-[24px]" />
    </div>
  </div>
</div>

    </div>
  )
}

export default Hero