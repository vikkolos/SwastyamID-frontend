import React from 'react';
import { useState } from 'react';
import { MdExpandMore } from "react-icons/md";
import { FullDetailsCard } from '../pages/DiagnosticDetail';

function DiagnosticPatientDetails() {
    const [isModalOpen, setIsModalOpen] = useState(false);
   
  return (
    <>
    <div>
        <div className=''>
             <FullDetailsCard isOpen={isModalOpen} onClose={()=>setIsModalOpen(false)}/>  
            <h3 className='text-black font-bold text-lg pl-2 mt-3 pb-2'>Patient Details</h3>
            <div onClick={()=>{setIsModalOpen(true)}} className=' relative flex w-90 h-22 overflow-hidden  bg-white rounded-2xl items-center justify-between p-2 '>
               
                <div className='ml-3' >
                <img className='  sm:-translate-x-1    h-16 bg-amber-950 rounded-full  object-cover' src='https://avatars.githubusercontent.com/u/185119742?v=4 '/>
                </div>
                <div className='text-black text-lg p-2 '>
                    <h5 className='font-medium mr-14 text-[0.85em]'>Vikram Kumar</h5>
                    <h6 className='font-semibold text-[0.75rem]'>Age{"  "}:{" "} 20</h6>
                </div>
                <div  onClick={()=>{setIsModalOpen(true)}}  className='pl-1 ml-3'>
                    <MdExpandMore  className='transform transition-transform duration-300 rotate-270 hover:cursor-pointer  text-black hover:text-blue-600 mr-3'  size={30}/>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default DiagnosticPatientDetails