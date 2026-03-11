import React from 'react';
import { Camera } from 'lucide-react';

interface ProfileCardProps {
  name: string;
  email: string;
  image: string;
  description: string;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({ name, email, image, description }) => {
  return (
    <div className="px-6 pt-10">
      <div className="flex items-center gap-4 mb-6">
        <div className="relative">
          <img 
            src={image} 
            alt={name} 
            className="w-20 h-20 rounded-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute bottom-0 right-0 bg-primary-gradient-start p-1.5 rounded-full border-2 border-white">
            <Camera size={14} className="text-white" />
          </div>
        </div>
        <div>
          <h2 className="text-lg font-bold text-app-text">{name}</h2>
          <p className="text-sm text-gray-500">{email}</p>
        </div>
      </div>
      <p className="text-sm text-gray-600 leading-relaxed">
        {description}
      </p>
      <div className="mt-8 border-t border-dashed border-gray-300"></div>
    </div>
  );
};
