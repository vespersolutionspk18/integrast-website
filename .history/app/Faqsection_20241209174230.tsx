import React from 'react'
import ButtonRight from "@/public/assets/right.svg"; 
const Faqsection = () => {
  return (
    <div className="flex flex-col p-10 items-center mt-20">
    <h2 className="font-sans font-light text-5xl text-gray-700">Frequently Asked Questions</h2>
    <p className="font-sans mt-5 font-light text-xl text-gray-600 text-center">We prioritize your satisfaction, ensuring a secure financial future. Choose us for peace of mind<br></br>in your financial endeavours.</p>
    <div className="w-full flex flex-col gap-5 mt-5">
        <div className="border-[1px] border-gray-300 rounded-2xl items-center p-5 flex flex-row justify-between">
            <h5 className="font-sans font-light text-2xl text-gray-700">What Services do personal accountants provide?</h5>
            <div className="bg-white border-[1px] border-gray-300 rounded-full h-[36px] w-[36px] flex items-center justify-center transition-transform duration-500 ease-in-out group-hover:rotate-45">
    <ButtonRight className="h-[24px] w-[24px]" />
  </div>
        </div>
    </div>
    </div>
  )
}

export default Faqsection