import { useState } from "react";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp";
import Navbar from "./components/Navbar";
<link href="/dist/styles.css" rel="stylesheet"></link>;

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
