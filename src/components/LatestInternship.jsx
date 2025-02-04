import React from 'react'
import JobCard from './JobCard'

const LatestInternship = () => {
  return (
    <div>
        <div className='flex flex-col justify-around items-center '>
            <div className='text-3xl font-bold'>Latest internship on Intern Dude</div>
            <div className='flex justify-around items-center mt-10'>
                <div className='w-auto border-1 border-blue-700 rounded-xl pl-2 pr-2 pt-1 pb-1 bg-gray-100 mr-2 font-semibold cursor-pointer'>All</div>
                <div className='w-auto border-1 border-blue-700 rounded-xl pl-2 pr-2 pt-1 pb-1 mr-2 cursor-pointer'>IT Services</div>
                <div className='w-auto border-1 border-blue-700 rounded-xl pl-2 pr-2 pt-1 pb-1 mr-2 cursor-pointer'>Technology</div>
                <div className='w-auto border-1 border-blue-700 rounded-xl pl-2 pr-2 pt-1 pb-1 mr-2 cursor-pointer'>Manufacturing & Production</div>
                <div className='w-auto border-1 border-blue-700 rounded-xl pl-2 pr-2 pt-1 pb-1 mr-2 cursor-pointer'>Healthcare & Life Sciences</div>
                <div className='w-auto border-1 border-blue-700 rounded-xl pl-2 pr-2 pt-1 pb-1 mr-2 cursor-pointer'>BFSI</div>
                <div className='w-auto border-1 border-blue-700 rounded-xl pl-2 pr-2 pt-1 pb-1 mr-2 cursor-pointer'>Infrastructure , Transport & Real Estate</div>
                <div className='font-bold text-sm'>+4 more</div>                
            </div>

            <div className='flex justify-around items-center mt-10'>

                {/* Card 1 */}
                <div className='flex justify-between items-center gap-5'>
                    <JobCard title="Internship" Post="Web Developer" company="Connex India" location="Delhi" stipend="10,000/month" duration="6 months"/>
                    <JobCard title="Internship" Post="Web Developer" company="Connex India" location="Delhi" stipend="10,000/month" duration="6 months"/>
                    <JobCard title="Internship" Post="Web Developer" company="Connex India" location="Delhi" stipend="10,000/month" duration="6 months"/>
                    <JobCard title="Internship" Post="Web Developer" company="Connex India" location="Delhi" stipend="10,000/month" duration="6 months"/>
                </div>

            </div>
        </div>
    </div>
  )
}

export default LatestInternship