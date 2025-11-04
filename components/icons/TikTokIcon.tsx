import React from 'react';

const TikTokIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12 12a4 4 0 1 0 4 4V4a2 2 0 0 1 2-2h-2a2 2 0 0 0-2 2v10a4 4 0 1 1-4-4h4" />
  </svg>
);

export default TikTokIcon;
