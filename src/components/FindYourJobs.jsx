import React from "react";
import SearchBar from "./SearchBar";

const FindYourJobs = () => {
  return (
    <div className=" pt-12 pb-10    ">
      <div className="flex flex-col items-center justify-center h-[180px] ">
        <div className="flex flex-col items-center justify-between">
          <div className="text-4xl font-bold">Find your dream job now</div>
          <div className="text-xl text-center pb-10 font-semibold">
            5 lakh+ jobs for you to explore
          </div>
          <div>
            <SearchBar/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindYourJobs;
