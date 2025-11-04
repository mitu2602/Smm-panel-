import React, { useState, useEffect } from 'react';
import { Category } from '../types';
import FacebookIcon from './icons/FacebookIcon';
import InstagramIcon from './icons/InstagramIcon';
import TelegramIcon from './icons/TelegramIcon';
import TikTokIcon from './icons/TikTokIcon';
import TwitterIcon from './icons/TwitterIcon';
import YoutubeIcon from './icons/YoutubeIcon';

const SocialButton: React.FC<{ icon: React.ReactNode; active?: boolean }> = ({ icon, active }) => (
  <button className={`flex-1 p-3 flex justify-center items-center border rounded-lg transition-colors ${active ? 'bg-blue-600 text-white border-blue-600' : 'bg-white hover:bg-gray-100'}`}>
    {icon}
  </button>
);

interface NewOrderProps {
    serviceData: Category[];
}

const NewOrder: React.FC<NewOrderProps> = ({ serviceData }) => {
    const [selectedCategoryId, setSelectedCategoryId] = useState<number>(serviceData[0].id);
    const [selectedServiceId, setSelectedServiceId] = useState<number>(serviceData[0].services[0].id);
    const [quantity, setQuantity] = useState<number>(1000);
    const [link, setLink] = useState<string>('');
    const [charge, setCharge] = useState<string>('0.00');

    const selectedCategory = serviceData.find(c => c.id === selectedCategoryId);
    const selectedService = selectedCategory?.services.find(s => s.id === selectedServiceId);

    useEffect(() => {
        if(selectedCategory && selectedCategory.services.length > 0) {
            // If the current selected service doesn't exist in the new category, reset to the first service
            if (!selectedCategory.services.find(s => s.id === selectedServiceId)) {
                 setSelectedServiceId(selectedCategory.services[0].id);
            }
        } else if (selectedCategory?.services.length === 0) {
            // Handle case where a category might have no services
        }
    }, [selectedCategoryId, selectedCategory, selectedServiceId]);
    
    useEffect(() => {
        if (selectedService && quantity >= selectedService.min) {
            const calculatedCharge = (quantity / 1000) * selectedService.rate;
            setCharge(calculatedCharge.toFixed(2));
        } else if (selectedService) {
            setCharge('0.00');
        }
    }, [quantity, selectedService]);

    const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const numValue = value === '' ? 0 : parseInt(value, 10);
        if (!isNaN(numValue)) {
            setQuantity(numValue);
        }
    }
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(selectedService && quantity >= selectedService.min && quantity <= selectedService.max && link) {
            alert(`Order submitted!\nService: ${selectedService.name}\nQuantity: ${quantity}\nLink: ${link}\nCharge: ₹${charge}`);
        } else {
            alert('Please fill all fields correctly. Check quantity limits and ensure the link is provided.');
        }
    }


  return (
    <div className="space-y-6">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg relative text-center" role="alert">
            <strong className="font-bold">Right now the followers server is not stable so followers may drop</strong>
            <span className="block sm:inline"> ابھی فالوورز سرور مستحکم نہیں ہے، اس لیے فالوورز ڈراپ ہو سکتے ہیں</span>
        </div>
        <div className="text-center">
            <button className="bg-blue-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors">
                Pix Watch
            </button>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
            <div className="flex gap-2">
                <SocialButton icon={<FacebookIcon />} />
                <SocialButton icon={<InstagramIcon />} active />
                <SocialButton icon={<TikTokIcon />} />
                <SocialButton icon={<TelegramIcon />} />
                <SocialButton icon={<YoutubeIcon />} />
                <SocialButton icon={<TwitterIcon />} />
                <button className="flex-1 p-3 flex justify-center items-center border rounded-lg transition-colors bg-white hover:bg-gray-100 text-2xl font-thin">+</button>
            </div>
             <div className="flex items-center border rounded-lg">
                <span className="pl-3 text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                </span>
                <input type="text" placeholder="Search" className="w-full p-2 bg-transparent focus:outline-none" />
            </div>
        </div>
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md space-y-6">
            <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <select id="category" value={selectedCategoryId} onChange={e => setSelectedCategoryId(Number(e.target.value))} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    {serviceData.map(cat => (
                        <option key={cat.id} value={cat.id}>{cat.name}</option>
                    ))}
                </select>
            </div>
            <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service</label>
                 <select id="service" value={selectedServiceId} onChange={e => setSelectedServiceId(Number(e.target.value))} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" disabled={!selectedCategory || selectedCategory.services.length === 0}>
                    {selectedCategory?.services.map(ser => (
                        <option key={ser.id} value={ser.id}>{ser.name} - ₹{ser.rate.toFixed(2)} per 1000</option>
                    ))}
                </select>
            </div>

            {selectedService && (
                <div className="border border-yellow-300 bg-yellow-50 p-4 rounded-lg space-y-3">
                    <h3 className="font-bold text-gray-800">Description</h3>
                    <p className="font-semibold text-gray-600">Please Read Before Ordering</p>
                    <ul className="space-y-1 text-sm text-gray-700">
                       <li>- Link: Instagram Username</li>
                       <li>- Location: {selectedService.description.location}</li>
                       <li>- Quality: {selectedService.description.quality}</li>
                       <li>- Speed: {selectedService.description.speed}</li>
                       <li>- Refill Time: {selectedService.description.refill}</li>
                       <li>- Cancel Button: <span className={selectedService.description.cancel ? 'text-green-600 font-bold' : 'text-red-600 font-bold'}>{selectedService.description.cancel ? 'Active' : 'Not Active'}</span></li>
                    </ul>
                    <div className="pt-2 border-t border-yellow-200">
                        <h4 className="font-semibold text-gray-800">Notes:</h4>
                        <ul className="list-disc list-inside text-sm text-gray-600">
                            <li>In case of high demand for the service, there may be changes in speed and start time.</li>
                            <li>Placing the 2nd order on the same link after the completion of the order system you have given.</li>
                        </ul>
                    </div>
                </div>
            )}

            <div>
                <label htmlFor="link" className="block text-sm font-medium text-gray-700 mb-1">Link</label>
                <input id="link" type="text" value={link} onChange={e => setLink(e.target.value)} placeholder="https://www.instagram.com/username" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" required />
            </div>
             <div>
                <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">Quantity</label>
                <input id="quantity" type="number" value={quantity} onChange={handleQuantityChange} min={selectedService?.min} max={selectedService?.max} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" required />
                <p className="text-xs text-gray-500 mt-1">Min: {selectedService?.min ?? 0} - Max: {selectedService?.max ?? 0}</p>
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Charge</label>
                <div className="w-full p-3 border border-gray-200 bg-gray-100 rounded-lg">
                    <span className="font-bold text-gray-800">₹{charge}</span>
                </div>
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Submit
            </button>
        </form>
    </div>
  );
};

export default NewOrder;
