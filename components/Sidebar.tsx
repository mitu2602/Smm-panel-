import React from 'react';
import { User } from '../types';

interface SidebarProps {
    onMenuClick: (menu: string) => void;
    activeMenu: string;
    currentUser: User;
}

const Sidebar: React.FC<SidebarProps> = ({ onMenuClick, activeMenu, currentUser }) => {
  const baseMenuItems = ['New order', 'Services', 'Orders', 'Refills', 'Add funds', 'Refunds', 'API', 'Tickets', 'Mass order', 'Account'];
  const menuItems = currentUser.role === 'admin' ? [...baseMenuItems, 'Admin Panel'] : baseMenuItems;
  
  return (
    <aside className="w-64 bg-white shadow-md flex-shrink-0">
      <div className="p-4">
        <div className="mb-4">
            <div className="text-sm font-semibold text-gray-400">Balance</div>
            <div className="text-xl font-bold text-gray-800">₹{currentUser.balance.toFixed(2)}</div>
        </div>
        <nav>
          <ul>
            {menuItems.map(item => (
              <li key={item}>
                <a href="#" 
                   onClick={(e) => { e.preventDefault(); onMenuClick(item); }} 
                   className={`block py-2.5 px-4 rounded transition duration-200 ${activeMenu === item ? 'bg-blue-500 text-white' : 'hover:bg-gray-200 text-gray-700'}`}>
                  {item}
                </a>
              </li>
            ))}
             <li>
                <a href="#" 
                   onClick={(e) => { e.preventDefault(); onMenuClick('Logout'); }} 
                   className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200 text-gray-700">
                  Logout
                </a>
              </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;