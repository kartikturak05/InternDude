import React, { useState } from 'react';
import { MessageSquare, FileText, Calendar, Check, ArrowRight, Download, Paperclip } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ChatWithApplicants = () => {
  // State for active tab and selected candidate
  const [activeTab, setActiveTab] = useState('All');
  const [selectedCandidate, setSelectedCandidate] = useState('Sarah Johnson');
  const [messageInput, setMessageInput] = useState('');

  const navigate = useNavigate();

  // Dummy data for candidates
  const candidates = {
    'Jobs': [
      {
        name: 'Sarah Johnson',
        position: 'Senior Frontend Developer',
        status: 'Shortlisted',
        statusClass: 'bg-blue-600 text-white',
        time: '10:30 AM',
        unread: 2,
        messages: [
          { sender: 'candidate', text: 'Thank you for considering my application. I\'m very excited about the opportunity.', time: '10:28 AM' },
          { sender: 'employer', text: 'Hi Sarah, thank you for your application. Your experience looks very relevant.', time: '10:25 AM' },
          { sender: 'employer', text: 'I\'ve reviewed your portfolio. Would you be available for an interview next week?', time: '10:30 AM' },
        ],
        attachments: [
          { name: 'Updated_Portfolio_2024.pdf', size: '2.4 MB' }
        ]
      },
      {
        name: 'Michael Chen',
        position: 'UX/UI Designer',
        status: 'Interview Scheduled',
        statusClass: 'bg-green-500 text-white',
        time: 'Yesterday',
        messages: [
          { sender: 'candidate', text: 'I\'ve attached my updated portfolio as requested.', time: '3:45 PM' },
          { sender: 'employer', text: 'Thanks Michael! I\'ll review it shortly.', time: '4:20 PM' },
        ],
        attachments: [
          { name: 'UX_Portfolio_Chen.pdf', size: '3.7 MB' }
        ]
      },
      {
        name: 'Emily Davis',
        position: 'Product Manager',
        status: 'Pending',
        statusClass: 'bg-gray-500 text-white',
        time: '2 days ago',
        messages: [
          { sender: 'candidate', text: 'Looking forward to discussing the role further.', time: '9:15 AM' },
          { sender: 'employer', text: 'Thank you for your application, Emily. We\'ll be in touch soon.', time: '11:05 AM' },
        ],
        attachments: []
      }
    ],
    'Internships': [
      {
        name: 'Alex Wong',
        position: 'Data Science Intern',
        status: 'Shortlisted',
        statusClass: 'bg-blue-600 text-white',
        time: '1 day ago',
        messages: [
          { sender: 'candidate', text: 'Thank you for considering my application for the Data Science internship.', time: '4:30 PM' },
          { sender: 'employer', text: 'Your academic projects are impressive, Alex.', time: '5:15 PM' },
        ],
        attachments: [
          { name: 'ML_Project_Report.pdf', size: '1.8 MB' }
        ]
      },
      {
        name: 'Lily Evans',
        position: 'Marketing Intern',
        status: 'Interview Scheduled',
        statusClass: 'bg-green-500 text-white',
        time: '3 days ago',
        messages: [
          { sender: 'candidate', text: 'I am excited about the opportunity to join your marketing team.', time: '11:20 AM' },
          { sender: 'employer', text: 'We were impressed with your social media campaign samples.', time: '2:45 PM' },
        ],
        attachments: []
      },
      {
        name: 'Ryan Garcia',
        position: 'Software Engineering Intern',
        status: 'Pending',
        statusClass: 'bg-gray-500 text-white',
        time: '5 days ago',
        messages: [
          { sender: 'candidate', text: 'Thank you for the opportunity. Here\'s the coding challenge solution.', time: '6:10 PM' },
          { sender: 'employer', text: 'Got it, Ryan. Our tech team will review your submission.', time: '9:30 AM' },
        ],
        attachments: [
          { name: 'Coding_Challenge.zip', size: '1.2 MB' }
        ]
      }
    ],
    'Freelance': [
      {
        name: 'Sophia Rodriguez',
        position: 'Content Writer',
        status: 'Shortlisted',
        statusClass: 'bg-blue-600 text-white',
        time: '2 days ago',
        messages: [
          { sender: 'candidate', text: 'I specialize in tech content and have worked with similar companies before.', time: '10:05 AM' },
          { sender: 'employer', text: 'Your writing samples are exactly what we\'re looking for.', time: '11:30 AM' },
        ],
        attachments: [
          { name: 'Writing_Samples.pdf', size: '1.5 MB' }
        ]
      },
      {
        name: 'David Kim',
        position: 'Motion Graphics Designer',
        status: 'Interview Scheduled',
        statusClass: 'bg-green-500 text-white',
        time: '4 days ago',
        messages: [
          { sender: 'candidate', text: 'Here\'s a link to my motion graphics reel as requested.', time: '3:15 PM' },
          { sender: 'employer', text: 'Thanks, David. Your style matches our brand aesthetic.', time: '5:20 PM' },
        ],
        attachments: []
      },
      {
        name: 'Olivia Bennett',
        position: 'Web Developer',
        status: 'Pending',
        statusClass: 'bg-gray-500 text-white',
        time: '1 week ago',
        messages: [
          { sender: 'candidate', text: 'I have extensive experience with React and Node.js projects.', time: '9:45 AM' },
          { sender: 'employer', text: 'Your portfolio shows strong technical skills.', time: '2:10 PM' },
        ],
        attachments: [
          { name: 'Code_Samples.zip', size: '4.3 MB' }
        ]
      }
    ]
  };

  // Get all candidates across categories
  const allCandidates = [
    ...candidates['Jobs'],
    ...candidates['Internships'],
    ...candidates['Freelance']
  ];

  // Current displayed candidates based on active tab
  const displayedCandidates = activeTab === 'All' ? allCandidates : candidates[activeTab];

  // Get current candidate object
  const currentCandidate = displayedCandidates.find(c => c.name === selectedCandidate) || displayedCandidates[0];

  const handleSendMessage = () => {
    if (messageInput.trim() !== '') {
      // In a real app, you would update the state with the new message
      setMessageInput('');
    }
  };

  // Quick reply options
  const quickReplies = [
    "Thank you for your application. We'll review it shortly.",
    "Would you be available for an interview?",
    "Could you please provide more details about your experience?",
    "We'll get back to you soon."
  ];

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <div className="border-b border-gray-200 bg-white p-4 flex justify-between items-center">
        <h1 className="text-3xl font-semibold">Inbox</h1>
        <div className="relative">
          <input
            type="text"
            placeholder="Search candidates or jobs..."
            className="border border-gray-300 rounded-lg px-4 py-2 w-64"
          />
        </div>
      </div>

      {/* Tabs and Chat Area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar */}
        <div className="w-96 border-r border-gray-200 flex flex-col">
          {/* Tabs */}
          <div className="flex border-b border-gray-200">
            {['All', 'Jobs', 'Internships', 'Freelance'].map(tab => (
              <button
                key={tab}
                className={`px-4 py-3 text-md ${activeTab === tab ?  ' cursor-pointer font-semibold text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Candidates List */}
          <div className="flex-1 overflow-y-auto">
            {displayedCandidates.map(candidate => (
              <div
                key={candidate.name}
                className={`p-4 border-b border-gray-200 cursor-pointer hover:bg-gray-50 ${selectedCandidate === candidate.name ? 'bg-blue-50' : ''}`}
                onClick={() => setSelectedCandidate(candidate.name)}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">{candidate.name}</h3>
                    <p className="text-sm text-gray-500">{candidate.position}</p>
                    <p className="text-sm text-gray-500 mt-2 truncate">
                      {candidate.messages[0]?.text.substring(0, 40)}...
                    </p>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-xs text-gray-500">{candidate.time}</span>
                    {candidate.unread && (
                      <span className="mt-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                        {candidate.unread}
                      </span>
                    )}
                  </div>
                </div>

                <div className='text-end'>
                <span className={`text-xs text-left px-2 py-1 rounded-full mt-2 inline-block ${candidate.statusClass}`}>
                  {candidate.status}
                </span>
                </div>

               
              </div>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col">
          {/* Chat Header */}
          {currentCandidate && (
            <div className="p-4 border-b border-gray-200 bg-white flex justify-between items-center">
              <div>
                <h2 className="text-lg font-semibold">{currentCandidate.name}</h2>
                <p className="text-sm text-gray-500">{currentCandidate.position}</p>
              </div>
              <div className="flex gap-4">
                <button className="flex items-center text-blue-900 font-semibold text-md">
                  <MessageSquare size={16} className="mr-1" />
                  View Profile
                </button>
                <button className="flex items-center text-blue-900 font-semibold text-md">
                  <FileText size={16} className="mr-1" />
                  Resume
                </button>
                <button className="flex items-center text-blue-900 font-semibold text-md cursor-pointer hover:text-gray-500"
                onClick={()=> navigate("/employer/InterviewSchedule")}
                >
                  <Calendar size={16} className="mr-1" />
                  Schedule
                </button>
                <button className="flex items-center text-blue-900 font-semibold text-md">
                  <Check size={16} className="mr-1" />
                  Shortlist
                </button>
              </div>
            </div>
          )}

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
            {currentCandidate && currentCandidate.messages.slice().reverse().map((message, idx) => (
              <div key={idx} className={`mb-4 flex ${message.sender === 'employer' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-md p-3 rounded-lg ${message.sender === 'employer' ? 'bg-blue-600 text-white' : 'bg-white border border-gray-200'}`}>
                  <p>{message.text}</p>
                  <span className={`text-xs mt-1 block text-right ${message.sender === 'employer' ? 'text-blue-200' : 'text-gray-500'}`}>
                    {message.time}
                  </span>
                </div>
              </div>
            ))}
            
            {/* Attachments */}
            {currentCandidate.attachments.length > 0 && (
              <div className="mb-4">
                {currentCandidate.attachments.map((file, idx) => (
                  <div key={idx} className="flex items-center p-3 bg-white border border-gray-200 rounded-lg mb-2">
                    <FileText size={20} className="text-gray-500 mr-2" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">{file.name}</p>
                      <p className="text-xs text-gray-500">{file.size}</p>
                    </div>
                    <button className="text-blue-600">
                      <Download size={16} />
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* Suggested Replies */}
            <div className="mt-4">
              <p className="text-lg text-gray-500 mb-2">Suggested Replies:</p>
              <div className="flex flex-wrap gap-2">
                {quickReplies.map((reply, idx) => (
                  <button 
                    key={idx} 
                    className="text-lg bg-white border border-gray-300 rounded-full px-3 py-1 hover:bg-gray-50"
                    onClick={() => setMessageInput(reply)}
                  >
                    {reply}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Message Input */}
          <div className="p-4 border-t border-gray-200 bg-white flex">
            <button className="text-gray-500 mr-2">
              <Paperclip size={20} />
            </button>
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 outline-none"
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <button 
              className="ml-2 bg-blue-600 text-white rounded p-2"
              onClick={handleSendMessage}
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatWithApplicants;