import UserProfileUI from "../components/UserProfileUI";
import DiagnosticDoctorDetails from "../components/DiagnosticDoctorDetails";
import React, { useState } from 'react'
import DiagnosticPatientDetails from "../components/DiagnosticPatientDetails";
import DiagnosticReDocCard from "../components/DiagnosticReDocCard";
import { IoIosNotificationsOutline } from "react-icons/io";
function NotificationIcon(){
    return(
        <div className="h-11 w-11 bg-amber-50 rounded-4xl flex items-center justify-center">
            <IoIosNotificationsOutline color="black" size={25}/>
        </div>
    )
}
function DiseaseDetail({
    dateofdoc="00-00-0000",
    diagnosisMain="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus est sed a saepe, voluptates reprehenderit quas. Ipsam natus autem hic, amet qui esse explicabo eveniet placeat, reiciendis sed, quis numquam.",
}){
     const [AffectedArea,setAffectedArea]=useState("Right Knee")
    return(
        <div>
            <h3 className='text-black font-bold text-lg pl-2 mt-3 pb-2'>Doctor Consulted</h3>
            <div className=" bg-amber-50 w-96 h-64 rounded-2xl flex flex-col text-black justify-evenly pb-4 ">
           
                <div className="pl-6">
                    <h4 className="text-black font-semibold text-2xl pt-3">{AffectedArea}</h4>
                    <h6 className="text-[0.75em] text-gray-400">Date{" :"}{" "}{dateofdoc}</h6>
                </div>
                <hr className="w-[22rem] mx-auto"/>
                <div className="pl-6 justify-between flex flex-col">
                    <div>
                        <h6  className="font-semibold">Main Diagnosis</h6>
                        <p className="h-12 line-clamp-2 overflow-hidden text-ellipsis mr-6">{diagnosisMain}</p>
                    </div>
                    <div>
                    <h6  className="font-semibold">Conclusion</h6>
                        <p className="h-12 line-clamp-2 overflow-hidden text-ellipsis mr-6">{diagnosisMain}</p>
                    </div>

                </div>

         </div>
      </div> 
    )
};


function MedicationCard({
    medicinename = "Colpol 650",
    imageurl = "https://imgs.search.brave.com/VyJHpsMhOx0LJf1RIUYfSfQ0S2EnnTtgtlWBfevHqAI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQ3/NDc3MDk0Ni9waG90/by9waWxscy1vbi10/YWJsZS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9ZTRhUzNz/R2U4c2NIbFppMEgy/UWU0ZEFJYi1KQ1ox/UFdqVWZFWWhmcElu/UT0",
  }) {
    return (
      <div className="bg-amber-50 w-46 h-40 rounded-2xl flex flex-col justify-between text-black pb-2.5 overflow-hidden">
        <h5 className="font-semibold pl-3 pt-1.5 text-[0.75rem] translate-y-1 ">{medicinename}</h5>
        <div className="flex-1 flex items-center justify-center p-2 rounded-lg mt-1.5">
          <img src={imageurl} alt={medicinename} className="object-contain w-full h-full rounded-lg
            " />
        </div>
      </div>
    );
  }
  
function Medication(){
    return(
        <div >
             <h3 className='text-black font-bold text-lg pl-2 mt-3 pb-2'>Medications</h3>
            <div className="flex max-w-96 flex-wrap  gap-3 items-center ">
             <MedicationCard/>
             <MedicationCard/>
             <MedicationCard/>
             <MedicationCard/>
            </div>
        </div>
    )

}
function NavArea(){
    return(
     <div className="h-full w-full bg-amber-900">

     </div>
    )
}

function DiagnosticDetail() {
  return (
   <>
        <div className="bg-gray-200 p-4 h-screen w-10/12 text-amber-50 grid grid-rows-16 gap-2">
  
                <div className="row-span-1 grid grid-cols-18 gap-2">
                    <div className="col-span-16">
                    
                    </div>


                    <div className="col-span-1 flex justify-center">
                     <NotificationIcon/>
                    </div>


                    <div className="col-span-1 mr-2">
                        <div className="">

                            <UserProfileUI />
                        </div>
                    </div>
                </div>

              
                <div className="row-span-15 grid grid-cols-3 gap-2">
                   <div className="col-span-1 ">
                        <div>
                            <DiagnosticPatientDetails/>
                            <DiagnosticDoctorDetails/>
                            <div>
                                 <h2 className='text-black font-bold text-lg pl-2 mt-3'>Related Documents</h2>
                                 
                             </div>
                            <DiagnosticReDocCard/>
                            <DiagnosticReDocCard/>
                            <DiagnosticReDocCard/>
                        </div>
                   </div>
                   <div className="col-span-1">
                       

                   </div>
                   <div className="col-span-1 flex flex-col items-end">
                        
                        <DiseaseDetail/>
                        <Medication/>

                   </div>
                </div>
        </div>
   </>
  )
}

export default DiagnosticDetail