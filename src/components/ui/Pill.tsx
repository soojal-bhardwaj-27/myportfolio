import React from 'react';

const Pill: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className = '' }) => {
  return (
    <span className={`bg-orange text-black font-sans font-medium rounded-full px-5 py-2 inline-block ${className}`}>
      {children}
    </span>
  );
};
export default Pill;
