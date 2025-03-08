import React from 'react';

const Button = ({ children, variant = 'primary', onClick, className = '' }) => {
  const baseClasses = "px-8 py-3 rounded-md font-medium text-center";
  
  const variantClasses = {
    primary: "bg-transparent border-2 border-[#ffdab9] text-gray-800 hover:bg-[rgba(255,218,185,0.1)]",
    secondary: "bg-[#ffdab9] text-gray-800 hover:bg-[#ffcba4]",
    white: "bg-white border-gray-300 text-black hover:bg-gray-100",
    green: "bg-custom-green border-custom-green text-black hover:bg-hover-green"
  };
  
  return (
    <button 
      onClick={onClick} 
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;