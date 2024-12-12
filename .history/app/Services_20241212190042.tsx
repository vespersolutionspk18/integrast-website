import React from 'react'
import ButtonArrowwhite from "@/public/assets/buttonarrowwhite.svg"; 

const Services = () => {
  return (
    <div className="flex flex-col p-7 lg:p-10 mt-2 lg:mt-16 items-center ">
        <div className="flex flex-col md:flex-row items-start justify-start ">
            <div className="w-full lg:w-1/2 font-sans font-light text-4xl lg:text-5xl text-[#ec8123]">We collaborate across <span className="text-gray-700">diverse industry landscapes</span></div>
            <div className="w-full lg:w-1/2 font-sans text-gray-900 text-justify text-lg leading-tight lg:leading-normal mt-5 lg:mt-0 lg:text-xl  font-light">Our commitment to fostering dynamic collaboration allows to navigate the unique challenges and intricacies of various sectors. Our versatile approach ensures tailored solutions that resonate with the distinct needs of each industry.</div>
        </div>
        <div className="flex flex-col lg:flex-row gap-5 mt-16">
            <div className="rounded-2xl w-full lg:w-1/3 h-[540px] bg-cover bg-center flex items-end  " style={{backgroundImage: `url('/assets/audit.jpg')`}}>
            <div className="group">
  <div className="bg-white m-4  rounded-[12px] flex flex-col relative transition-all duration-500 ease-in-out hover:pb-[120px] min-h-[180px]">
    <h5 className="ml-5 mt-5 mr-5 mb-5 font-sans text-3xl text-gray-700 group-hover:text-[#ec8123] font-light">
      Accounting & Finance
    </h5>
    <p className="ml-5 mr-5 mb-5 text-justify leading-tight lg:leading-normal font-sans font-light text-lg md:text-xl text-gray-600">
      We are committed to serving the public interest by providing objective assurance over data on which investors rely.
    </p>
    {/* Hidden div */}
    <div className="absolute bottom-5 left-5 text-xl font-sans font-light  text-gray-600 px-4 py-2 rounded-md opacity-0 invisible transition-all duration-500 group-hover:opacity-100 group-hover:visible hover:text-black hover:cursor-pointer  hover:underline">
      Learn More
    </div>
  </div>
</div>

</div>
            <div className="rounded-2xl w-full lg:w-1/3 h-[540px] bg-cover bg-center flex items-end" style={{backgroundImage: `url('/assets/tax.jpg')`}}>
            <div className="group">
  <div className="bg-white m-4  rounded-[12px] flex flex-col relative transition-all duration-500 ease-in-out hover:pb-[120px] min-h-[180px]">
    <h5 className="ml-5 mt-5 mr-5 mb-5 font-sans text-3xl text-gray-700 group-hover:text-[#ec8123] font-light">
      Tax & Legal
    </h5>
    <p className="ml-5 mr-5 mb-5 text-justify font-sans font-light leading-tight lg:leading-normal text-lg lg:text-xl text-gray-600">
      We are committed to serving the public interest by providing objective assurance over data on which investors rely.
    </p>
    {/* Hidden div */}
    <div className="absolute bottom-5 left-5 text-xl font-sans font-light  text-gray-600 px-4 py-2 rounded-md opacity-0 invisible transition-all duration-500 group-hover:opacity-100 group-hover:visible hover:text-black hover:cursor-pointer  hover:underline">
      Learn More
    </div>
  </div>
</div>
</div>
            <div className="rounded-2xl w-full lg:w-1/3 h-[540px] bg-cover bg-center flex items-end" style={{backgroundImage: `url('/assets/tech.jpg')`}}>
            <div className="group">
  <div className="bg-white m-4  rounded-[12px] flex flex-col relative transition-all duration-500 ease-in-out hover:pb-[120px] min-h-[180px]">
    <h5 className="ml-5 mt-5 mr-5 mb-5 font-sans text-3xl text-gray-700 group-hover:text-[#ec8123] font-light">
      Technology & IT
    </h5>
    <p className="ml-5 mr-5 mb-5 text-justify font-sans font-light leading-tight lg:leading-normal text-lg md:text-xl text-gray-600">
      We are committed to serving the public interest by providing objective assurance over data on which investors rely.
    </p>
    {/* Hidden div */}
    <div className="absolute bottom-5 left-5 text-xl font-sans font-light  text-gray-600 px-4 py-2 rounded-md opacity-0 invisible transition-all duration-500 group-hover:opacity-100 group-hover:visible hover:text-black hover:cursor-pointer  hover:underline">
      Learn More
    </div>
  </div>
</div>
</div>
        </div>
        <div className="mt-8">
                <div id="button"
  className="group  bg-white h-[44px] flex-row border-[1px] border-gray-700 text-gray-900 text-[16px] py-1 px-1 font-light rounded-full hidden md:flex items-center justify-between w-[190px] transition-width duration-500 ease-in-out hover:cursor-pointer  hover:w-[215px] hover:bg-gray-700 hover:border-gray-700 hover:text-white "
  
>
  <div className="mx-3 font-sans font-regular">View all Services</div>
  <div className="bg-gray-700 rounded-full h-[36px] w-[36px] flex items-center justify-center transition-transform duration-500 ease-in-out group-hover:rotate-45 group-hover:bg-[#ec8123]">
    <ButtonArrowwhite className="h-[24px] w-[24px]" />
  </div>
            </div>
                </div>
                <div className="block lg:hidden">
  <div
    id="button"
    className="group bg-white h-[44px] flex-row border-[1px] border-gray-700 text-gray-900 text-[16px] py-1 px-1 font-light rounded-full flex items-center justify-between w-[170px] transition-width duration-500 ease-in-out hover:w-[195px] hover:bg-gray-700 hover:border-gray-700 hover:text-white hover:cursor-pointer"
  >
    <div className="mx-3 font-sans font-regular">View All Services</div>
    <div className="bg-gray-700 rounded-full h-[36px] w-[36px] flex items-center justify-center transition-transform duration-500 ease-in-out group-hover:rotate-45 group-hover:bg-[#ec8123]">
      <ButtonArrowwhite className="h-[24px] w-[24px]" />
    </div>
  </div>
</div>

    </div>
  )
}

export default Services