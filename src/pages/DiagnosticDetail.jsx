import UserProfileUI from "../components/UserProfileUI";
import DiagnosticDoctorDetails from "../components/DiagnosticDoctorDetails";
import React, { useState } from 'react'
import DiagnosticPatientDetails from "../components/DiagnosticPatientDetails";
import DiagnosticReDocCard from "../components/DiagnosticReDocCard";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";

 export function FullDetailsCard({isOpen,onClose,children}){
  if(!isOpen) return null;
  return(
    <div className="fixed z-40 w-full inset-0  rounded-2xl bg-white/30 backdrop-blur-sm border  h-full  flex justify-center items-center">
       <div className="bg-white border-white/20 border rounded-lg shadow-[0px_0px_95px_10px_rgba(59,130,246,0.5)] left-1 max-h-2/3 top-1 w-full max-w-[900px]  p-6 relative h-2/3">
       <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-red-700"
        >
          <IoCloseSharp size={30}/>
        </button>
        {children}
       </div>
    </div>
  )
}


function NotificationIcon(){
    return(
        <div className="h-11 w-11 bg-white shadow rounded-4xl flex items-center justify-center">
            <IoIosNotificationsOutline color="black" size={25}/>
        </div>
    )
}


 function Tabs() {
    const tabs = [
      { name: "Overview" },
      { name: "Patient detail" },
      { name: "Medications" },
      { name: "Docs" },
      { name: "Doctor detail" },
      
    ];
  
    const [activeTab, setActiveTab] = useState("Overview");
  
    return (
      <div className="flex space-x-3 bg-gray- p-3 rounded-xl items-center">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`relative px-4 py-2 rounded-full font-medium transition 
              ${
                activeTab === tab.name
                  ? "bg-blue-400 text-white hover:bg-blue-700"
                  : "bg-white text-gray-600 hover:bg-gray-400 hover:text-white"
              }`}
          >
            {tab.name}
            
          </button>
        ))}
      </div>
    );
  }

function DiseaseDetail({
    dateofdoc="00-00-0000",
    diagnosisMain="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus est sed a saepe, voluptates reprehenderit quas. Ipsam natus autem hic, amet qui esse explicabo eveniet placeat, reiciendis sed, quis numquam.",
}){
     const [AffectedArea,setAffectedArea]=useState("Right Knee")
    return(
        <div>
            <h3 className='text-black font-bold text-lg pl-2 mt-3 pb-2'>Issue</h3>
            <div className=" bg-white  w-90 h-52 rounded-2xl flex flex-col text-black justify-evenly pb-4 ">
           
                <div className="pl-6">
                    <h4 className="text-black font-semibold text-2xl pt-3">{AffectedArea}</h4>
                    <h6 className="text-[0.75em] text-gray-400">Date{" :"}{" "}{dateofdoc}</h6>
                </div>
                <hr className="w-[20rem] mx-auto"/>
                <div className="pl-6 justify-between flex flex-col">
                    <div>
                        <h6  className="font-semibold">Description</h6>
                        <p className="h-18 line-clamp-4 overflow-hidden text-ellipsis mr-6">{diagnosisMain}</p>
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
      <div className="h-72 w-90 bg-white shadow rounded-2xl"></div>
    );
  }
  
function Medication(){
    return(
        <div >
             <h3 className='text-black font-bold text-lg pl-2 mt-3 pb-2'>Medications</h3>
            <div className="flex w-90 flex-wrap  gap-3 items-center ">
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
        <div className="bg-[#f1efec] p-4 h-screen w-full max-w-[1440px] rounded-2xl text-white grid grid-rows-16 gap-1">
  
                <div className="row-span-1 grid grid-cols-18 gap-2">
                    <div className="col-span-4">
                    
                    </div>
                    <div className="col-span-10 flex justify-center items-center -translate-x-1.5 -translate-y-2.5">
                        <Tabs/>
                    </div>
                    <div className=" col-span-2"></div>
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
                        <div className=" ">
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
                   <div className="col-span-1 ">
                        <div className="flex flex-col items-end mt-3">
                            
                        <DiseaseDetail/>
                        <Medication/>
                        </div>

                   </div>
                </div>
        </div>
   </>
  )
}

export default DiagnosticDetail