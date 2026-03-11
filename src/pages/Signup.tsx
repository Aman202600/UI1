import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { InputField } from '../components/InputField';
import { Button } from '../components/Button';

export const Signup: React.FC = () => {
  const navigate = useNavigate();
  const [isAgency, setIsAgency] = useState<boolean | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/account');
  };

  return (
    <div className="p-6 pt-10 flex flex-col min-h-[812px]">
      <h1 className="text-2xl font-bold mb-10">Create your PopX account</h1>

      <form onSubmit={handleSubmit} className="flex-1 flex flex-col">
        <div className="flex-1">
          <InputField label="Full Name" placeholder="Marry Doe" required />
          <InputField label="Phone number" placeholder="Marry Doe" required />
          <InputField label="Email address" type="email" placeholder="Marry Doe" required />
          <InputField label="Password" type="password" placeholder="Marry Doe" required />
          <InputField label="Company name" placeholder="Marry Doe" />

          <div className="mb-8">
            <p className="text-sm font-medium mb-2">Are you an Agency? <span className="text-red-500">*</span></p>
            <div className="radio-group">
              <div className="radio-item" onClick={() => setIsAgency(true)}>
                <div className={`radio-dot ${isAgency === true ? 'active' : ''}`}></div>
                <span className="text-sm">Yes</span>
              </div>
              <div className="radio-item" onClick={() => setIsAgency(false)}>
                <div className={`radio-dot ${isAgency === false ? 'active' : ''}`}></div>
                <span className="text-sm">No</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-auto pb-2">
          <Button type="submit">Create Account</Button>
        </div>
      </form>
    </div>
  );
};
