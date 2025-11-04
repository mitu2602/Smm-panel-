import React, { useState } from 'react';
import NewOrder from './NewOrder';
import Sidebar from './Sidebar';
import AdminPanel from './AdminPanel';
import AddFunds from './AddFunds';
import { User, Category, SiteConfig } from '../types';

interface DashboardProps {
  onLogout: () => void;
  currentUser: User;
  users: User[];
  onUpdateUsers: (updatedUsers: User[]) => void;
  serviceData: Category[];
  onUpdateServices: (updatedServices: Category[]) => void;
  siteConfig: SiteConfig;
  onUpdateSiteConfig: (updatedConfig: SiteConfig) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onLogout, currentUser, users, onUpdateUsers, serviceData, onUpdateServices, siteConfig, onUpdateSiteConfig }) => {
  const [activeMenu, setActiveMenu] = useState('New order');

  const handleMenuClick = (menu: string) => {
    if (menu === 'Logout') {
        onLogout();
    } else {
        setActiveMenu(menu);
    }
  }

  const renderContent = () => {
    switch (activeMenu) {
      case 'New order':
        return <NewOrder serviceData={serviceData} />;
      case 'Add funds':
        return <AddFunds siteConfig={siteConfig} />;
      case 'Admin Panel':
        return (
            <AdminPanel 
                initialServices={serviceData} 
                onSaveServices={onUpdateServices}
                initialSiteConfig={siteConfig}
                onSaveSiteConfig={onUpdateSiteConfig}
                initialUsers={users}
                onSaveUsers={onUpdateUsers}
                currentUser={currentUser}
            />
        );
      default:
        return <div className="p-8 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-bold">{activeMenu}</h1>
            <p className="mt-4 text-gray-600">This feature is not implemented yet.</p>
        </div>;
    }
  }

  return (
    <div className="flex min-h-screen">
      <Sidebar 
        onMenuClick={handleMenuClick} 
        activeMenu={activeMenu} 
        currentUser={currentUser}
      />
      <main className="flex-1 p-4 sm:p-6 lg:p-8 bg-slate-100">
        {renderContent()}
      </main>
      <div className="fixed bottom-5 right-5 flex flex-col gap-3">
        <button className="bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform transform hover:scale-110">
            {/* FIX: The 'viewbox' property is invalid on SVG elements. It should be 'viewBox' with a capital 'B'. */}
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
        </button>
        <button className="bg-blue-500 hover:bg-blue-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform transform hover:scale-110">
            {/* FIX: The 'viewbox' property is invalid on SVG elements. It should be 'viewBox' with a capital 'B'. */}
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2 11 13"/><path d="m22 2-7 20-4-9-9-4 20-7z"/></svg>
        </button>
      </div>
    </div>
  );
};

export default Dashboard;