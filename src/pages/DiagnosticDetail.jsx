import UserProfileUI from "../components/UserProfileUI";
import DiagnosticDoctorDetails from "../components/DiagnosticDoctorDetails";
import React from 'react'
import DiagnosticPatientDetails from "../components/DiagnosticPatientDetails";
import DiagnosticReDocCard from "../components/DiagnosticReDocCard";

function DiagnosticDetail() {
  return (
   <>
        <div className="bg-gray-300 p-3 h-screen w-full text-amber-50">
            <DiagnosticDoctorDetails/>
            <DiagnosticPatientDetails/>
            <div>
                <div>
                            <h2 className='text-black font-bold text-lg pl-2 mt-3'>Related Documents</h2>
                </div>
                <DiagnosticReDocCard/>
                <DiagnosticReDocCard/>
                <DiagnosticReDocCard/>
            </div>
            <div className="m-1.5">

                <UserProfileUI/>
            </div>
         </div>
   </>
  )
}

export default DiagnosticDetail