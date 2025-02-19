import { create } from 'zustand';

const useStore = create((set) => ({
  location: 'All', // Initial location state
  updateLocation: (newLocation) => set({ location: newLocation }) // Function to update location
}));

export default useStore;
