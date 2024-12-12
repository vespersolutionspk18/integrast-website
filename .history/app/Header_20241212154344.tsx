import React from 'react'
import IntegraLogo from "@/public/assets/integra-logo.svg"; 

const Header = () => {
  return (
    <div className="pl-10 pr-10 pt-3 pb-3 flex flex-row justify-between font-sans font-light text-gray-800">
      <IntegraLogo className="h-[90px] w-[240px]" />
    </div>
  )
}

export default Header