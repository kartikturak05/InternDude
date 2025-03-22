import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { PiFacebookLogoDuotone } from "react-icons/pi";
import { PiYoutubeLogo } from "react-icons/pi";
import { useNavigate } from "react-router-dom"; // You need to import useNavigate here
import { LuMessagesSquare } from "react-icons/lu";

const Mob = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); // You need to import useNavigate here
  const menuItems = [
    { label: "Internship", href: "/Internships" },
    { label: "Jobs", href: "/Jobs" },
    { label: "Profile", href: "/CreateProfile" },
    { label: "Application", href: "/myapplications" },
    { label: "Post New Gig", href: "/PostNewGig" },
    { label: "Edit Resume", href: "/editresume" },
  ];

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigation = (hash) => {
    toggleDrawer(); // Close the drawer when a link is clicked
    if (window.location.pathname === "/") {
      // Scroll to the section if already on the HomePage
      const section = document.querySelector(hash);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Go to the HomePage first, then scroll to the section
      navigate("/"); // This takes you to the HomePage
      setTimeout(() => {
        const section = document.querySelector(hash);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 0);
    }
  };

  return (
    <div className="bg-gray-2000 text-black cursor-pointer fixed w-full z-20 flex items-center justify-between px-4 sm:px-6 md:px-8 h-14 sm:h-16">
    {/* Toggle Button */}
    <button className="z-[999] relative m-2 sm:m-3" onClick={toggleDrawer}>
      {isOpen ? <X size={24} /> : <Menu size={24} />}
    </button>
  
    {/* Logo section */}
    <div className="flex items-center">
      <img
        src="/Intern Dude.png"
        alt="InternDude Logo"
        className="h-6 w-20"
      />
    </div>
  
    {/* Messages Icon */}
    <div className="flex items-center">
      <LuMessagesSquare size={24} />
    </div>
  
    {/* Sidebar Menu */}
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.3 }}
          className="fixed left-0 top-0 w-3/4 sm:w-1/2 md:w-1/3 h-full bg-[#18181A] text-white p-6"
        >
          <button className="absolute top-4 right-4" onClick={toggleDrawer}>
            <X size={24} />
          </button>
  
          <div className="mt-10 space-y-4">
      {menuItems.map(({ label, href }) => (
        <div
          key={label}
          className="p-3 hover:bg-white/10 rounded-md cursor-pointer"
          onClick={() => { 
            toggleDrawer()
            navigate(href) }}
        >
          {label}
        </div>
      ))}
    </div>
  
          {/* Social Icons */}
          <div className="flex justify-around mt-6">
            {[FaInstagram, CiLinkedin, PiFacebookLogoDuotone, PiYoutubeLogo].map(
              (Icon, index) => (
                <a key={index} href="#" className="p-2">
                  <Icon size={25} />
                </a>
              )
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
  
  );
};

export default Mob;
