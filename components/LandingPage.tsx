import React, { useState } from 'react';
import Header from './Header';

interface LandingPageProps {
  onLogin: (username: string, mobileNumber: string) => void;
}

const LoginPage: React.FC<LandingPageProps> = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // The mobile number will be used for new signups.
        if (username) {
            onLogin(username, mobileNumber);
        } else {
            alert('Please enter a username.');
        }
    }
  return (
    <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-1">We provide Social Media Marketing services</h2>
      <p className="text-gray-600 mb-6">FastGrow is a Social Media Marketing agency providing all kind of SMM. Our experts are ready to help you reach more people through Social Media.</p>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500" 
            id="username" 
            type="text" 
            placeholder="Username (try 'admin')" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
         <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mobile">
            Mobile Number
          </label>
          <input 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500" 
            id="mobile" 
            type="tel" 
            placeholder="Enter if signing up" 
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
          />
           <p className="text-xs text-gray-500 mt-1">Required for new user sign-up.</p>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500" 
            id="password" 
            type="password" 
            placeholder="******************" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="flex items-center justify-between">
            <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
              Forgot Password?
            </a>
          </div>
        </div>
        <div className="mb-4 flex items-center">
            <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">Remember me</label>
        </div>
        <div className="flex flex-col items-center justify-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg w-full focus:outline-none focus:shadow-outline transition-colors" type="submit">
            Sign In
          </button>
          <p className="text-sm text-gray-600 mt-4">
            Do not have an account? <a href="#" className="font-bold text-blue-600 hover:text-blue-700">Sign up</a>
          </p>
        </div>
      </form>
    </div>
  );
};

const Advantages: React.FC = () => {
    const advantages = [
        { title: 'Amazing services', description: 'The quality of our SMM services will pleasantly surprise you.' },
        { title: 'Multiple payment options', description: 'Pick from a great selection of payment methods we offer.' },
        { title: 'Good prices', description: 'All SMM services on our panel are extra cheap.' },
        { title: 'Very fast delivery', description: 'Fast order processing on our panel ensures quick results.' },
    ];
    return (
        <div className="py-12 md:py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-extrabold text-gray-900">Our advantages</h2>
                <p className="mt-4 text-lg text-gray-600">Learn why using our panel is the best & cheapest way to get popular online.</p>
                <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {advantages.map(adv => (
                        <div key={adv.title} className="bg-slate-50 p-6 rounded-lg shadow-md border border-slate-200">
                            <h3 className="text-lg font-bold text-gray-900">{adv.title}</h3>
                            <p className="mt-2 text-base text-gray-600">{adv.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const HowTo: React.FC = () => {
    const steps = [
        { number: 1, title: 'Sign up', description: 'Register into our panel, fill in all the necessary data and get ready to be famous.' },
        { number: 2, title: 'Add funds', description: 'Add money to your SMM account and be ready to rise like a star and give your business a new height.' },
        { number: 3, title: 'Choose service', description: 'Select a service and place an order and get ready to start receiving more publicity on social media.' },
        { number: 4, title: 'Enjoy popularity', description: 'We will create and proceed with an order and inform you once done. Enjoy and stay with us.' },
    ];
    return (
        <div className="py-12 md:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                     <h2 className="text-3xl font-extrabold text-gray-900">How to place orders on our panel</h2>
                     <p className="mt-4 text-lg text-gray-600">Check out the step-by-step tutorial on how to get started on our SMM panel.</p>
                </div>
                <div className="space-y-12">
                    {steps.map((step, index) => (
                        <div key={step.number} className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                            <div className="md:w-1/2 flex items-center justify-center">
                                <div className="text-8xl font-black text-slate-200">{step.number}</div>
                            </div>
                            <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-lg border border-slate-200">
                                <h3 className="text-xl font-bold text-blue-600 mb-2">{step.number}. {step.title}</h3>
                                <p className="text-gray-600">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};


const LandingPage: React.FC<LandingPageProps> = ({ onLogin }) => {
  return (
    <>
      <Header />
      <main>
        <div className="relative bg-blue-600">
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-blue-600 mix-blend-multiply" aria-hidden="true"></div>
            </div>
            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32 flex justify-center items-center">
                <LoginPage onLogin={onLogin} />
            </div>
        </div>
        <Advantages />
        <HowTo />
      </main>
    </>
  );
};

export default LandingPage;