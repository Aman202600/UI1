import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';

export const Welcome: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex-1 flex flex-col p-6 pb-4 relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-10 -left-10 w-24 h-24 bg-yellow-circle rounded-full opacity-20 flex items-center justify-center text-white font-bold text-4xl">1</div>
      <div className="absolute top-40 -right-5 w-16 h-16 bg-yellow-circle rounded-full opacity-30 flex items-center justify-center text-white font-bold text-2xl">2</div>
      <div className="absolute top-1/4 left-1/3 w-12 h-12 bg-yellow-circle rounded-full opacity-25 flex items-center justify-center text-white font-bold text-xl">3</div>
      <div className="absolute top-1/2 -left-4 w-14 h-14 bg-yellow-circle rounded-full opacity-15 flex items-center justify-center text-white font-bold text-xl">4</div>
      <div className="absolute top-2/3 -right-8 w-20 h-20 bg-yellow-circle rounded-full opacity-10 flex items-center justify-center text-white font-bold text-3xl">5</div>
      
      <div className="z-10 mt-20">
        <h1 className="text-3xl font-bold mb-2">Welcome to PopX</h1>
        <p className="text-gray-500 text-lg max-w-[250px] leading-relaxed">
          Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit,
        </p>
      </div>

      <div className="mt-auto z-10 space-y-3">
        <Button onClick={() => navigate('/signup')}>
          Create Account
        </Button>
        <Button variant="secondary" onClick={() => navigate('/login')}>
          Already Registered? Login
        </Button>
      </div>
    </div>
  );
};
