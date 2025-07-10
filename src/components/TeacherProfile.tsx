'use client';

import { useState } from 'react';
import {
  UserIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  PencilIcon,
  PlusIcon,
  StarIcon,
  CalendarDaysIcon,
  AcademicCapIcon,
  ClockIcon,
  UsersIcon,
  BookOpenIcon,
} from '@heroicons/react/24/outline';
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid';
import { clsx } from 'clsx';
import { TeacherProfile as TeacherProfileType, TabType } from '@/types/teacher';

interface TeacherProfileProps {
  teacher: TeacherProfileType;
  onEdit?: () => void;
}

const tabs: TabType[] = [
  { id: 'overview', label: 'Overview', icon: UserIcon },
  { id: 'qualifications', label: 'Qualifications', icon: AcademicCapIcon },
  { id: 'schedule', label: 'Schedule', icon: CalendarDaysIcon },
  { id: 'students', label: 'Students', icon: UsersIcon },
  { id: 'history', label: 'History', icon: BookOpenIcon },
];

const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const timeSlots = [
  '7:30am', '8am', '8:30am', '9am', '9:30am', '10am', '10:30am', '11am', '11:30am',
  '12pm', '12:30pm', '1pm', '1:30pm', '2pm', '2:30pm', '3pm', '3:30pm', '4pm', '4:30pm', '5pm', '6pm'
];

export default function TeacherProfile({ teacher, onEdit }: TeacherProfileProps) {
  const [activeTab, setActiveTab] = useState('overview');

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => {
      const isFilled = i < Math.floor(rating);
      const isHalfFilled = i === Math.floor(rating) && rating % 1 !== 0;
      
      return (
        <div key={i} className="relative">
          <StarIcon className="h-5 w-5 text-gray-300" />
          {(isFilled || isHalfFilled) && (
            <StarIconSolid 
              className={clsx(
                'absolute inset-0 h-5 w-5 text-yellow-400',
                isHalfFilled && 'w-2.5 overflow-hidden'
              )}
            />
          )}
        </div>
      );
    });
  };

  const renderScheduleGrid = () => {
    return (
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full align-middle">
          <div className="grid grid-cols-8 gap-px bg-gray-200 rounded-lg overflow-hidden">
            {/* Header */}
            <div className="bg-gray-50 px-4 py-3 text-center text-sm font-medium text-gray-900">
              Time
            </div>
            {weekDays.map((day) => (
              <div key={day} className="bg-gray-50 px-4 py-3 text-center text-sm font-medium text-gray-900">
                {day}
              </div>
            ))}
            
            {/* Time slots */}
            {timeSlots.map((time) => (
              <div key={time} className="contents">
                <div className="bg-white px-4 py-3 text-center text-sm text-gray-500 border-r border-gray-200">
                  {time}
                </div>
                {weekDays.map((day) => {
                  const hasSchedule = Math.random() > 0.7; // Mock data
                  const isBooked = Math.random() > 0.5;
                  
                  return (
                    <div
                      key={`${day}-${time}`}
                      className={clsx(
                        'bg-white px-2 py-3 text-center text-sm min-h-[3rem] flex items-center justify-center',
                        hasSchedule && !isBooked && 'bg-green-100 text-green-800',
                        hasSchedule && isBooked && 'bg-blue-100 text-blue-800'
                      )}
                    >
                      {hasSchedule && (
                        <div className="w-full h-6 rounded bg-current opacity-20"></div>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="p-2 bg-blue-100 rounded-lg">
              <StarIcon className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-500">Rating</p>
              <p className="text-2xl font-semibold text-gray-900">{teacher.rating}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="p-2 bg-green-100 rounded-lg">
              <UsersIcon className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-500">Students</p>
              <p className="text-2xl font-semibold text-gray-900">{teacher.totalStudents}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="p-2 bg-purple-100 rounded-lg">
              <BookOpenIcon className="h-6 w-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-500">Lessons</p>
              <p className="text-2xl font-semibold text-gray-900">{teacher.totalLessons}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="p-2 bg-orange-100 rounded-lg">
              <ClockIcon className="h-6 w-6 text-orange-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-500">Experience</p>
              <p className="text-2xl font-semibold text-gray-900">{teacher.experience}y</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bio Section */}
      {teacher.bio && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">About</h3>
          <p className="text-gray-600 leading-relaxed">{teacher.bio}</p>
        </div>
      )}

      {/* Specializations */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Specializations</h3>
        <div className="flex flex-wrap gap-2">
          {teacher.specializations.map((spec) => (
            <span
              key={spec}
              className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
            >
              {spec}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  const renderQualifications = () => (
    <div className="space-y-6">
      {/* Private Qualifications */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium text-gray-900">Private Qualifications</h3>
          <button className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
            <PlusIcon className="h-4 w-4 mr-1" />
            Add
          </button>
        </div>
        <div className="space-y-3">
          {teacher.privateQualifications.map((qual) => (
            <div key={qual.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <h4 className="font-medium text-gray-900">{qual.name}</h4>
                <p className="text-sm text-gray-500">Private lessons</p>
              </div>
              <div className="text-right">
                <p className="font-medium text-gray-900">{qual.currency}{qual.rate}</p>
                <p className="text-sm text-gray-500">per hour</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Group Qualifications */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium text-gray-900">Group Qualifications</h3>
          <button className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
            <PlusIcon className="h-4 w-4 mr-1" />
            Add
          </button>
        </div>
        <div className="space-y-3">
          {teacher.groupQualifications.map((qual) => (
            <div key={qual.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <h4 className="font-medium text-gray-900">{qual.name}</h4>
                <p className="text-sm text-gray-500">Group lessons</p>
              </div>
              <div className="text-right">
                <p className="font-medium text-gray-900">{qual.currency}{qual.rate}</p>
                <p className="text-sm text-gray-500">per hour</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderSchedule = () => (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-medium text-gray-900">Weekly Schedule</h3>
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <div className="w-4 h-4 bg-green-200 rounded mr-2"></div>
            <span className="text-sm text-gray-600">Available</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-blue-200 rounded mr-2"></div>
            <span className="text-sm text-gray-600">Booked</span>
          </div>
        </div>
      </div>
      {renderScheduleGrid()}
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-6">
            <div className="relative">
              <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
                {teacher.avatar ? (
                  <img
                    src={teacher.avatar}
                    alt={teacher.name}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                ) : (
                  <UserIcon className="h-10 w-10 text-gray-400" />
                )}
              </div>
              <div className={clsx(
                'absolute bottom-0 right-0 w-6 h-6 rounded-full border-2 border-white',
                teacher.status === 'active' ? 'bg-green-400' : 'bg-gray-400'
              )} />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{teacher.name}</h1>
              <div className="flex items-center mt-1">
                <div className="flex items-center">
                  {renderStars(teacher.rating)}
                  <span className="ml-2 text-sm text-gray-600">({teacher.rating})</span>
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <EnvelopeIcon className="h-4 w-4 mr-2" />
                  {teacher.email}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <PhoneIcon className="h-4 w-4 mr-2" />
                  {teacher.phone}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <MapPinIcon className="h-4 w-4 mr-2" />
                  {teacher.address.city}, {teacher.address.country}
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={onEdit}
            className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
          >
            <PencilIcon className="h-4 w-4 mr-2" />
            Edit Profile
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={clsx(
                'flex items-center py-4 px-1 border-b-2 font-medium text-sm transition-colors',
                activeTab === tab.id
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              )}
            >
              {tab.icon && <tab.icon className="h-5 w-5 mr-2" />}
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === 'overview' && renderOverview()}
        {activeTab === 'qualifications' && renderQualifications()}
        {activeTab === 'schedule' && renderSchedule()}
        {activeTab === 'students' && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Students</h3>
            <p className="text-gray-600">Student management features coming soon...</p>
          </div>
        )}
        {activeTab === 'history' && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">History</h3>
            <p className="text-gray-600">Teaching history and analytics coming soon...</p>
          </div>
        )}
    
      </div>
    </div>
  );
}
