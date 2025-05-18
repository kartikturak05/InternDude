import React, { useState } from 'react';
import { FaPhone, FaVideo, FaBuilding, FaCalendarAlt, FaClock, FaLink, FaInfoCircle } from 'react-icons/fa';

import { FaLessThan } from "react-icons/fa6";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

const InterviewSchedule = () => {
  const [selectedInterviewType, setSelectedInterviewType] = useState('video');
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [videoLink, setVideoLink] = useState('');
  const [instructions, setInstructions] = useState('');
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const navigate = useNavigate();

  // Generate days for the current month
  const generateCalendarDays = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();
    
    const days = [];

    const navigate = useNavigate();
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push({ day: '', disabled: true });
    }
    
    // Add days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      const currentDate = new Date(year, month, i);
      const isWeekend = currentDate.getDay() === 0 || currentDate.getDay() === 6;
      days.push({
        day: i,
        disabled: isWeekend || currentDate < new Date()
      });
    }
    
    return days;
  };

  // Go to previous month
  const previousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  // Go to next month
  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  // Format the month and year
  const formatMonthYear = () => {
    return currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  };

  // Available time slots
  const timeSlots = [
    "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
    "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
    "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM"
  ];

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      interviewType: selectedInterviewType,
      date: selectedDate,
      time: selectedTime,
      videoLink,
      instructions
    };
    console.log('Interview scheduled:', formData);

    navigate("/employer/InterviewScheduleSuccessful")
  };

  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <>
    <div className="max-w-7xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
      <h1 className="text-3xl font-bold mb-2">Schedule Interview</h1>
      <p className="text-gray-600 mb-6">Invite candidates for an interview by choosing preferred mode, date, and time.</p>
      
      {/* Candidate Info */}
      <div className="bg-gray-50 p-4 rounded-lg mb-6">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-semibold">Sarah Anderson</h2>
            <p className="text-gray-600">Stanford University • 4 years experience</p>
            <p className="text-gray-700 mt-1">Applied for: Senior Product Designer</p>
            <p className="text-gray-500 text-md">Application Date: Jan 15, 2024</p>
          </div>
          <button className="text-blue-600 flex items-center text-sm px-3 py-2 border border-blue-600 rounded-md cursor-pointer">
            View Full Profile
          </button>
        </div>
      </div>
      
      <form onSubmit={handleSubmit}>
        {/* Interview Type */}
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-3">Select Interview Type</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button
              type="button"
              className={`cursor-pointer p-4 border rounded-lg flex flex-col items-center justify-center h-24 transition ${selectedInterviewType === 'phone' ? 'border-blue-600 bg-blue-50' : 'border-gray-300'}`}
              onClick={() => setSelectedInterviewType('phone')}
            >
              <FaPhone className="text-2xl mb-2 text-blue-600" />
              <span>Phone Interview</span>
            </button>
            
            <button
              type="button"
              className={`cursor-pointer p-4 border rounded-lg flex flex-col items-center justify-center h-24 transition ${selectedInterviewType === 'video' ? 'border-blue-600 bg-blue-50' : 'border-gray-300'}`}
              onClick={() => setSelectedInterviewType('video')}
            >
              <FaVideo className="text-2xl mb-2 text-blue-600" />
              <span>Video Call</span>
            </button>
            
            <button
              type="button"
              className={`cursor-pointer p-4 border rounded-lg flex flex-col items-center justify-center h-24 transition ${selectedInterviewType === 'inperson' ? 'border-blue-600 bg-blue-50' : 'border-gray-300'}`}
              onClick={() => setSelectedInterviewType('inperson')}
            >
              <FaBuilding className="text-2xl mb-2 text-blue-600" />
              <span>In-person</span>
            </button>
          </div>
        </div>
        
        {/* Date and Time Selection */}
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-3">Pick Date & Time</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Calendar */}
            <div className="border rounded-lg p-4">
              <div className="flex justify-between items-center mb-4">
                <button type="button" onClick={previousMonth} className="text-gray-600 p-1 cursor-pointer">
                <FaLessThan size={20}/>
                </button>
                <h4 className="font-medium">{formatMonthYear()}</h4>
                <button type="button" onClick={nextMonth} className="text-gray-600 p-1 cursor-pointer">
                <MdOutlineArrowForwardIos size={25}/>
                </button>
              </div>
              
              <div className="grid grid-cols-7 gap-1">
                {weekDays.map((day, index) => (
                  <div key={index} className="text-center text-sm font-medium py-1 cursor-pointer">
                    {day}
                  </div>
                ))}
                
                {generateCalendarDays().map((day, index) => (
                  <button
                    key={index}
                    type="button"
                    disabled={day.disabled}
                    className={`
                      h-10 w-full rounded-full flex items-center justify-center cursor-pointer
                      ${day.disabled ? 'text-gray-300' : 'hover:bg-gray-100'} 
                      ${selectedDate === `${currentMonth.getFullYear()}-${currentMonth.getMonth() + 1}-${day.day}` ? 'bg-blue-600 text-white hover:bg-blue-700' : ''}
                    `}
                    onClick={() => day.day && setSelectedDate(`${currentMonth.getFullYear()}-${currentMonth.getMonth() + 1}-${day.day}`)}
                  >
                    {day.day}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Time Slots */}
            <div className="border rounded-lg p-4 max-h-72 overflow-y-auto">
              <div className="grid grid-cols-1 gap-2">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    type="button"
                    className={`cursor-pointer p-3 border rounded-lg text-left transition ${selectedTime === time ? 'border-blue-600 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}`}
                    onClick={() => setSelectedTime(time)}
                  >
                    <div className="flex items-center">
                      <FaClock className="text-blue-600 mr-2" />
                      {time}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Video Link - Only show for video interviews */}
        {selectedInterviewType === 'video' && (
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-3">Interview Link</h3>
            <div className="flex items-center border rounded-lg p-2">
              <FaLink className="text-gray-400 ml-2 mr-2" />
              <input
                type="text"
                placeholder="Add video call link (Zoom, Google Meet, etc.)"
                className="w-full p-2 outline-none"
                value={videoLink}
                onChange={(e) => setVideoLink(e.target.value)}
              />
            </div>
          </div>
        )}
        
        {/* Additional Instructions */}
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-3">Additional Instructions</h3>
          <textarea
            placeholder="Any instructions for the candidate? (e.g. Bring portfolio, join 5 mins early)"
            className="w-full border rounded-lg p-4 h-32"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
          ></textarea>
        </div>
        
        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 cursor-pointer"
            disabled={!selectedDate || !selectedTime}
          >
            Schedule Interview
          </button>
        </div>
      </form>
    </div>
    <Footer/>
    </>
  );
};

export default InterviewSchedule;