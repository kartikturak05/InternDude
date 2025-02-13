import React, { useState } from 'react'
import FindYourJobs from "./FindYourJobs";
import LatestInternship from "./LatestInternship";
import LatestJob from "./LatestJob";
import TopCompaniesHiring from "./TopCompaniesHiring";
import FreelanceProject from './FreelanceProject';
import JobDescription from './JobDescription';

const Home = ({setShowOptions}) => {
  const [showJobDescription, setShowJobDescription] = useState(false);
  return (
    <div className="flex flex-col justify-between mb-100 relative">  

    {showJobDescription && <JobDescription setShowJobDescription={setShowJobDescription} setShowOptions={setShowOptions}/>}
    {/* <JobDescription/> */}
    <FindYourJobs />
    <LatestInternship setShowJobDescription={setShowJobDescription} setShowOptions={setShowOptions}/>
    <LatestJob setShowJobDescription={setShowJobDescription} setShowOptions={setShowOptions}/>
    <FreelanceProject setShowJobDescription={setShowJobDescription} setShowOptions={setShowOptions}/>
    <TopCompaniesHiring />
  </div>
  )
}

export default Home