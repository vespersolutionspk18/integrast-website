import React from 'react'

const Services = () => {
  return (
    <div className="flex flex-col p-10 mt-16 ">
        <div className="flex flex-row items-start justify-start ">
            <div className="w-1/2 font-sans font-light text-5xl text-gray-700">We collaborate across diverse industry landscapes</div>
            <div className="w-1/2 font-sans text-gray-900 text-justify text-xl  font-light">Our commitment to fostering dynamic collaboration allows to navigate the unique challenges and intricacies of various sectors. Our versatile approach ensures tailored solutions that resonate with the distinct needs of each industry.</div>
        </div>
        <div className="flex flex-row gap-5 mt-16">
            <div className="rounded-2xl w-1/3 h-full bg-cover bg-center flex items-end" style={{backgroundImage: `url('/assets/heroimage4.jpg')`}}><div className="bg-white m-4 w-full h-[240px] rounded-[12px] flex flex-col">
            <h5 className="m-5 font-sans text-3xl text-gray-700 font-light">Audit & Assurance</h5>    
            <p className="ml-5 font-justify font-sans font-light text-xl text-gray-700">We are committed to serving the public interest by providing objective assurance over data on which investors rely.</p>
            </div></div>
            <div className="rounded-2xl w-1/3 h-[640px] bg-cover bg-center" style={{backgroundImage: `url('/assets/heroimage4.jpg')`}}></div>
            <div className="rounded-2xl w-1/3 h-[640px] bg-cover bg-center" style={{backgroundImage: `url('/assets/heroimage4.jpg')`}}></div>
        </div>
    </div>
  )
}

export default Services