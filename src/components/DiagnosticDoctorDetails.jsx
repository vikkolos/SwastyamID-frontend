import React from 'react';
import { useState } from 'react';
import { MdExpandMore } from "react-icons/md";
import { FullDetailsCard } from '../pages/DiagnosticDetail';
function DiagnosticDoctorDetails() {
    const [ConDocName,setConDocName]=useState("Vikram Kumar");
    const [ConDocHospital,setConDocHospital]=useState("Gurushree Hospital");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDetailsOpen,setisDetailsOpen]=useState(false)
  return (
    <>
    <div>
        <div >
            
            <FullDetailsCard isOpen={isModalOpen} onClose={()=>{setIsModalOpen(false) }}/>  
            <h3 className='text-black font-bold text-lg pl-2 mt-3 pb-2'>Doctor Consulted</h3>
            <div  onClick={()=>{setIsModalOpen(true); setisDetailsOpen(true)}}   className='flex w-90 h-22 bg-white  rounded-2xl items-center justify-evenly p-3 '>
                <div className='-translate-x-1.5'>
                <img className='  sm:-translate-x-1    h-16 bg-amber-950 rounded-full  object-cover' src='https://avatars.githubusercontent.com/u/185119742?v=4 '/>
                </div>
                <div className='text-black  p-2 '>
                    <h5 className='font-medium text-[0.85em]'>{ConDocName}</h5>
                    <h6 className='font-semibold text-[0.75rem]'>Hospital{"  "}:{`${ConDocHospital}`}</h6>
                </div>
                <div  onClick={()=>{setIsModalOpen(true) }}  className='pl-1 ml-2 translate-x-1'>
                    <MdExpandMore className='transform transition-transform duration-300 rotate-270 hover:cursor-pointer  text-black hover:text-blue-600'  size={30}/>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default DiagnosticDoctorDetails