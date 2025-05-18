import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10 px-5">
      <div className="container mx-auto flex flex-wrap justify-around items-start gap-10">
        {/* Quick Links */}
        <div className="flex flex-col space-y-2">
          <h2 className="font-semibold text-lg">Quick Links</h2>
          <a href="#">Jobs</a>
          <a href="#">Internship</a>
          <a href="#">Employers</a>
          <a href="#">Blog</a>
          <a href="#">FAQs</a>
        </div>

        {/* For Employers */}
        <div className="flex flex-col space-y-2">
          <h2 className="font-semibold text-lg">For Employers</h2>
          <a href="#">Post A Job</a>
          <a href="#">Pricing</a>
          <a href="#">Success Stories</a>
          <a href="#">Resources</a>
        </div>

        {/* Company */}
        <div className="flex flex-col space-y-2">
          <h2 className="font-semibold text-lg">Company</h2>
          <a href="#">About Us</a>
          <a href="#">Contact</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms</a>
        </div>

        {/* Follow Us */}
        <div className="flex flex-col space-y-2">
          <h2 className="font-semibold text-lg">Follow Us</h2>
          <a href="#" className="flex items-center space-x-2">
            <FaLinkedin />
            <span>LinkedIn</span>
          </a>
          <a href="#" className="flex items-center space-x-2">
          <FaInstagram />
            <span>Instagram</span>
          </a>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center mt-10  pt-4">
        <p>© 2025 InternDude. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
