import React from 'react'
import IntegraFooterLogo from "@/public/assets/integra-logo-white.svg"; 
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  return (
    <div className="flex flex-col bg-black text-white mt-16">
        <div className="flex flex-row p-10 justify-between">
        <div className="w-[46%] pr-10 flex flex-col gap-5">
        <IntegraFooterLogo className="h-[90px] w-[220px]" />
        <h3 className="font-sans font-light text-2xl">Your trusted source for expert personal accounting services. Explore what we have to offer.</h3>
        </div>
        <div className="w-[18%] flex flex-col font-sans font-light">
        <p className="text-white text-2xl font-normal">Navigation</p>
        <ul className="text-gray-100 text-xl">
        <li className="mt-5">Services</li>
        <li className="mt-5">About Us</li>
        <li className="mt-5">Contact Us</li>
        </ul>
        </div>
        <div className="w-[18%] flex flex-col font-sans font-light">
        <p className="text-white text-2xl font-normal">Services</p>
        <ul className="text-gray-100 text-xl">
        <li className="mt-5">Accounting & Finance</li>
        <li className="mt-5">Tax & Legal</li>
        <li className="mt-5">Technology & IT</li>
        </ul>
        </div>
        <div className="w-[18%] flex flex-col font-sans font-light">
        <p className="text-white text-2xl font-normal">Company</p>
        <ul className="text-gray-100 text-xl">
        <li className="mt-5">Legal</li>
        <li className="mt-5">Terms of Use</li>
        <li className="mt-5">Privacy Policy</li>
        </ul>
        </div>
        </div>
        <div className="pl-10 pr-10 pb-10 pt-5">
        <Separator className="border-gray-500 border-[0.5px]" />
        </div>
        <div className="p-10 font-light font-sans text-white text-xl">
        &#169; Integra Strategy (Pvt.) Ltd. All Rights Reserved.
        </div>
    </div>
  )
}

export default Footer