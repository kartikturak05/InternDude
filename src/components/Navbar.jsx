import React from 'react'

const Navbar = () => {
  return (
    <div>
        <div className='w-full bg-white shadow-md'>
            <div className='container mx-auto flex justify-around items-center pt-4 pl-5 pr-5 pb-2'>
                <div className='flex justify-between items-center'>
                    <img src="Logo.png" className='w-full h-14 text-lg text-gray-900 font-normal cursor-pointer hover:text-gray-700  mr-5'/>
                    <div className='text-base text-gray-900 font-normal pt-2 pb-2 pl-5 pr-5 cursor-pointer hover:text-gray-700 hover:font-semibold'>Internship</div>
                    <div className='text-base text-gray-900 font-normal pt-2 pb-2 pl-5 pr-5 cursor-pointer hover:text-gray-700 hover:font-semibold'>Jobs</div>
                    <div className='text-base text-gray-900 font-normal pt-2 pb-2 pl-5 pr-5 cursor-pointer hover:text-gray-700 hover:font-semibold'>Courses</div>
                </div>
                <div className='flex items-center justify-between'>
                    <div className=' pl-2 pr-2 pt-1 pb-1 border-1 text-center border-[#1F509A] rounded-sm font-semibold text-[#1F509A] mr-5 text-base font-bold cursor-pointer hover:text-gray-700 ' >Contact Us</div>
                    <div className='pl-8 pr-8 pt-1 pb-1 bg-blue-800 text-white font-bold rounded-sm text-base cursor-pointer'>Sign Up</div>
                    <select name="profile" id="" className='text-base text-gray-900 font-normal pt-2 pb-2 pl-5 pr-1 cursor-pointer hover:text-gray-700'>
                        <option value="For Employeer">For Employeer</option>
                        <option value="For Student">For Student</option>
                    </select>
                </div>

            </div>

        </div>
    </div>
  )
}

export default Navbar