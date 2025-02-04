import React from 'react'
import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  return (
    <div>
        <div className='flex justify-around items-center bg-white shadow-lg pl-5 pr-5 pt-5 pb-5 rounded-full'>
            <div className='flex items-center text-blue-300 font-medium'>
                <CiSearch className='text-gray-500 mr-2'/>
                <div>Enter skills / designations / companies</div>
            </div>
            <div className="absolute right-0 top-0 h-full w-[3px] bg-gradient-to-b from-gray-300 to-transparent pointer-events-none"></div>
            <div className='flex items-center text-blue-300 font-medium'>
                <select name="Experience" id="Experience">
                    <option value="experience">Select Experience</option>
                </select>
            </div>
            <div className="absolute right-0 top-0 h-full w-[3px] bg-gradient-to-b from-gray-300 to-transparent pointer-events-none"></div>
            <div className='flex items-center text-blue-300 font-medium'>
                Enter Location
            </div>
            <div className='flex items-center text-blue-300 font-medium rounded-full'>
                <div className='bg-blue-700 text-white pr-7 pl-7 pt-1 pb-1 rounded-full'>Search</div>
            </div>

        </div>
    </div>
  )
}

export default SearchBar