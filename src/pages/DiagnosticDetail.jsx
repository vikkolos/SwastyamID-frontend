import UserProfileUI from "../components/UserProfileUI";
import DiagnosticDoctorDetails from "../components/DiagnosticDoctorDetails";
import React, { useState } from 'react'
import DiagnosticPatientDetails from "../components/DiagnosticPatientDetails";
import DiagnosticReDocCard from "../components/DiagnosticReDocCard";


function DiseaseDetail({
    dateofdoc="00-00-0000",
    diagnosisMain="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus est sed a saepe, voluptates reprehenderit quas. Ipsam natus autem hic, amet qui esse explicabo eveniet placeat, reiciendis sed, quis numquam.",
}){
     const [AffectedArea,setAffectedArea]=useState("Right Knee")
    return(
      <div className=" bg-amber-50 w-96 h-60 rounded-2xl flex flex-col text-black justify-evenly pb-2.5">
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
    )
};


function MedicationCard({
    medicinename = "Colpol 650",
    imageurl = "https://imgs.search.brave.com/VyJHpsMhOx0LJf1RIUYfSfQ0S2EnnTtgtlWBfevHqAI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQ3/NDc3MDk0Ni9waG90/by9waWxscy1vbi10/YWJsZS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9ZTRhUzNz/R2U4c2NIbFppMEgy/UWU0ZEFJYi1KQ1ox/UFdqVWZFWWhmcElu/UT0",
  }) {
    return (
      <div className="bg-amber-50 w-44 h-40 rounded-2xl flex flex-col justify-between text-black pb-2.5 overflow-hidden">
        <h5 className="font-semibold pl-3 pt-1.5 text-[0.75rem] translate-y-2 ">{medicinename}</h5>
        <div className="flex-1 flex items-center justify-center p-2 rounded-lg mt-1.5">
          <img src={imageurl} alt={medicinename} className="object-contain w-full h-full rounded-lg
            translate-y-1.5" />
        </div>
      </div>
    );
  }
  
function Medication(){
    return(
        <div >
             <h3 className='text-black font-bold text-lg pl-2 mt-3 pb-2'>Medications</h3>
            <div className="flex max-w-96 flex-wrap  gap-6 items-center ">
             <MedicationCard/>
             <MedicationCard/>
             <MedicationCard/>
             <MedicationCard/>
            </div>
        </div>
    )
}

function DiagnosticDetail() {
  return (
   <>
        <div className="bg-gray-300 p-3 h-screen w-full text-amber-50">
            
         </div>
   </>
  )
}

export default DiagnosticDetail