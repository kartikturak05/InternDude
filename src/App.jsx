import { useState } from "react";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp";
import Navbar from "./components/Navbar";
<link href="/dist/styles.css" rel="stylesheet"></link>;

function App() {
  const [showOptions, setShowOptions] = useState("");

  return (
    <>
    <div onClick={() => setShowOptions("")}>
    <Navbar setShowOptions={setShowOptions} showOptions={showOptions}/>
    <Routes className="relative">
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
    
    </>
  );
}

export default App;
