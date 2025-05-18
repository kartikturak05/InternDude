import React, { useState } from 'react';
import { 
  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, 
  Tooltip, ResponsiveContainer, PieChart, Pie, Cell
} from 'recharts';
import { 
  FaEye, FaUserPlus, FaCheckCircle, FaUser, 
  FaLightbulb, FaDownload, FaMobile, FaDesktop, FaTablet
} from 'react-icons/fa';
import { IoMdArrowDropup } from 'react-icons/io';
import Footer from '../components/Footer';

const AnalyticsDashboard = () => {
  const [timeFrame, setTimeFrame] = useState('Last 7 days');
  
  // Sample data for charts
  const applicationsOverTime = [
    { day: 'Jan 1', applications: 25 },
    { day: 'Jan 2', applications: 35 },
    { day: 'Jan 3', applications: 30 },
    { day: 'Jan 4', applications: 45 },
    { day: 'Jan 5', applications: 40 },
    { day: 'Jan 6', applications: 50 },
    { day: 'Jan 7', applications: 55 },
  ];
  
  const viewsVsApplications = [
    { name: 'UI/UX Intern', views: 900, applications: 55 },
    { name: 'React Dev', views: 1100, applications: 80 },
    { name: 'Logo Design', views: 420, applications: 18 },
  ];
  
  const listingsPerformance = [
    { title: 'UI/UX Intern', views: 900, applications: 55, hires: 2, conversion: '6.1%' },
    { title: 'React Dev Job', views: 1100, applications: 80, hires: 4, conversion: '7.2%' },
    { title: 'Logo Design Gig', views: 420, applications: 18, hires: 1, conversion: '4.3%' },
  ];
  
  const applicationFunnel = [
    { stage: 'Viewed', count: 1000 },
    { stage: 'Applied', count: 120 },
    { stage: 'Interviewed', count: 15 },
    { stage: 'Hired', count: 4 },
  ];
  
  const deviceData = [
    { name: 'Mobile', value: 65 },
    { name: 'Desktop', value: 25 },
    { name: 'Tablet', value: 10 },
  ];
  
  const topLocations = [
    { city: 'Delhi', percentage: 55 },
    { city: 'Bangalore', percentage: 18 },
    { city: 'Mumbai', percentage: 10 },
  ];
  
  const COLORS = ['#2563EB', '#93C5FD', '#BFDBFE'];
  
  return (
    <>
    <div className="bg-white p-6 min-h-screen">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-4xl  text-gray-800">Analytics Dashboard</h1>
          <p className="text-gray-600 text-xl mt-2">Get real-time insights into your job and internship postings</p>
        </div>
        <div className="relative">
          <select 
            className="bg-white border border-gray-300 rounded-md px-4 py-2 pr-8 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 font-semibold"
            value={timeFrame}
            onChange={(e) => setTimeFrame(e.target.value)}
          >
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 3 months</option>
            <option>Last year</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
            </svg>
          </div>
        </div>
      </div>
      
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center mb-2">
            <FaEye className="text-blue-800 mr-2" size={30}/>
            <h2 className="text-gray-600 font-medium text-md">Total Views</h2>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-3xl font-bold">5,720</p>
            <div className="flex items-center text-green-500">
              <IoMdArrowDropup className="text-xl" />
              <span className="text-md">+12.5%</span>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center mb-2">
            <FaUserPlus className="text-blue-800 mr-2" size={30}/>
            <h2 className="text-gray-600 font-medium">Applications</h2>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-3xl font-bold">212</p>
            <div className="flex items-center text-green-500">
              <IoMdArrowDropup className="text-xl" />
              <span className="text-md">+8.3%</span>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center mb-2">
            <FaCheckCircle className="text-blue-800 mr-2" size={30}/>
            <h2 className="text-gray-600 font-medium">Hires Made</h2>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-3xl font-bold">12</p>
            <div className="flex items-center text-green-500">
              <IoMdArrowDropup className="text-xl" />
              <span className="text-md">+15.2%</span>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center mb-2">
            <FaUser className="text-blue-800 mr-2" size={30}/>
            <h2 className="text-gray-600 font-medium">Profile Visits</h2>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-3xl font-bold">1,148</p>
            <div className="flex items-center text-green-500">
              <IoMdArrowDropup className="text-xl" />
              <span className="text-md">+5.7%</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Applications Over Time</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={applicationsOverTime} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <CartesianGrid stroke="#f5f5f5" strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="applications" stroke="#2563EB" activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Views vs Applications</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={viewsVsApplications} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="views" fill="#2563EB" />
                <Bar dataKey="applications" fill="#4ADE80" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      
      {/* Listings Performance Table */}
      <div className="bg-white p-6 rounded-lg shadow mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Listings Performance</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-md font-medium text-gray-500 uppercase tracking-wider">
                  Post Title
                </th>
                <th scope="col" className="px-6 py-3 text-left text-md font-medium text-gray-500 uppercase tracking-wider">
                  Views
                </th>
                <th scope="col" className="px-6 py-3 text-left text-md font-medium text-gray-500 uppercase tracking-wider">
                  Applications
                </th>
                <th scope="col" className="px-6 py-3 text-left text-md font-medium text-gray-500 uppercase tracking-wider">
                  Hires
                </th>
                <th scope="col" className="px-6 py-3 text-left text-md font-medium text-gray-500 uppercase tracking-wider">
                  Conversion Rate
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {listingsPerformance.map((listing, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-md font-medium text-gray-900">
                    {listing.title}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-md text-gray-500">
                    {listing.views}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-md text-gray-500">
                    {listing.applications}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-md text-gray-500">
                    {listing.hires}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-md text-gray-500">
                    {listing.conversion}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Application Funnel */}
      <div className="bg-white p-6 rounded-lg shadow mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Application Funnel</h2>
        <div className="grid grid-cols-4 gap-4">
          {applicationFunnel.map((stage, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="text-2xl font-bold text-blue-700">{stage.count}</div>
              <div className="text-sm text-gray-500">{stage.stage}</div>
              {index < applicationFunnel.length - 1 && (
                <div className="w-full h-1 bg-blue-200 mt-2" />
              )}
            </div>
          ))}
        </div>
      </div>
      
      {/* Device Breakdown and Top Locations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Device Breakdown</h2>
          <div className="h-64 flex justify-center items-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={deviceData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  fill="#8884d8"
                  paddingAngle={2}
                  dataKey="value"
                  label
                >
                  {deviceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Top Locations</h2>
          <div className="space-y-4">
            {topLocations.map((location, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span className="text-md font-medium text-gray-700">{location.city}</span>
                  <span className="text-md font-medium text-gray-700">{location.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full" 
                    style={{ width: `${location.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Suggestions */}
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8 rounded-lg">
        <div className="flex">
          <div className="flex-shrink-0">
            <FaLightbulb className="h-5 w-5 text-blue-600" size={30}/>
          </div>
          <div className="ml-3">
            <h3 className="text-md font-medium text-blue-800">Suggestions to Improve Performance</h3>
            <div className="mt-2 text-md text-blue-700">
              <p>Your internship posting hasn't received any applications in 5 days. Try updating the title or increasing stipend to attract more candidates.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Export Button */}
      <div className="flex items-center justify-between">
        <button className="flex items-center bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition-colors">
          <FaDownload className="mr-2" />
          Export Analytics Report
        </button>
        
        <div className="flex items-center">
          <input type="checkbox" id="email-reports" className="mr-2" />
          <label htmlFor="email-reports" className="text-md text-gray-600">Email me monthly reports</label>
        </div>
      </div>
    </div>
    </>
  );
};

export default AnalyticsDashboard;