import React from 'react'
import { MdExpandMore } from "react-icons/md";
function DiagnosticReDocCard({
    type="Scan",
    Labname="Vikram Diagnostic Center",
    docdescription="Right Leg , Shin Bone",
    dateofdoc="00-00-0000",
    labtechnician="Vikram Kumar",
}) {
  const color = ["bg-red-500", "bg-green-500", "bg-blue-500", "bg-purple-500"];

  return (
    <div className="relative flex w-90 h-28 bg-white  rounded-2xl items-center justify-between mt-2 pl-8 overflow-hidden">
      <div
        className={`absolute top-0 left-0 w-[4px] h-full ${
          color[Math.floor(Math.random() * color.length)]
        }`}
      ></div>
      <div className='w-70'>
      <h6 className='text-[0.75em] translate-x-60 text-gray-400 translate-y-3'> {dateofdoc}</h6>
      <div className="text-black font-medium  bg-">
        <h3 className="text-md -translate-y-3">
          {type} : {docdescription}
        </h3>
        
      </div>
      <hr className="my-1 border-gray-300" />
      <div className= ' h-12 flex items-center '>
        <div>
            <img className='  sm:h-9 rounded-full  object-cover' src='https://avatars.githubusercontent.com/u/185119742?v=4 '/>
        </div>
        <div className='text-black flex ml-3 flex-col'>
          <h6 className='font-semibold'>{labtechnician}</h6>
          <p className='text-[0.75rem]'>{Labname}</p>

        </div>
      </div>
      </div>

      {/* Icon section */}
      <div className=" translate-y-6.5 -translate-x-4 bg h-9 w-9 shadow rounded-4xl flex items-center justify-center bg-blue-400 hover:bg-blue-700  ">
        <MdExpandMore
          className="transform transition-transform duration-300 rotate-[270deg] hover:cursor-pointer text-white"
          size={30}
        />
      </div>
    </div>
  );
}

export default DiagnosticReDocCard