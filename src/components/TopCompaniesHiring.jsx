import React from "react";
import { motion } from "framer-motion";
import CompaniesCard from "./CompaniesCard";

const companies = [
  { name: "MNCs", hiring: "597" },
  { name: "Fortune 500", hiring: "115" },
  { name: "Unicorns", hiring: "44" },
  { name: "Startups", hiring: "139" },
  { name: "B2C", hiring: "683" },
  { name: "B2B", hiring: "432" },
];

const TopCompaniesHiring = () => {
  return (
    <div className="mt-20 flex flex-col justify-center items-center overflow-hidden">
      <div className="text-3xl font-bold">Top Companies Hiring Now</div>

      <div className="relative flex items-center mt-10 overflow-hidden max-w-6xl">
        {/* Sliding Animation */}
        <motion.div
          className="flex gap-5"
          initial={{ x: "0%" }}
          animate={{ x: ["0%", "-50%"] }} // Moves left infinitely
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            duration: 15, // Speed of animation
          }}
        >
          {/* Duplicate Cards for Infinite Scrolling Effect */}
          {[...companies, ...companies].map((company, index) => (
            <CompaniesCard key={index} name={company.name} hiring={company.hiring} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TopCompaniesHiring;
