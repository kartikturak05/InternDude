import React, { useEffect, useState } from "react";
import InternshipStore from "../store/InternshipStore";
import JobStore from "../store/JobStore";
import { s } from "framer-motion/client";

const locations = [
  "Work from home",
  "Banglore",
  "Delhi",
  "Pune",
  "Hyderabad",
  "Chennai",
];

const Profiles = [
  "Web Developer",
  "Frontend Developer",
  "Backend Developer",
  "React Developer",
  "Full Stack Developer",
  "Software Engineer",
];

const Categories = [
  "Web Development",
  "App Development",
  "Software Development",
  "Data Science",
  "Machine Learning",
  "AI",
];

const exploreInternships = [
  "Internships By Categories",
  "Internships By Location",
  "View All Internship",
];

const freelanceProjectsList = ["Projects By categories", "View All Projects"];

const PlacementGuarantee = [
  "Join Premium",
  "Placement Guarantee",
  "Resume Builder",
];

const ShowPreference = ({ choices, onSelect }) => {
  return (
    <div className="flex flex-col pt-4">
      <div>
        {choices.map((choice) => (
          <div
            key={choice}
            className="pt-2 pb-4 pl-3 text-gray-600 font-normal cursor-pointer text-sm hover:text-gray-900 hover:font-semibold"
            onClick={() => onSelect(choice)}
          >
            {choice}
          </div>
        ))}
      </div>
    </div>
  );
};

const SetPreference = ({ ShowOptions }) => {
  const { updateLocation: updateInternshipLocation, updateDesignations: updateInternshipDesignations } =
    InternshipStore();
  const { updateLocation: updateJobLocation, updateDesignations: updateJobDesignations } = JobStore();

  const [topLocation, setTopLocation] = useState(true);
  const [profile, setProfile] = useState(false);
  const [topCategories, setTopCategories] = useState(false);
  const [exploreMoreInternships, setExploreMoreInternships] = useState(false);
  const [freelanceProjects, setFreelanceProjects] = useState(false);
  const [placementGuarantee, setPlacementGuarantee] = useState(false);

  useEffect(() => {
    console.log("Nav bar data");
    console.log(
      topLocation,
      profile,
      topCategories,
      exploreMoreInternships,
      freelanceProjects,
      placementGuarantee,
    );
  }, [
    topLocation,
    profile,
    topCategories,
    exploreMoreInternships,
    freelanceProjects,
    placementGuarantee,
  ]);

  useEffect(() => {
    console.log(ShowOptions);
  },[ShowOptions])

  const updateLocation = (location) => {
    if (ShowOptions === "Internship") {
      updateInternshipLocation(location);
    } else {
      updateJobLocation(location);
    }
  };

  const updateDesignations = (designation) => {

    if (ShowOptions === "Internship") {
      updateInternshipDesignations(designation);
    } else {
      updateJobDesignations(designation);
    }
  };

  return (
    <div>
      <div className="flex bg-white w-md absolute topt-2 pb-4 left-80 right-0 text-black border-1 border-gray-300 rounded-xl transform z-50">
        {/* Preferences Section */}
        <div className="flex pt-5 pb-40 text-black border-r-1 border-gray-600 w-[55%]">
          <div className="flex flex-col w-full">
            <div
              className={`pt-2 pb-4 pl-3 w-full text-black font-semibold text-lg cursor-pointer ${
                topLocation ? "bg-gray-300 text-blue-800" : ""
              }`}
              onMouseEnter={() => {
                setProfile(false);
                setTopCategories(false);
                setExploreMoreInternships(false);
                setFreelanceProjects(false);
                setPlacementGuarantee(false);
                setTopLocation(true);
              }}
            >
              Top Location
            </div>
            <div
              className={`pt-2 pb-4 pl-3 w-full text-black font-semibold text-lg cursor-pointer ${
                profile ? "bg-gray-300 text-blue-800" : ""
              }`}
              onMouseEnter={() => {
                setProfile(true);
                setTopCategories(false);
                setExploreMoreInternships(false);
                setFreelanceProjects(false);
                setPlacementGuarantee(false);
                setTopLocation(false);
              }}
            >
              Profile
            </div>
            <div
              className={`pt-2 pb-4 pl-3 w-full text-black font-semibold text-lg cursor-pointer ${
                topCategories ? "bg-gray-300 text-blue-800" : ""
              }`}
              onMouseEnter={() => {
                setProfile(false);
                setTopCategories(true);
                setExploreMoreInternships(false);
                setFreelanceProjects(false);
                setPlacementGuarantee(false);
                setTopLocation(false);
              }}
            >
              Top Categories
            </div>
            <div
              className={`pt-2 pb-4 pl-3 w-full text-black font-semibold text-lg cursor-pointer ${
                exploreMoreInternships ? "bg-gray-300 text-blue-800" : ""
              }`}
              onMouseEnter={() => {
                setProfile(false);
                setTopCategories(false);
                setExploreMoreInternships(true);
                setFreelanceProjects(false);
                setPlacementGuarantee(false);
                setTopLocation(false);
              }}
            >
              Explore More Internships
            </div>
            <div
              className={`pt-2 pb-4 pl-3 w-full text-black font-semibold text-lg cursor-pointer ${
                freelanceProjects ? "bg-gray-300 text-blue-800" : ""
              }`}
              onMouseEnter={() => {
                setProfile(false);
                setTopCategories(false);
                setExploreMoreInternships(false);
                setFreelanceProjects(true);
                setPlacementGuarantee(false);
                setTopLocation(false);
              }}
            >
              Freelance Projects
            </div>
            <div
              className={`pt-2 pb-4 pl-3 w-full text-black font-semibold text-lg cursor-pointer ${
                placementGuarantee ? "bg-gray-300 text-blue-800" : ""
              }`}
              onMouseEnter={() => {
                setProfile(false);
                setTopCategories(false);
                setExploreMoreInternships(false);
                setFreelanceProjects(false);
                setPlacementGuarantee(true);
                setTopLocation(false);
              }}
            >
              Placement Guarantee
            </div>
          </div>
        </div>

        <div className="flex bg-transparent w-[45%]">
          {topLocation && <ShowPreference choices={locations} onSelect={updateLocation} />}
          {profile && <ShowPreference choices={Profiles} onSelect={updateDesignations} />}
          {topCategories && <ShowPreference choices={Categories} />}
          {exploreMoreInternships && <ShowPreference choices={exploreInternships} />}
          {freelanceProjects && <ShowPreference choices={freelanceProjectsList} />}
          {placementGuarantee && <ShowPreference choices={PlacementGuarantee} />}
        </div>
      </div>
    </div>
  );
};

export default SetPreference;
