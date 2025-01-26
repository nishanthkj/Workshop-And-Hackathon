import React, { useState } from 'react';
import { Calendar, Clock, User } from 'lucide-react';

const Schedule = () => {
  const [activeDay, setActiveDay] = useState(1);

  const schedule = {
    1: {
      date: 'March 15, 2025',
      events: [
        {
          time: '09:00 AM - 10:00 AM',
          topic: 'Registration and Welcome Kit Distribution',
          speaker: 'Event Team'
        },
        {
          time: '10:00 AM - 11:00 AM',
          topic: 'Inaugural Ceremony',
          speaker: 'Dr. B G Naresh Kumar'
        },
        {
          time: '11:00 AM - 12:30 PM',
          topic: 'Keynote: Future of AI in Healthcare',
          speaker: 'Dr. Rajesh Kumar (AI Research Lead, Healthcare Analytics)'
        },
        {
          time: '02:00 PM - 04:00 PM',
          topic: 'Workshop: Deep Learning for Medical Image Analysis',
          speaker: 'Prof. Sarah Chen (Stanford University)'
        },
        {
          time: '04:15 PM - 06:00 PM',
          topic: 'Hands-on Session: Cloud Computing for AI Workloads',
          speaker: 'Mr. Alex Thompson (Cloud Architect, Google)'
        }
      ]
    },
    2: {
      date: 'March 16, 2025',
      events: [
        {
          time: '09:00 AM - 09:30 AM',
          topic: 'Hackathon Kickoff',
          speaker: 'Dr. Hemanth S R'
        },
        {
          time: '09:30 AM - 10:30 AM',
          topic: 'Problem Statement Presentation',
          speaker: 'Dr. Victor A I'
        },
        {
          time: '10:30 AM - 11:30 AM',
          topic: 'Team Formation and Mentoring Session',
          speaker: 'Industry Mentors'
        },
        {
          time: '11:30 AM - 06:00 PM',
          topic: 'Hackathon Development Phase',
          speaker: 'All Teams'
        },
        {
          time: '06:00 PM - 06:30 PM',
          topic: 'Day 1 Progress Review',
          speaker: 'Panel of Judges'
        }
      ]
    },
    3: {
      date: 'March 17, 2025',
      events: [
        {
          time: '09:00 AM - 12:00 PM',
          topic: 'Final Development Sprint',
          speaker: 'All Teams'
        },
        {
          time: '12:00 PM - 01:00 PM',
          topic: 'Project Submission',
          speaker: 'Technical Committee'
        },
        {
          time: '02:00 PM - 04:00 PM',
          topic: 'Project Presentations',
          speaker: 'All Teams'
        },
        {
          time: '04:00 PM - 04:45 PM',
          topic: 'Judging and Evaluation',
          speaker: 'Panel of Expert Judges'
        },
        {
          time: '05:00 PM - 06:00 PM',
          topic: 'Valedictory and Award Ceremony',
          speaker: 'Dr. B G Naresh Kumar & Distinguished Guests'
        }
      ]
    }
  };

  return (
    <section id="schedule" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Event Schedule
          </h2>
          <p className="text-lg text-gray-600">
            Three days of learning, innovation, and excitement
          </p>
        </div>

        <div className="flex justify-center mb-8">
          {[1, 2, 3].map((day) => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              className={`px-6 py-3 mx-2 rounded-lg transition-all duration-200 ${
                activeDay === day
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              <div className="flex items-center space-x-2">
                <Calendar size={20} />
                <span>Day {day}</span>
              </div>
              <div className={`text-sm ${activeDay === day ? 'text-blue-100' : 'text-gray-500'}`}>
                {schedule[day].date}
              </div>
            </button>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="divide-y divide-gray-200">
            {schedule[activeDay].events.map((event, index) => (
              <div
                key={index}
                className="p-6 hover:bg-gray-50 transition-colors"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                  <div className="md:col-span-3">
                    <div className="flex items-center text-blue-600">
                      <Clock size={20} className="mr-2" />
                      <span className="font-semibold">{event.time}</span>
                    </div>
                  </div>
                  <div className="md:col-span-6">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {event.topic}
                    </h3>
                  </div>
                  <div className="md:col-span-3">
                    <div className="flex items-center text-gray-600">
                      <User size={20} className="mr-2" />
                      <span>{event.speaker}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Schedule;