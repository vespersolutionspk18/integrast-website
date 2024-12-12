import React from 'react'

const Hero = () => {
  return (
    <div className="flex flex-col p-10 ">
        <div className="flex flex-row mt-24 h-[280px] gap-5 ">
            <div className="w-[55%] flex flex-col">
                <h1 className="font-light font-sans text-6xl text-blue-700">Unlock Prosperity, <span className="text-gray-800">Choose Expert Guidance</span></h1>
                <h4 className="text-xl font-sans text-slate-800 mt-6">Embark on a transformative journey to financial prosperity with our personalized accountancy services</h4>
            </div>
            <div className="w-[45%] flex flex-col items-start">
                <h4 className="text-xl text-justify font-sans text-slate-800 mt-6">Unlock tailored strategies, benefit from insightful guidances, and follow a clear pathway to achieve your financial success. Elevate your financial journey with our dedicated support and expertise</h4>
            </div>
        </div>
    </div>
  )
}

export default Hero