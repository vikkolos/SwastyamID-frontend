import React from 'react'
import { MdExpandMore } from "react-icons/md";
function DiagnosticReDocCard({
    type="Scan",
    Labname="Vikram Diagnostic Center",
    labdocdetails="Vikram kumar",
    docdescription="Right Leg , Shin Bone",
    dateofdoc="00-00-0000"
}) {
  return (
    <>
    
    <div className='flex w-96 h-28 bg-amber-50 rounded-2xl items-center justify-between mt-2 pl-8'>
       
        <div className='text-black font-medium'>
            <h3 className='text-xl'>{type}{" "}:{" "}{docdescription}</h3>
            <h6>Date{" :"}{" "}{dateofdoc}</h6>

        </div>
        <div className='pl-1 ml-2'>
            <MdExpandMore className='transform transition-transform duration-300 rotate-270 hover:cursor-pointer  text-black hover:text-blue-600 mr-6.5'  size={30}/>
        </div>
    </div>
    </>
  )
}

export default DiagnosticReDocCard