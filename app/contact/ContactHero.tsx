"use client";
import React, { useState } from 'react';
import ButtonArrowwhite from "@/public/assets/buttonarrowwhite.svg"; 

const ContactHero = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, message });
  };

  return (
    <div className="font-sans p-10 ">
      <h1 className="text-4xl font-light text-center text-gray-700">Get in Touch</h1>
      <p className="text-lg text-center text-gray-700 mb-5">We would love to hear from you!</p>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-3 border border-gray-200 rounded-2xl focus:border-gray-700 focus:ring-0 focus:outline-none"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-3 border border-gray-200 rounded-2xl focus:border-gray-700 focus:ring-0 focus:outline-none"
          required
        />
        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="p-3 border border-gray-200 rounded-2xl focus:border-gray-700 focus:ring-0 focus:outline-none"
          rows={4}
          required
        />
        <div className="flex justify-center">
          <div id="button"
            className="group bg-white h-[44px] flex-row border-[1px] border-gray-700 text-gray-900 text-[16px] py-1 px-1 font-light rounded-full flex items-center justify-between w-[170px] transition-width duration-500 ease-in-out hover:w-[195px] hover:bg-gray-700 hover:border-gray-700 hover:text-white hover:cursor-pointer"
            onClick={handleSubmit}>
            <div className="mx-3 font-sans font-regular">Submit Data</div>
            <div className="bg-gray-700 rounded-full h-[36px] w-[36px] flex items-center justify-center transition-transform duration-500 ease-in-out group-hover:rotate-45 group-hover:bg-[#ec8123]">
              <ButtonArrowwhite className="h-[24px] w-[24px]" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactHero;