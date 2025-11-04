import React from 'react';

const YoutubeIcon: React.FC<{ className?: string }> = ({ className }) => (
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
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10C2.5 6 7.5 4 12 4s9.5 2 9.5 3-2.5 2-2.5 2" />
    <path d="M12 14v4" />
    <path d="M12 4c0 4-2 8-5 8" />
    <path d="M12 4c0 4 2 8 5 8" />
    <path d="M2.5 17c0-4 4.5-8 9.5-8s9.5 4 9.5 8" />
    <path d="M10.5 17c0 .5.5 1 1.5 1s1.5-.5 1.5-1" />
  </svg>
);

// FIX: Add missing default export.
export default YoutubeIcon;
