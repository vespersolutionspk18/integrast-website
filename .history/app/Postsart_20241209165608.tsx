import React from 'react'

const Postsart = () => {
  return (
    <div className="w-full flex flex-col p-10 items-center mt-20">
        <h2 className="text-5xl font-sans text-gray-700 font-light">Posts & Articles</h2>
        <p className="font-sans text-xl text-gray-800 font-light text-center mt-5">Stay up-to-date and enahnce your financial literacy with our engaging and informative<br></br>content your key to achieving financial success</p>
        <div className="flex flex-row gap-5">
            <div className="flex flex-col rounded-2xl w-full h-[340px] border-[1px] p-2 border-gray-500">
            <div className="w-[990px] h-[240px] rounded-[8px] bg-cover bg-center" style={{backgroundImage: `url('/assets/heroimage3.jpg')`}}>asdasdadsasd</div>
            </div>
        </div>
    </div>
  )
}

export default Postsart