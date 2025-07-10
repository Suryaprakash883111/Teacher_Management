export interface Teacher {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: {
    street: string;
    city: string;
    state: string;
    country: string;
  };
  avatar?: string;
  status: 'active' | 'inactive';
  joinDate: string;
}

export interface Qualification {
  id: string;
  name: string;
  rate: number;
  currency: string;
}

export interface GroupQualification {
  id: string;
  name: string;
  rate: number;
  currency: string;
}

export interface ScheduleSlot {
  id: string;
  day: string;
  startTime: string;
  endTime: string;
  subject?: string;
  type: 'available' | 'booked' | 'unavailable';
}

export interface TeacherSchedule {
  teacherId: string;
  slots: ScheduleSlot[];
}

export interface TeacherProfile extends Teacher {
  privateQualifications: Qualification[];
  groupQualifications: GroupQualification[];
  schedule: TeacherSchedule;
  availability: string[];
  specializations: string[];
  bio?: string;
  experience: number;
  rating: number;
  totalStudents: number;
  totalLessons: number;
}

export interface TabType {
  id: string;
  label: string;
  icon?: React.ComponentType<{ className?: string }>;
}
