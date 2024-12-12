import React from 'react'
import IntegraLogo from "@/public/assets/integra-logo.svg"; 

const Header = () => {
  return (
    <div className="p-10 flex flex-row justify-between font-sans font-light text-gray-800">
      <IntegraLogo className="h-[90px] w-[140px]" />
    </div>
  )
}

export default Header