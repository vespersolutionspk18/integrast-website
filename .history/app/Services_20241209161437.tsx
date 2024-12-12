import React from 'react'
import ButtonArrowwhite from "@/public/assets/buttonarrowwhite.svg"; 
import ButtonArrow from "@/public/assets/buttonarrow.svg"; 
const Services = () => {
  return (
    <div className="flex flex-col p-10 mt-16 items-center ">
        <div className="flex flex-row items-start justify-start ">
            <div className="w-1/2 font-sans font-light text-5xl text-gray-700">We collaborate across diverse industry landscapes</div>
            <div className="w-1/2 font-sans text-gray-900 text-justify text-xl  font-light">Our commitment to fostering dynamic collaboration allows to navigate the unique challenges and intricacies of various sectors. Our versatile approach ensures tailored solutions that resonate with the distinct needs of each industry.</div>
        </div>
        <div className="flex flex-row gap-5 mt-16">
            <div className="rounded-2xl w-1/3 h-[540px] bg-cover bg-center flex items-end  " style={{backgroundImage: `url('/assets/audit.jpg')`}}>
            <div className="bg-white m-4 w-full  rounded-[12px] flex flex-col group hover:bg-gray-700">
            <h5 className="ml-5 mt-5 mr-5 mb-5 font-sans text-3xl text-gray-700 font-light group-hover:text-white">Accounting & Finance</h5>    
            <p className="ml-5 mr-5 mb-5 text-justify font-sans font-light text-xl text-gray-600 group-hover:text-white">We are committed to serving the public interest by providing objective assurance over data on which investors rely.</p>
            </div></div>
            <div className="rounded-2xl w-1/3 h-[540px] bg-cover bg-center flex items-end" style={{backgroundImage: `url('/assets/tax.jpg')`}}>
            <div className="bg-white m-4 w-full  rounded-[12px] flex flex-col">
            <h5 className="ml-5 mt-5 mr-5 mb-5 font-sans text-3xl text-gray-700 font-light">Tax & Legal</h5>    
            <p className="ml-5 mr-5 mb-5 text-justify font-sans font-light text-xl text-gray-600">We are committed to serving the public interest by providing objective assurance over data on which investors rely.</p>
            </div></div>
            <div className="rounded-2xl w-1/3 h-[540px] bg-cover bg-center flex items-end" style={{backgroundImage: `url('/assets/tech.jpg')`}}>
            <div className="bg-white m-4 w-full  rounded-[12px] flex flex-col">
            <h5 className="ml-5 mt-5 mr-5 mb-5 font-sans text-3xl text-gray-700 font-light">Technology & IT</h5>    
            <p className="ml-5 mr-5 mb-5 text-justify font-sans font-light text-xl text-gray-600">We are committed to serving the public interest by providing objective assurance over data on which investors rely.</p>
            </div></div>
        </div>
        <div className="mt-8">
                <div id="button"
  className="group  bg-white h-[44px] flex-row border-[1px] border-gray-700 text-gray-900 text-[16px] py-1 px-1 font-light rounded-full hidden md:flex items-center justify-between w-[170px] transition-width duration-500 ease-in-out hover:cursor-pointer  hover:w-[195px] hover:bg-gray-700 hover:border-gray-700 hover:text-white "
  
>
  <div className="mx-3 font-sans font-regular">Learn More</div>
  <div className="bg-gray-700 rounded-full h-[36px] w-[36px] flex items-center justify-center transition-transform duration-500 ease-in-out group-hover:rotate-45">
    <ButtonArrowwhite className="h-[24px] w-[24px]" />
  </div>
            </div>
                </div>
    </div>
  )
}

export default Services