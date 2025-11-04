import React from 'react';

interface HeaderProps {
  onLogout?: () => void;
  isLoggedIn?: boolean;
}

const Header: React.FC<HeaderProps> = ({ onLogout, isLoggedIn }) => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold text-blue-600">
              FASTGROW
            </a>
          </div>
          {isLoggedIn && (
             <button onClick={onLogout} className="text-sm font-medium text-gray-500 hover:text-gray-700">
                Logout
              </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
