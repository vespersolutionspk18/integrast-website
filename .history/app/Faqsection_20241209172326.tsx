import React from 'react'

const Faqsection = () => {
  return (
    <div className="flex flex-col p-10 items-center mt-20">
    <h2 className="font-sans font-light text-5xl text-gray-700">Frequently Asked Questions</h2>
    <p className="font-sans mt-5 font-light text-xl text-gray-600 text-center">We prioritize your satisfaction, ensuring a secure financial future. Choose us for peace of mind<br></br>in your financial endeavours.</p>
    <div className="w-full flex flex-col gap-5 mt-5">
        <div className="border-[1px] border-gray-400 rounded-2xl items-center p-5">
            <h5 className="font-sans font-light text-2xl text-gray-700">What Services do personal accountants provide?</h5>
        </div>
    </div>
    </div>
  )
}

export default Faqsection