import React, { useState } from 'react';
import { Category, Service, SiteConfig, User } from '../types';

interface AdminPanelProps {
  initialServices: Category[];
  onSaveServices: (updatedServices: Category[]) => void;
  initialSiteConfig: SiteConfig;
  onSaveSiteConfig: (updatedConfig: SiteConfig) => void;
  initialUsers: User[];
  onSaveUsers: (updatedUsers: User[]) => void;
  currentUser: User;
}

const AdminPanel: React.FC<AdminPanelProps> = ({ 
    initialServices, 
    onSaveServices, 
    initialSiteConfig, 
    onSaveSiteConfig,
    initialUsers,
    onSaveUsers,
    currentUser
}) => {
  const [services, setServices] = useState<Category[]>(initialServices);
  const [editingService, setEditingService] = useState<Service | null>(null);
  const [siteConfig, setSiteConfig] = useState<SiteConfig>(initialSiteConfig);
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [editingUser, setEditingUser] = useState<{ id: number; balance: string } | null>(null);

  const handleEditService = (service: Service) => {
    setEditingService({ ...service });
  };

  const handleCancelService = () => {
    setEditingService(null);
  };

  const handleSaveService = () => {
    if (!editingService) return;

    const updatedServices = services.map(category => ({
      ...category,
      services: category.services.map(service =>
        service.id === editingService.id ? editingService : service
      ),
    }));

    setServices(updatedServices);
    onSaveServices(updatedServices);
    setEditingService(null);
  };

  const handleServiceInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!editingService) return;
    const { name, value } = e.target;
    setEditingService({
      ...editingService,
      [name]: name === 'name' ? value : Number(value),
    });
  };
  
  const handleSiteConfigChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setSiteConfig(prev => ({ ...prev, [name]: value }));
  }
  
  const handleSaveSiteConfig = () => {
      onSaveSiteConfig(siteConfig);
      alert('Site settings saved!');
  }

  const handleEditUser = (user: User) => {
    setEditingUser({ id: user.id, balance: user.balance.toString() });
  };

  const handleCancelUserEdit = () => {
    setEditingUser(null);
  };

  const handleSaveUser = () => {
    if (!editingUser) return;
    
    const updatedUsers = users.map(user =>
      user.id === editingUser.id ? { ...user, balance: Number(editingUser.balance) } : user
    );

    setUsers(updatedUsers);
    onSaveUsers(updatedUsers);
    setEditingUser(null);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md space-y-12">
       <div>
        <h1 className="text-2xl font-bold mb-6">Admin Panel</h1>
      </div>

       <div className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-700 mb-4 border-b pb-2">Manage User Balances</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Username</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mobile Number</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Balance (₹)</th>
                <th scope="col" className="relative px-6 py-3"><span className="sr-only">Edit</span></th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {users.map(user => (
                editingUser?.id === user.id ? (
                  <tr key={user.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.username}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.mobileNumber}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <input 
                        type="number" 
                        value={editingUser.balance}
                        onChange={(e) => setEditingUser({...editingUser, balance: e.target.value })}
                        className="w-32 p-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
                      <button onClick={handleSaveUser} className="text-blue-600 hover:text-blue-900 font-semibold">Save</button>
                      <button onClick={handleCancelUserEdit} className="text-gray-600 hover:text-gray-900 font-semibold">Cancel</button>
                    </td>
                  </tr>
                ) : (
                  <tr key={user.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.username} {user.id === currentUser.id && <span className="text-xs text-blue-500">(You)</span>}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.mobileNumber}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">₹{user.balance.toFixed(2)}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button onClick={() => handleEditUser(user)} className="text-blue-600 hover:text-blue-900 font-semibold">Edit</button>
                    </td>
                  </tr>
                )
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-700 mb-4 border-b pb-2">Payment Page Settings</h2>
        
        <div className="space-y-4">
           <div>
              <label htmlFor="paymentMethods" className="block text-sm font-medium text-gray-700 mb-1">Payment Method Text</label>
              <input 
                  type="text" 
                  id="paymentMethods"
                  name="paymentMethods" 
                  value={siteConfig.paymentMethods} 
                  onChange={handleSiteConfigChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" />
            </div>

            <div>
            <label htmlFor="paymentName" className="block text-sm font-medium text-gray-700 mb-1">Recipient Name</label>
            <input 
                type="text" 
                id="paymentName"
                name="paymentName" 
                value={siteConfig.paymentName} 
                onChange={handleSiteConfigChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" />
            </div>

            <div>
                <label htmlFor="qrCodeUrl" className="block text-sm font-medium text-gray-700 mb-1">QR Code Image URL or Data URL</label>
                <textarea 
                    id="qrCodeUrl"
                    name="qrCodeUrl" 
                    value={siteConfig.qrCodeUrl} 
                    onChange={handleSiteConfigChange}
                    rows={4}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 font-mono text-xs" />
                <p className="text-xs text-gray-500 mt-1">You can paste an image URL or a Base64 Data URL to change the QR code.</p>
            </div>

            <div>
                <label htmlFor="paymentInstructions" className="block text-sm font-medium text-gray-700 mb-1">Payment Instructions</label>
                <textarea 
                    id="paymentInstructions"
                    name="paymentInstructions" 
                    value={siteConfig.paymentInstructions} 
                    onChange={handleSiteConfigChange}
                    rows={5}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" />
            </div>

            <button onClick={handleSaveSiteConfig} className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition-colors">
                Save Site Settings
            </button>
        </div>
      </div>
      
      <div>
        <h2 className="text-xl font-semibold text-gray-700 mb-4 border-b pb-2">Adjust Services & Pricing</h2>
        <div className="space-y-8">
            {services.map(category => (
            <div key={category.id}>
                <h3 className="text-lg font-semibold text-gray-600 mb-3">{category.name}</h3>
                <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service Name</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rate (₹)</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Min</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Max</th>
                        <th scope="col" className="relative px-6 py-3"><span className="sr-only">Edit</span></th>
                    </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                    {category.services.map(service => (
                        editingService?.id === service.id ? (
                        <tr key={service.id}>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <input type="text" name="name" value={editingService.name} onChange={handleServiceInputChange} className="w-full p-2 border rounded-md focus:ring-blue-500 focus:border-blue-500" />
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <input type="number" name="rate" value={editingService.rate} onChange={handleServiceInputChange} className="w-24 p-2 border rounded-md focus:ring-blue-500 focus:border-blue-500" />
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <input type="number" name="min" value={editingService.min} onChange={handleServiceInputChange} className="w-24 p-2 border rounded-md focus:ring-blue-500 focus:border-blue-500" />
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <input type="number" name="max" value={editingService.max} onChange={handleServiceInputChange} className="w-24 p-2 border rounded-md focus:ring-blue-500 focus:border-blue-500" />
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
                            <button onClick={handleSaveService} className="text-blue-600 hover:text-blue-900 font-semibold">Save</button>
                            <button onClick={handleCancelService} className="text-gray-600 hover:text-gray-900 font-semibold">Cancel</button>
                            </td>
                        </tr>
                        ) : (
                        <tr key={service.id}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{service.name}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">₹{service.rate.toFixed(2)}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{service.min}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{service.max}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <button onClick={() => handleEditService(service)} className="text-blue-600 hover:text-blue-900 font-semibold">Edit</button>
                            </td>
                        </tr>
                        )
                    ))}
                    </tbody>
                </table>
                </div>
            </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;