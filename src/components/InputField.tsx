import React from 'react';

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const InputField: React.FC<InputFieldProps> = ({ label, ...props }) => {
  return (
    <div className="relative mb-6">
      <label className="input-label">{label}</label>
      <input className="input-field" {...props} />
    </div>
  );
};
