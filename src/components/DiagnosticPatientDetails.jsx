import React from 'react';
import { useState } from 'react';
import { MdExpandMore } from "react-icons/md";

function DiagnosticPatientDetails() {
  return (
    <>
    <div>
        <div>
            <h3 className='text-black font-bold text-lg pl-2 mt-3 pb-2'>Patient Details</h3>
            <div className='flex w-96 h-24 bg-amber-50 rounded-2xl items-center justify-between p-3 '>
                <div className='ml-3' >
                <img className='  sm:-translate-x-1    h-18 bg-amber-950 rounded-full  object-cover' src='https://avatars.githubusercontent.com/u/185119742?v=4 '/>
                </div>
                <div className='text-black text-lg p-2 '>
                    <h5 className='font-medium mr-18'>Vikram Kumar</h5>
                    <h6 className='font-semibold text-sm'>Age{"  "}:{" "} 20</h6>
                </div>
                <div className='pl-1 ml-2'>
                    <MdExpandMore className='transform transition-transform duration-300 rotate-270 hover:cursor-pointer  text-black hover:text-blue-600 mr-3'  size={30}/>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default DiagnosticPatientDetails