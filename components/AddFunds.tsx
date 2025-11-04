import React from 'react';
import { SiteConfig } from '../types';

const AddFunds: React.FC<{ siteConfig: SiteConfig }> = ({ siteConfig }) => {
  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md max-w-lg mx-auto">
      <form className="space-y-6">
        <div>
          <label htmlFor="method" className="block text-sm font-medium text-gray-700 mb-1">
            Method
          </label>
          <select
            id="method"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50"
            disabled
          >
            <option>{siteConfig.paymentMethods}</option>
          </select>
        </div>

        <div>
          <label htmlFor="utr" className="block text-sm font-medium text-gray-700 mb-1">
            UTR ID
          </label>
          <input
            id="utr"
            type="text"
            placeholder="Enter UTR ID"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">
            Amount
          </label>
          <input
            id="amount"
            type="text"
            placeholder="Enter amount"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Instruction</label>
          <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <pre className="text-sm text-gray-800 whitespace-pre-wrap font-sans">
              {siteConfig.paymentInstructions}
            </pre>
          </div>
        </div>

        <div className="text-center pt-4 space-y-4 border-t">
          <p className="text-lg font-bold text-gray-700 uppercase" style={{letterSpacing: '0.1em'}}>we accept</p>
          <div className="flex justify-center items-center space-x-4 text-gray-500">
             <img src="https://upload.wikimedia.org/wikipedia/commons/e/e1/BHIM_logo.svg" alt="BHIM" className="h-6" />
             <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Google_Pay_Logo.svg/1200px-Google_Pay_Logo.svg.png" alt="Google Pay" className="h-6" />
             <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Paytm_logo.png/1024px-Paytm_logo.png" alt="Paytm" className="h-5" />
             <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/2042px-WhatsApp.svg.png" alt="WhatsApp" className="h-6" />
          </div>
          <p className="text-2xl font-extrabold text-blue-700 tracking-wider">{siteConfig.paymentName}</p>
          <div className="p-2 bg-white inline-block rounded-lg shadow-inner">
             <img src={siteConfig.qrCodeUrl} alt="Payment QR Code" className="w-56 h-56 mx-auto" />
          </div>
        </div>

        <button
          type="button"
          onClick={() => alert('Checking payment status... (This is a demo)')}
          className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Check
        </button>
      </form>
    </div>
  );
};

export default AddFunds;
