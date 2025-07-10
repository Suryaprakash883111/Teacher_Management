'use client';

import Layout from '@/components/Layout';
import TeacherProfile from '@/components/TeacherProfile';
import { mockTeacher } from '@/data/mockData';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const handleEditProfile = () => {
    router.push('/todo'); // Navigate to the todo list page
  };

  return ( 
    <Layout>
      <TeacherProfile 
        teacher={mockTeacher} 
        onEdit={handleEditProfile}
      />
    </Layout>
  );
}
