"use client"
import React, { useState } from 'react';
import IntegraLogo from "@/public/assets/integra-logo.svg"; 
import ButtonArrow from "@/public/assets/buttonarrow.svg"; 
import HeaderMenu from "@/public/assets/sm-header-menu.svg";
import Link from 'next/link';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="lg:pl-10 pl-5 pr-5 lg:pr-10 pt-4 lg:pt-1 lg:pb-3 flex flex-row justify-between font-sans font-light text-gray-800">
      <Link href="/">
        <IntegraLogo className="lg:h-[90px] flex lg:w-[200px] h-[50px]" />
      </Link>
      <div className="text-xl hidden lg:flex flex-row gap-5 items-center">
        <Link href="/insights" className="hover:text-black hover:font-normal">Insights</Link>
        <Link href="/industries" className="hover:text-black hover:font-normal">Industries</Link>
        <Link href="/services" className="hover:text-black hover:font-normal">Services</Link>
        <Link href="/about" className="hover:text-black hover:font-normal">About</Link>
        <Link href="/clients" className="hover:text-black hover:font-normal pr-5">Clients</Link>
        <div id="button" className="group bg-gray-700 h-[44px] flex-row border-[1px] border-gray-700 text-white text-[16px] py-1 px-1 font-light rounded-full hidden lg:flex items-center justify-between w-[170px] transition-width duration-500 ease-in-out hover:w-[195px] hover:bg-[#ec8123] hover:border-[#ec8123] hover:cursor-pointer">  
          <Link href="/contact" className="mx-3 font-sans font-regular">Contact Us</Link>
          <div className="bg-white rounded-full h-[36px] w-[36px] flex items-center justify-center transition-transform duration-500 ease-in-out group-hover:rotate-45">
            <ButtonArrow className="h-[24px] w-[24px]" />
          </div>
        </div>
      </div>
      <div className="lg:hidden flex border-[1px] border-gray-400 rounded-xl p-3 items-center justify-center" onClick={toggleMenu}>
        <HeaderMenu className="h-[24px] w-[24px]" />
      </div>
      {menuOpen && (
        <div className="absolute top-16 left-5 right-5 bg-white shadow-lg rounded-lg p-5 z-10">
          <ul className="flex flex-col gap-3">
            <li><Link href="/insights" className="hover:text-gray-700 cursor-pointer">Insights</Link></li>
            <li><Link href="/industries" className="hover:text-gray-700 cursor-pointer">Industries</Link></li>
            <li><Link href="/services" className="hover:text-gray-700 cursor-pointer">Services</Link></li>
            <li><Link href="/about" className="hover:text-gray-700 cursor-pointer">About</Link></li>
            <li><Link href="/clients" className="hover:text-gray-700 cursor-pointer">Clients</Link></li>
            <li><Link href="/contact" className="hover:text-gray-700 cursor-pointer">Contact</Link></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;