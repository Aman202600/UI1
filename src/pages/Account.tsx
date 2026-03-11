import React from 'react';
import { ProfileCard } from '../components/ProfileCard';

export const Account: React.FC = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="p-6 border-b border-gray-100 bg-white sticky top-0 z-10">
        <h1 className="text-xl font-medium">Account Settings</h1>
      </div>
      
      <ProfileCard 
        name="Marry Doe"
        email="Marry@gmail.com"
        image="https://picsum.photos/seed/marry/200/200"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />
      
      <div className="flex-1 bg-gray-50"></div>
    </div>
  );
};
