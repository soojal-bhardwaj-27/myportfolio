import React from 'react';

const DecorativeStar: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <svg viewBox="0 0 100 100" className={`fill-current ${className}`}>
      <path d="M50 0 C50 30 70 50 100 50 C70 50 50 70 50 100 C50 70 30 50 0 50 C30 50 50 30 50 0 Z" />
    </svg>
  );
};
export default DecorativeStar;
