import { TeacherProfile } from '@/types/teacher';

export const mockTeacher: TeacherProfile = {
  id: 'teacher-1',
  name: 'Padma Kumari',
  email: 'PadmaKumari@example.com',
  phone: '+91 9652542147',
  address: {
    street: '!0-432/2',
    city: 'Bangalore',
    state: 'Karnataka',
    country: 'India',
  },
  status: 'active',
  joinDate: '2020-09-15',
  rating: 4.8,
  experience: 8,
  totalStudents: 156,
  totalLessons: 2340,
  bio: 'Passionate educator with over 8 years of experience in teaching mathematics and science. Dedicated to creating engaging learning experiences that inspire students to reach their full potential. Specializes in making complex concepts accessible and enjoyable for learners of all ages.',
  specializations: [
    'Mathematics',
    'Physics',
    'Chemistry',
    'Algebra',
    'Calculus',
    'Statistics'
  ],
  availability: [
    'Monday: 9:00 AM - 5:00 PM',
    'Tuesday: 9:00 AM - 5:00 PM',
    'Wednesday: 9:00 AM - 5:00 PM',
    'Thursday: 9:00 AM - 5:00 PM',
    'Friday: 9:00 AM - 3:00 PM'
  ],
  privateQualifications: [
    {
      id: 'qual-1',
      name: 'Vocal Contemporary',
      rate: 50,
      currency: '$'
    },
    {
      id: 'qual-2',
      name: 'Vocal Core',
      rate: 30,
      currency: '$'
    },
    {
      id: 'qual-3',
      name: 'Vocal Elementary',
      rate: 25,
      currency: '$'
    },
    {
      id: 'qual-4',
      name: 'Vocal Prep',
      rate: 20,
      currency: '$'
    },
    {
      id: 'qual-5',
      name: 'Instrument',
      rate: 35,
      currency: '$'
    }
  ],
  groupQualifications: [
    {
      id: 'group-1',
      name: 'Group Theory',
      rate: 45,
      currency: '$'
    },
    {
      id: 'group-2',
      name: 'Ensemble Practice',
      rate: 40,
      currency: '$'
    }
  ],
  schedule: {
    teacherId: 'teacher-1',
    slots: [
      {
        id: 'slot-1',
        day: 'Monday',
        startTime: '09:00',
        endTime: '10:00',
        subject: 'Mathematics',
        type: 'booked'
      },
      {
        id: 'slot-2',
        day: 'Monday',
        startTime: '10:00',
        endTime: '11:00',
        subject: 'Physics',
        type: 'booked'
      },
      {
        id: 'slot-3',
        day: 'Tuesday',
        startTime: '14:00',
        endTime: '15:00',
        type: 'available'
      },
      {
        id: 'slot-4',
        day: 'Wednesday',
        startTime: '15:00',
        endTime: '17:00',
        subject: 'Chemistry Lab',
        type: 'booked'
      },
      {
        id: 'slot-5',
        day: 'Thursday',
        startTime: '09:00',
        endTime: '10:00',
        type: 'available'
      },
      {
        id: 'slot-6',
        day: 'Friday',
        startTime: '13:00',
        endTime: '14:00',
        subject: 'Calculus',
        type: 'booked'
      },
      {
        id: 'slot-7',
        day: 'Saturday',
        startTime: '10:00',
        endTime: '12:00',
        subject: 'Weekend Workshop',
        type: 'booked'
      }
    ]
  }
};
