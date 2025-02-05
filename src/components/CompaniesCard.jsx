import React from 'react'
import { PiGreaterThanLight } from "react-icons/pi";

const CompaniesCard = ({name,hiring}) => {
  return (
    <div>
        <div className='flex w-60 flex-col items-left justify-around border-1 border-gray-400 p-5 rounded-xl drop-shadow-lg'>
            <div className='font-bold text-black text-xl mb-1 flex items-left'>
                <span>{name}</span>
                 <PiGreaterThanLight size={20} className='mt-1 ml-1'/>
            </div>
            <div className='font-normal text-sm text-gray-700 mb-4'>
                {hiring} are actively hiring
            </div>
            <div className='flex items-center justify-around mb-2'>
                <img src="4617491.png" alt="" className='w-10 h-1o rounded-xl mr-2 '/>
                <img src="4617491.png" alt="" className='w-10 h-1o rounded-xl mr-2 '/>
                <img src="4617491.png" alt="" className='w-10 h-1o rounded-xl mr-2 '/>
                <img src="4617491.png" alt="" className='w-10 h-1o rounded-xl mr-2 '/>
            </div>
        </div>
    </div>
  )
}

export default CompaniesCard