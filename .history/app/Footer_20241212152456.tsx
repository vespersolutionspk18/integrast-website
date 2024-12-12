import React from 'react'
import IntegraFooterLogo from "@/public/assets/integra-logo-white.svg"; 

const Footer = () => {
  return (
    <div className="flex flex-col bg-black text-white mt-16">
        <div className="flex flex-row p-10 justify-between">
        <div className="w-[50%] flex flex-col gap-5">
        <IntegraFooterLogo className="h-[90px] w-[220px]" />
        <h3 className="font-sans font-light text-4xl">Your trusted source for expert personal accounting services. Explore what we have to offer.</h3>
        </div>
        </div>
    </div>
  )
}

export default Footer