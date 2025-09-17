import React from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";
import { useState } from 'react';


function UserProfileUI() {
    const {ProfileIsOn,setProfileIson} = useState(false)

  return (
    <div className=' w-11 p-0.5  justify-center sm:w-19 h-11 bg-white rounded-4xl flex items-center sm:justify-around '>
      
        <div className='hidden sm:block sm:translate-x-0.25 '>
        <RiArrowDropDownLine color='black' size={27}/>
        </div>
        <div>
            <img className='  sm:-translate-x-0.5    sm:h-9 bg-amber-950 rounded-full  object-cover' src='https://avatars.githubusercontent.com/u/185119742?v=4 '/>
        </div>
    </div>
  )
}

export default UserProfileUI