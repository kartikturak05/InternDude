import React, { useState } from 'react'
import FindYourJobs from "../components/FindYourJobs";
import LatestInternship from '../components/LatestInternship';
import LatestJob from "../components/LatestJob";
import TopCompaniesHiring from "../components/TopCompaniesHiring";
import FreelanceProject from '../components/FreelanceProject';
import JobDescription from './JobDescription';
import BoostYourChances from '../components/BoostYourChances';
import SuccessStories from '../components/SuccessStories';
import ReviewsAndRatings from '../components/ReviewsAndRatings';
import JobNotification from '../components/JobNotification';
import Footer from '../components/Footer';

const Home = ({setShowOptions}) => {
  const [showJobDescription, setShowJobDescription] = useState(false);
  return (
    <div className="flex flex-col justify-between relative">  

    {showJobDescription && <JobDescription setShowJobDescription={setShowJobDescription} setShowOptions={setShowOptions}/>}
    {/* <JobDescription/> */}
    <FindYourJobs />
    <LatestInternship setShowJobDescription={setShowJobDescription} setShowOptions={setShowOptions}/>
    <LatestJob setShowJobDescription={setShowJobDescription} setShowOptions={setShowOptions}/>
    <FreelanceProject setShowJobDescription={setShowJobDescription} setShowOptions={setShowOptions}/>
    <TopCompaniesHiring />
    <BoostYourChances />
    <SuccessStories/>
    <ReviewsAndRatings/>
    <JobNotification/>
    <Footer/>
  </div>
  )
}

export default Home