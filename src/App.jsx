import { useState } from "react";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import JobDescription from "./components/JobDescription";
import PostNewGig from "./components/PostNewGig";

function App() {
  const [showOptions, setShowOptions] = useState("");
  return (
    <>
      <div onClick={() => setShowOptions("")} className="relative">
        <Navbar setShowOptions={setShowOptions} showOptions={showOptions} />
        
        {/* Apply blur effect when showOptions is truthy */}
        <div className={`transition-all duration-300 ${showOptions ? "blur-xs pointer-events-none" : ""}`}>
          <Routes>
            <Route path="/" element={<Home setShowOptions={setShowOptions}/>} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/InternshipDetails" element={<JobDescription />} />
            <Route path="/InternshipDetails" element={<JobDescription />} />
            <Route path="/PostNewGig" element={<PostNewGig />} />
          </Routes>
        </div>

        <ToastContainer />
      </div>
    </>
  );
}

export default App;
