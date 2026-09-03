import React from 'react';

const Tag: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className = '' }) => {
  return (
    <span className={`bg-black text-cream font-sans rounded-full px-4 py-1.5 text-xs inline-block hover:scale-105 transition-transform duration-200 ${className}`}>
      {children}
    </span>
  );
};
export default Tag;
