import { useState,useEffect } from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
// import SignUp from "./components/SignUp";
import SignUp from './pages/SignUp';
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import JobDescription from "./pages/JobDescription";
import PostNewGig from "./pages/PostNewGig";
import FindInternShip from "./pages/FindInternShip";
import FindJobs from "./pages/FindJobs";
import ProfilePage from "./pages/ProfilePage";
import CreateProfile from "./pages/CreateProfile";
import Apply from "./pages/Apply";
import Mob from "./components/Mob";
import MyApplication from "./pages/MyApplication";
import CreateResume from "./pages/CreateResume";
import EmployerHome from "./pages/EmployerHome";
import FreelanceProjectDescription from "./pages/FreelanceProjectDescription";
import PostOpportunity from "./pages/PostOpportunity";
import PostNewJob from "./pages/PostNewJob";
import PreviewJobPosted from "./pages/PreviewJobPosted";
import JobPostLive from "./pages/JobPostLive";
import PostNewInternship from "./pages/PostNewInternship";
import PreviewInternship from "./pages/PreviewInternship";
import PostFreelanceProject from "./pages/PostFreelanceProject";
import PreviewFreelancePosted from "./pages/PreviewFreelancePosted";
import ChatWithApplicants from "./pages/ChatWithApplicants";
import ApplicantProfile from "./pages/ApplicantsProfile";
import PaymentOptions from "./pages/PaymentOptions";
import PaymentSuccess from "./pages/PaymentSuccess";
import InterviewSchedule from "./pages/InternviewSchedule";
import InterviewScheduleSuccessful from "./pages/InterviewScheduleSuccessfull";
import MyBookmarks from "./pages/MyBookmarks";

function App() {
  const [showOptions, setShowOptions] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check screen width
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);  // 600px breakpoint for mobile
    };

    // Initial check on mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);  // Empty dependency array to run only once when the component mounts

  return (
    <>
      <div onClick={() => setShowOptions("")} className="relative">
      {isMobile ? <Mob /> :  <Navbar setShowOptions={setShowOptions} showOptions={showOptions} />}
       
        
        {/* Apply blur effect when showOptions is truthy */}
        <div className={`transition-all duration-300 ${showOptions ? "blur-xs pointer-events-none" : ""}`}>
          <Routes>
            <Route path="/" element={<Home setShowOptions={setShowOptions}/>} />
            {/* <Route path="/JobDescriptionn" element={<JobDescription/>} /> */}
            <Route path="/signup" element={<SignUp />} />
            <Route path="/InternshipDetails" element={<JobDescription />} />
            <Route path="/InternshipDetails" element={<JobDescription />} />
            <Route path="/PostNewGig" element={<PostNewGig />} />
            <Route path="/Internships" element={<FindInternShip />} />
            <Route path="/Jobs" element={<FindJobs />} />
            <Route path="/Profile" element={<ProfilePage />} />
            <Route path="/CreateProfile" element={<CreateProfile />} />
            <Route path="/Apply" element={<Apply/>} />
            <Route path="/myapplications" element={<MyApplication/>} />
            <Route path="/myapplications" element={<MyApplication/>} />
            <Route path="/editresume" element={<CreateResume/>} />
            <Route path="/MyBookmarks" element={<MyBookmarks/>} />


            <Route path="/employer" element={<EmployerHome/>} />
            <Route path="/employer/freelanceProject" element={<FreelanceProjectDescription/>} />
            <Route path="/employer/PostOpportunity" element={<PostOpportunity/>} />
            <Route path="/employer/PostOpportunity/PostNewJob" element={<PostNewJob/>} />
            <Route path="/employer/PostOpportunity/PreviewJobPosted" element={<PreviewJobPosted/>} />
            <Route path="/employer/PostOpportunity/PreviewJobPosted/success" element={<JobPostLive/>} />

            <Route path="/employer/PostOpportunity/PostNewInternship" element={<PostNewInternship/>} />
            <Route path="/employer/PostOpportunity/PreviewInternship" element={<PreviewInternship/>} />


            <Route path="/employer/PostOpportunity/PostNewFreelance" element={<PostFreelanceProject/>} />
            <Route path="/employer/PostOpportunity/PreviewFreelancePosted" element={<PreviewFreelancePosted/>} />
            <Route path="/employer/ChatWithApplicants" element={<ChatWithApplicants/>} />

            <Route path="/employer/ViewApplicantsProfile" element={<ApplicantProfile/>} />

            <Route path="/employer/Freelance/PaymentOptions" element={<PaymentOptions/>} />
            <Route path="/employer/Freelance/PaymentSuccess" element={<PaymentSuccess/>} />


            <Route path="/employer/InterviewSchedule" element={<InterviewSchedule/>} />
            <Route path="/employer/InterviewScheduleSuccessful" element={<InterviewScheduleSuccessful/>} />

          </Routes>
        </div>

        <ToastContainer />
      </div>
    </>
  );
}

export default App;
