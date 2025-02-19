import React, { useEffect, useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { CiMoneyCheck1 } from "react-icons/ci";
import { MdCurrencyRupee } from "react-icons/md";
import { CiCalendar } from "react-icons/ci";
import { MdVerified } from "react-icons/md";
import { span } from "framer-motion/client";
import JobDescription from "./JobDescription";
import { useNavigate } from "react-router-dom";

const JobCard = ({ title, Post, company, location, stipend, duration,paymentVerified,setShowJobDescription,setShowOptions}) => {

  const [blur,setBlur]= useState("");
  const navigate = useNavigate();

  useEffect(()=>{
    if(blur){
      // setShowOptions("blur");
    }
  },[blur])
  return (
    <div>
      <div className="flex flex-col gap-3 border border-gray-300 rounded-2xl p-5 shadow-md bg-white transition-all hover:shadow-lg w-[300px] cursor-pointer" onClick={()=>  {
            // navigate("/InternshipDetails");
            // setBlur("blur");
            // setShowOptions("blur");
            // setShowJobDescription(true);]
            navigate("/InternshipDetails");
          }}>
        {/* Title */}
        <div className="bg-gray-200 text-gray-700 text-sm font-medium w-fit px-3 py-1 rounded-lg">
          {title}
        </div>

        {/* Position Name */}
        <div className="text-gray-900 text-lg font-semibold">{Post}</div>

        {/* Company Name */}
        <div className="text-gray-600 text-sm">{company}</div>

        <div className="w-full h-[1px] bg-gray-300"></div>

        {/* Payment Verified */}
        <div className="flex items-center text-gray-700 text-sm">
          {paymentVerified ? (
            <div className="bg-green-500 text-white px-2 py-1 rounded-lg mr-2 flex flex-row items-center">
              <div className="mr-2"><MdVerified/></div> <div>Payment Verified</div> 
            </div>
          ) : (
           <span></span>
          )}
        </div> 

        {/* Location */}
        <div className="flex items-center text-gray-700 text-sm">
          <CiLocationOn className="mr-2" size={20} />
          {location}
        </div>

        {/* Stipend */}
        <div className="flex items-center text-gray-700 text-sm">
          <CiMoneyCheck1 className="mr-1" size={20} />
          <MdCurrencyRupee  className="mr-1" size={15} />
          {stipend}
        </div>

        {/* Duration */}
        <div className="flex items-center text-gray-700 text-sm">
          <CiCalendar className="mr-2" size={20} />
          {duration}
        </div>

        <div className="w-full items-center justify-center flex">
          <div className="bg-blue-900 text-white font-bold text-lg rounded-lg pl-4 pr-4 pt-1 pb-1 cursor-pointer" >
            Apply
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
