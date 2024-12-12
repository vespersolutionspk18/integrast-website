import React from 'react'

const Services = () => {
  return (
    <div className="flex flex-col p-10 mt-16 ">
        <div className="flex flex-row items-start justify-start ">
            <div className="w-1/2 font-sans font-light text-5xl text-gray-700">We collaborate across diverse industry landscapes</div>
            <div className="w-1/2 font-sans text-gray-900 text-justify text-xl  font-light">Our commitment to fostering dynamic collaboration allows to navigate the unique challenges and intricacies of various sectors. Our versatile approach ensures tailored solutions that resonate with the distinct needs of each industry.</div>
        </div>
        <div className="flex flex-row gap-5 mt-16">
            <div className="rounded-2xl w-1/3 h-[540px] bg-cover bg-center flex items-end" style={{backgroundImage: `url('/assets/audit.jpg')`}}>
            <div className="bg-white m-4 w-full  rounded-[12px] flex flex-col">
            <h5 className="ml-5 mt-5 mr-5 mb-5 font-sans text-3xl text-gray-700 font-light">Accounting & Finance</h5>    
            <p className="ml-5 mr-5 mb-5 text-justify font-sans font-light text-xl text-gray-600">We are committed to serving the public interest by providing objective assurance over data on which investors rely.</p>
            </div></div>
            <div className="rounded-2xl w-1/3 h-[540px] bg-cover bg-center flex items-end" style={{backgroundImage: `url('/assets/tax.jpg')`}}>
            <div className="bg-white m-4 w-full  rounded-[12px] flex flex-col">
            <h5 className="ml-5 mt-5 mr-5 mb-5 font-sans text-3xl text-gray-700 font-light">Tax & Legal</h5>    
            <p className="ml-5 mr-5 mb-5 text-justify font-sans font-light text-xl text-gray-600">We are committed to serving the public interest by providing objective assurance over data on which investors rely.</p>
            </div></div>
            <div className="rounded-2xl w-1/3 h-[540px] bg-cover bg-center flex items-end" style={{backgroundImage: `url('/assets/audit.jpg')`}}>
            <div className="bg-white m-4 w-full  rounded-[12px] flex flex-col">
            <h5 className="ml-5 mt-5 mr-5 mb-5 font-sans text-3xl text-gray-700 font-light">Technology & IT</h5>    
            <p className="ml-5 mr-5 mb-5 text-justify font-sans font-light text-xl text-gray-600">We are committed to serving the public interest by providing objective assurance over data on which investors rely.</p>
            </div></div>
        </div>
    </div>
  )
}

export default Services