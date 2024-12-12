import React from 'react'
import IntegraFooterLogo from "@/public/assets/integra-logo-white.svg"; 

const Footer = () => {
  return (
    <div className="flex flex-col bg-black text-white mt-16">
        <div className="flex flex-row p-10 justify-between">
        <div className="w-[46%] flex flex-col gap-5">
        <IntegraFooterLogo className="h-[90px] w-[220px]" />
        <h3 className="font-sans font-light text-4xl">Your trusted source for expert personal accounting services. Explore what we have to offer.</h3>
        </div>
        <div className="w-[18%] flex flex-col font-sans font-light">
        <p className="text-white text-2xl">Navigation</p>
        <ul className="text-gray-100 text-xl">
        <li>Services</li>
        <li>About Us</li>
        <li>Contact Us</li>
        </ul>
        </div>
        <div className="w-[18%] flex flex-col font-sans font-light">
        <p className="text-white text-2xl">Services</p>
        <ul className="text-gray-100 text-xl">
        <li>Accounting & Finance</li>
        <li>Tax & Legal</li>
        <li>Technology & IT</li>
        </ul>
        </div>
        <div className="w-[18%] flex flex-col font-sans font-light">
        <p className="text-white text-2xl">Company</p>
        <ul className="text-gray-100 text-xl">
        <li>Legal</li>
        <li>Terms of Use</li>
        <li>Privacy Policy</li>
        </ul>
        </div>
        </div>
    </div>
  )
}

export default Footer