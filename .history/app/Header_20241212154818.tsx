import React from 'react'
import IntegraLogo from "@/public/assets/integra-logo.svg"; 
import ButtonArrow from "@/public/assets/buttonarrow.svg"; 

const Header = () => {
  return (
    <div className="pl-10 pr-10 pt-2 pb-3 flex flex-row justify-between font-sans font-light text-gray-800">
      <IntegraLogo className="h-[90px] w-[200px]" />
      <div className="text-xl flex flex-row gap-5 items-center">
        <div className="hover:text-black hover:font-normal hover:cursor-pointer">Insights</div>
        <div className="hover:text-black hover:font-normal hover:cursor-pointer">Industries</div>
        <div className="hover:text-black hover:font-normal hover:cursor-pointer">Services</div>
        <div className="hover:text-black hover:font-normal hover:cursor-pointer">About</div>
        <div className="hover:text-black hover:font-normal hover:cursor-pointer">Contact</div>
        <div id="button"
  className="group  bg-gray-700 h-[44px] flex-row border-[1px] border-gray-700 text-white text-[16px] py-1 px-1 font-light rounded-full hidden md:flex items-center justify-between w-[170px] transition-width duration-500 ease-in-out  hover:w-[195px] hover:bg-white hover:border-gray-700 hover:text-gray-700 hover:cursor-pointer "
  
>
  <div className="mx-3 font-sans font-regular">Get a Quote</div>
  <div className="bg-white rounded-full h-[36px] w-[36px] flex items-center justify-center transition-transform duration-500 ease-in-out group-hover:rotate-45 group-hover:border-[1px] group-hover:border-gray-700">
    <ButtonArrow className="h-[24px] w-[24px]" />
  </div>
            </div>
      </div>
    </div>

  )
}

export default Header