import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { InputField } from '../components/InputField';
import { Button } from '../components/Button';

export const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isFormValid = email.length > 0 && password.length > 0;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid) {
      navigate('/account');
    }
  };

  return (
    <div className="p-6 pt-10">
      <h1 className="text-2xl font-bold mb-2 text-[#1D1D1D]">Signin to your PopX account</h1>
      <p className="text-gray-500 text-lg mb-10 leading-relaxed">
        Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit,
      </p>

      <form onSubmit={handleLogin}>
        <InputField 
          label="Email Address" 
          type="email" 
          placeholder="Enter email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputField 
          label="Password" 
          type="password" 
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        
        <div className="mt-2">
          <button 
            type="submit"
            disabled={!isFormValid}
            className={`w-full py-4 rounded-lg font-semibold text-lg transition-all ${
              isFormValid 
                ? 'bg-primary-gradient-start text-white active:scale-95' 
                : 'bg-[#CBCBCB] text-white cursor-not-allowed'
            }`}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};
