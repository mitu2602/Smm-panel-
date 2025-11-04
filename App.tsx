import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import { SERVICE_DATA, DEFAULT_QR_CODE, INITIAL_USERS } from './constants';
import { Category, SiteConfig, User } from './types';

function App() {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [users, setUsers] = useState<User[]>(INITIAL_USERS);
  
  const [serviceData, setServiceData] = useState<Category[]>(SERVICE_DATA);
  const [siteConfig, setSiteConfig] = useState<SiteConfig>({
      qrCodeUrl: DEFAULT_QR_CODE,
      paymentMethods: '1 Gpay - FamPay - Paytm - All UPI Accepted [ NEERAJ ]',
      paymentInstructions: `If u pay
Google pay (upi transaction ID)
Phone pe (UTR id)
Paytm (upi ref no)
Famepay (UTR no)`,
      paymentName: 'NEERAJ',
  });

  const handleLogin = (username: string, mobileNumber: string) => {
    const existingUser = users.find(u => u.username.toLowerCase() === username.toLowerCase());

    if (existingUser) {
        setCurrentUser(existingUser);
    } else {
        // Simulate new user signup
        if (!mobileNumber) {
            alert('Mobile number is required for new users.');
            return;
        }
        const newUser: User = {
            id: users.length + 1,
            username: username,
            role: 'user',
            balance: 0,
            mobileNumber: mobileNumber,
        };
        setUsers(prev => [...prev, newUser]);
        setCurrentUser(newUser);
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
  };

  const handleUpdateServices = (updatedServices: Category[]) => {
    setServiceData(updatedServices);
  };

  const handleUpdateSiteConfig = (updatedConfig: SiteConfig) => {
    setSiteConfig(updatedConfig);
  };

  const handleUpdateUsers = (updatedUsers: User[]) => {
    setUsers(updatedUsers);
    // Also update the current user's state if their data changed
    if (currentUser) {
        const updatedCurrentUser = updatedUsers.find(u => u.id === currentUser.id);
        if (updatedCurrentUser) {
            setCurrentUser(updatedCurrentUser);
        }
    }
  };


  return (
    <div className="min-h-screen bg-slate-100 font-sans">
      {currentUser ? (
        <Dashboard 
          onLogout={handleLogout} 
          currentUser={currentUser}
          users={users}
          onUpdateUsers={handleUpdateUsers}
          serviceData={serviceData}
          onUpdateServices={handleUpdateServices}
          siteConfig={siteConfig}
          onUpdateSiteConfig={handleUpdateSiteConfig}
        />
      ) : (
        <LandingPage onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;