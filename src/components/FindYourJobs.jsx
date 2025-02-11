import React from "react";
import SearchBar from "./SearchBar";

const FindYourJobs = () => {
  return (
    <div className=" pt-12 mb-30">
      <div className="flex flex-col items-center justify-center h-[440px] ">
        <div className="flex flex-row items-center justify-between">
          <div className="">
            <div className="text-4xl font-bold mb-10 mr-40">
              <img src="Title.png" alt="" />
            </div>
            <div className="w-[700px]">
            <SearchBar />
            </div>
          </div>
          <div className="w-auto h-auto mt-7">
            <img src="personmodel.png" alt="" className="w-[208px] h-[359px]"/>
          </div>
        </div>
        <div className="flex flex-col items-start justify-between w-auto bg-gray-200 pt-5 pl-30 pr-30 pb-5 mt-10">
            <div className="mr-10 text-xl font-medium mb-5">  
                Companies we helped grow
            </div>
            <div className="flex flex-row items-center justify-betwee">
                <div className="w-auto h-auto"><img src="/companies/vodafone.png" alt="" /></div>
                <div className="w-auto h-auto ml-10"><img src="/companies/intel.png" alt="" /></div>
                <div className="w-auto h-auto ml-10"><img src="/companies/TESLA.png" alt="" /></div>
                <div className="w-auto h-auto ml-10"><img src="/companies/amd.png" alt="" /></div>
                <div className="w-auto h-auto ml-10"><img src="/companies/talktit.png" alt="" /></div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default FindYourJobs;
