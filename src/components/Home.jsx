import React from 'react'
import FindYourJobs from "./FindYourJobs";
import LatestInternship from "./LatestInternship";
import LatestJob from "./LatestJob";
import TopCompaniesHiring from "./TopCompaniesHiring";

const Home = () => {
  return (
    <div className="flex flex-col justify-between mb-100">  
    <FindYourJobs/>
    <LatestInternship/>
    <LatestJob/>
    <TopCompaniesHiring/>
  </div>
  )
}

export default Home