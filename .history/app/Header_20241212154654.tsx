import React from 'react'
import IntegraLogo from "@/public/assets/integra-logo.svg"; 

const Header = () => {
  return (
    <div className="pl-10 pr-10 pt-3 pb-3 flex flex-row justify-between font-sans font-light text-gray-800">
      <IntegraLogo className="h-[90px] w-[240px]" />
      <div className="text-xl flex flex-row gap-5 items-center">
        <div className="hover:text-black hover:font-normal hover:cursor-pointer">Insights</div>
        <div className="hover:text-black hover:font-normal hover:cursor-pointer">Industries</div>
        <div className="hover:text-black hover:font-normal hover:cursor-pointer">Services</div>
        <div className="hover:text-black hover:font-normal hover:cursor-pointer">About</div>
        <div className="hover:text-black hover:font-normal hover:cursor-pointer">Contact</div>
      </div>
    </div>

  )
}

export default Header