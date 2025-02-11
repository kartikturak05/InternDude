import React from 'react'
import FindYourJobs from "./FindYourJobs";
import LatestInternship from "./LatestInternship";
import LatestJob from "./LatestJob";
import TopCompaniesHiring from "./TopCompaniesHiring";
import FreelanceProject from './FreelanceProject';
import JobDescription from './JobDescription';

const Home = () => {
  return (
    <div className="flex flex-col justify-between mb-100">  
    {/* <JobDescription/> */}
    <FindYourJobs/>
    <LatestInternship/>
    <LatestJob/>
    <FreelanceProject/>
    <TopCompaniesHiring/>
  </div>
  )
}

export default Home