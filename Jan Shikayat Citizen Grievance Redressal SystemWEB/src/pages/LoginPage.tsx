import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import Button from '../components/Button';
import { UserIcon, LockIcon, PhoneIcon, MailIcon } from 'lucide-react';
const LoginPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/dashboard');
  };
  const handleGuestAccess = () => {
    navigate('/lodge-complaint');
  };
  return <Layout>
      <div className="min-h-[calc(100vh-200px)] flex items-center justify-center bg-gray-50 py-12 px-4">
        <div className="w-full max-w-md">
          <div className="bg-white shadow rounded-lg p-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">
                {isLogin ? 'Sign In' : 'Create Account'}
              </h2>
              <p className="text-gray-600 mt-2">
                {isLogin ? 'Access your account to track and manage grievances' : 'Register to track and manage your grievances'}
              </p>
            </div>
            <form onSubmit={handleSubmit}>
              {!isLogin && <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <UserIcon size={18} className="text-gray-400" />
                    </div>
                    <input id="name" type="text" className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="Your full name" required />
                  </div>
                </div>}
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">
                  Email or Phone
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <MailIcon size={18} className="text-gray-400" />
                  </div>
                  <input id="email" type="text" className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="Email address or phone number" required />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-2">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <LockIcon size={18} className="text-gray-400" />
                  </div>
                  <input id="password" type="password" className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="Password" required />
                </div>
              </div>
              {isLogin && <div className="flex items-center justify-end mb-6">
                  <Link to="/forgot-password" className="text-sm text-[#007BFF] hover:underline">
                    Forgot Password?
                  </Link>
                </div>}
              <Button type="submit" variant="primary" fullWidth>
                {isLogin ? 'Sign In' : 'Register'}
              </Button>
            </form>
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">
                    {isLogin ? "Don't have an account?" : 'Already have an account?'}
                  </span>
                </div>
              </div>
              <div className="mt-6">
                <Button variant="outline" fullWidth onClick={() => setIsLogin(!isLogin)}>
                  {isLogin ? 'Create New Account' : 'Sign In'}
                </Button>
              </div>
              <div className="mt-4">
                <Button variant="secondary" fullWidth onClick={handleGuestAccess}>
                  Continue as Guest
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>;
};
export default LoginPage;