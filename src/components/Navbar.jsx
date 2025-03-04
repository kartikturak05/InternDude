import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import SetPreference from "./SetPreference";
import { auth } from "./firebase";
import { toast } from "react-toastify";
import { FaAngleDown } from "react-icons/fa6";

const Navbar = ({ setShowOptions, showOptions }) => {
  const [Internship, setInternship] = useState(false);
  const [Jobs, setJobs] = useState(false);
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState(null);

  const [selected, setSelected] = useState("");
  const [selectedOpt, setSelectedOpt] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const options = [
    "Profile",
    "My Applications",
    "Post New Gig",
    "Edit Resume",
    "Help Center",
    "More",
  ];

  useEffect(() => {
    setSelected(userDetails?.displayName);
  }, [userDetails]);

  // to change the navbar options
  useEffect(() => {
    if (Internship) {
      setShowOptions("Internship");
    } else if (Jobs) {
      setShowOptions("Jobs");
    }
  }, [Internship, Jobs]);

  //  To redirect to the selected options page
  useEffect(() => {
    if (selectedOpt === "Profile") {
      navigate("/profile");
    } else if (selectedOpt === "My Applications") {
      navigate("/myapplications");
    } else if (selectedOpt === "Post New Gig") {
      navigate("/PostNewGig");
    } else if (selectedOpt === "Edit Resume") {
      navigate("/editresume");
    } else if (selectedOpt === "Help Center") {
      navigate("/helpcenter");
    } else if (selectedOpt === "More") {
      navigate("/more");
    }
  }, [selectedOpt]);
  // to check if user is already login or not
  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      console.log(user);
      setUserDetails(user);
    });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div className="">
      <div className="w-full bg-white shadow-md">
        <div className="container mx-auto flex justify-between  items-center pt-4 pl-35 pr-35 pb-2">
          <div className="flex justify-between items-center">
            <img
              src="Logo.png"
              className="w-full h-14 text-lg text-gray-900 font-normal cursor-pointer hover:text-gray-700  mr-5"
              onClick={() => navigate("/")}
            />
            <div
              className={`text-base flex items-center text-gray-900 font-normal pt-2 pb-2 pl-5 pr-5 rounded-xl cursor-pointer hover:text-gray-700 hover:font-semibold ${
                showOptions === "Internship" ? "bg-gray-300 text-blue-800" : ""
              }`}
              onClick={()=> navigate("/Internships")}
              onMouseEnter={() => {
                setShowOptions("Internship");
                setJobs(false);
                setInternship(!Internship);
              }}
            >
              Internship <IoIosArrowDown size={20} />
            </div>
            <div
              className={`text-base flex items-center text-gray-900 font-normal pt-2 pb-2 pl-5 pr-5 rounded-xl cursor-pointer hover:text-gray-700 hover:font-semibold ${
                showOptions === "Jobs" ? "bg-gray-300 text-blue-800" : ""
              }`}
              onMouseEnter={() => {
                setShowOptions("Jobs");
                setInternship(false);
                setJobs(!Jobs);
              }}
            >
              Jobs <IoIosArrowDown size={20} />
            </div>
            {/* <div className="text-base text-gray-900 font-normal pt-2 pb-2 pl-5 pr-5 cursor-pointer hover:text-gray-700 hover:font-semibold">
              Courses
            </div> */}
          </div>
          <div className="flex items-center justify-between">
            <div className=" pl-2 pr-2 pt-1 pb-1 border-1 text-center border-[#1F509A] rounded-sm  text-[#1F509A] mr-5 text-base font-bold cursor-pointer hover:text-gray-700 ">
              Contact Us
            </div>
            {userDetails ? (
              <>
                <div
                  className="pl-8 pr-8 pt-1 pb-1 bg-blue-800 text-white font-bold rounded-sm text-base cursor-pointer"
                  onClick={() => {
                    auth.signOut();
                    toast.success("User logged out successfully");
                  }}
                >
                  log Out
                </div>

                <div className="relative w-48">
                  {/* Selected option (acts like select box) */}
                  <div
                    className="bg-transparent text-gray-700 font-semibold py-2 pl-5 pr-8 cursor-pointer hover:text-gray-700  border-gray-300 rounded-md w-full flex justify-center items-center "
                    onMouseEnter={() => {
                      setIsOpen(!isOpen);
                    }}
                  >
                    {selected}
                    <span className="text-gray-500 pl-2">
                      <FaAngleDown />
                    </span>
                  </div>

                  {/* Dropdown menu */}
                  {isOpen && (
                    <div className="absolute w-full bg-white shadow-lg rounded-md mt-1 z-10 font-semibold text-gray-400 ">
                      {options.map((option, index) => (
                        <div
                          key={index}
                          className="px-5 py-2 cursor-pointer hover:bg-gray-100 text-gray-600"
                          onClick={() => {
                            setSelectedOpt(option);
                            setIsOpen(false);
                          }}
                        >
                          {option}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </>
            ) : (
              <div
                className="pl-8 pr-8 pt-1 pb-1 bg-blue-800 text-white font-bold rounded-sm text-base cursor-pointer"
                onClick={() => navigate("/signup")}
              >
                Sign Up
              </div>
            )}
          </div>
        </div>
      </div>
      {console.log(showOptions)}
      {showOptions === "Internship" && (
        <SetPreference ShowOptions={showOptions} />
      )}
      {showOptions === "Jobs" && <SetPreference />}
    </div>
  );
};

export default Navbar;
