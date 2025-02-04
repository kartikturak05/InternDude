import { useState } from "react";
import Navbar from "./components/Navbar";
import FindYourJobs from "./components/FindYourJobs";
import LatestInternship from "./components/LatestInternship";
<link href="/dist/styles.css" rel="stylesheet"></link>;

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex flex-col justify-between mb-100">
        <Navbar/>
        <FindYourJobs/>
        <LatestInternship/>
      </div>
    </>
  );
}

export default App;
