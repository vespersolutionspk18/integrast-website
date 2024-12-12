import React from 'react'
import IntegraFooterLogo from "@/public/assets/integra-logo-white.svg"; 

const Footer = () => {
  return (
    <div className="flex flex-col bg-black text-white">
        <div className="flex flex-row p-10 justify-between">
        <div className="w-1/3 flex flex-col gap-5">
        <IntegraFooterLogo className="h-[90px] w-[150px]" />
        </div>
        </div>
    </div>
  )
}

export default Footer