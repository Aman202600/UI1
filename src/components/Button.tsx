import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, ...props }) => {
  return (
    <button 
      className={variant === 'primary' ? 'btn-primary' : 'btn-secondary'} 
      {...props}
    >
      {children}
    </button>
  );
};
