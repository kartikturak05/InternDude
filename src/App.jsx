import { useState,useEffect } from "react";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import JobDescription from "./components/JobDescription";
import PostNewGig from "./components/PostNewGig";
import FindInternShip from "./components/FindInternShip";
import FindJobs from "./components/FindJobs";
import ProfilePage from "./components/ProfilePage";
import CreateProfile from "./components/CreateProfile";
import Apply from "./components/Apply";
import Mob from "./components/Mob";

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
          </Routes>
        </div>

        <ToastContainer />
      </div>
    </>
  );
}

export default App;
