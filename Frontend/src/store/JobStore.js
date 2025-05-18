import { create } from 'zustand';

const JobStore = create((set) => ({
  location: 'All', // Initial location state
  designations: "All", // Initial designations state
  updateDesignations: (newDesignations) => set({ designations: newDesignations }), // Function to update designations
  updateLocation: (newLocation) => set({ location: newLocation }) // Function to update location
}));

export default JobStore;
