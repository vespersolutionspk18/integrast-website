import React from 'react'
import ButtonArrowwhite from "@/public/assets/buttonarrowwhite.svg"; 
import ButtonArrow from "@/public/assets/buttonarrow.svg"; 

const GetinTouchSection = () => {
  return (
    <div className="mt-16">
        <div className="flex flex-row p-10 ">
        <div className="ml-10 w-1/2 font-sans font-light text-gray-700 text-4xl">
        <b>Spread all over the world</b> and get an accountant easily
        </div>
        <div className="mr-10 w-1/2 flex flex-col">
        <p className="font-light text-xl text-gray-700 font-sans text-justify">
            Integra: A global leader in audit, tax, and advisory services, united in expertise, and cultural understanding to deliver exceptional, tailored solutions in audit, accounting, tax, financial advisory, consulting and legal services
        </p>
        <div className="flex flex-row justify-between mt-10">
        <div className="w-1/2 flex flex-col gap-2">
        <h5 className="font-sans font-light text-3xl text-gray-700">100+</h5>
        <p className="font-sans font-light text-xl text-gray-700">Experts in the field</p>
        </div>
        <div className="w-1/2 flex flex-col gap-2">
        <h5 className="font-sans font-light text-3xl text-gray-700">18</h5>
        <p className="font-sans font-light text-xl text-gray-700">Countries we work in </p>
        </div>
        </div>
        
        </div>
    </div>
    </div>
  )
}

export default GetinTouchSection