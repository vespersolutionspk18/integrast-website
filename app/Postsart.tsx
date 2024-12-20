import React from 'react'

const Postsart = () => {
  return (
    <div className="w-full flex flex-col p-7 lg:p-10 md:items-center mt-20">
        <h2 className="text-4xl lg:text-5xl font-sans text-[#ec8123] font-light">Posts & Articles</h2>
        <p className="font-sans text-lg md:text-xl text-gray-800 font-light md:text-center mt-5">Stay up-to-date and enahnce your financial literacy with our engaging and informative<br></br>content your key to achieving financial success</p>
        <div className="flex flex-col md:flex-row mt-10 gap-5 w-full">
            <div className="hover:border-black hover:cursor-pointer flex flex-col rounded-2xl w-full md:w-1/2  border-[1px] p-4 border-gray-300">
            <div className="w-full h-[340px] rounded-[8px] bg-cover bg-center" style={{backgroundImage: `url('/assets/post1.jpg')`}}></div>
            <h5 className="font-sans font-light text-3xl mt-5 text-gray-700">Navigating Tax Season: Tips for Individuals</h5>
            <p className="font-sans font-light text-gray-600 text-lg mt-3">Explore essential tax-saving strategies and financial tips to optimize your returns with insights from our expert personal accountants.</p>
            </div>
            <div className="hover:border-black hover:cursor-pointer flex flex-col rounded-2xl w-full md:w-1/2  border-[1px] p-4 border-gray-300">
            <div className="w-full h-[340px] rounded-[8px] bg-cover bg-center" style={{backgroundImage: `url('/assets/post2.jpg')`}}></div>
            <h5 className="font-sans font-light text-3xl mt-5 text-gray-700">Insights from personal accountants</h5>
            <p className="font-sans font-light text-gray-600 text-lg mt-3">Explore essential tax-saving strategies and financial tips to optimize your returns with insights from our expert personal accountants.</p>
            </div>
        </div>
        <div className=" flex flex-col md:flex-row mt-5 gap-5 w-full">
            <div className="hover:border-black hover:cursor-pointer flex flex-col rounded-2xl w-full md:w-1/2  border-[1px] p-4 border-gray-300">
            <div className="w-full h-[340px] rounded-[8px] bg-cover bg-center" style={{backgroundImage: `url('/assets/post3.jpg')`}}></div>
            <h5 className="font-sans font-light text-3xl mt-5 text-gray-700">Personal accountant&apos;s prescription</h5>
            <p className="font-sans font-light text-gray-600 text-lg mt-3">Explore essential tax-saving strategies and financial tips to optimize your returns with insights from our expert personal accountants.</p>
            </div>
            <div className="hover:border-black hover:cursor-pointer flex flex-col rounded-2xl w-full md:w-1/2  border-[1px] p-4 border-gray-300">
            <div className="w-full h-[340px] rounded-[8px] bg-cover bg-center" style={{backgroundImage: `url('/assets/post4.jpg')`}}></div>
            <h5 className="font-sans font-light text-3xl mt-5 text-gray-700">Personal finance tips from our Accountants</h5>
            <p className="font-sans font-light text-gray-600 text-lg mt-3">Explore essential tax-saving strategies and financial tips to optimize your returns with insights from our expert personal accountants.</p>
            </div>
        </div>
    </div>
  )
}

export default Postsart