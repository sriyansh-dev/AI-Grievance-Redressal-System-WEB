import React from 'react';
import { Link } from 'react-router-dom';
const Footer: React.FC = () => {
  return <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Jan Shikayat</h3>
            <p className="text-gray-300">
              AI-Powered Citizen Grievance Redressal System
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/lodge-complaint" className="text-gray-300 hover:text-white">
                  Lodge Complaint
                </Link>
              </li>
              <li>
                <Link to="/complaints" className="text-gray-300 hover:text-white">
                  Track Status
                </Link>
              </li>
              <li>
                <Link to="/help" className="text-gray-300 hover:text-white">
                  Help & Support
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <address className="text-gray-300 not-italic">
              <p>Email: support@janshikayat.gov.in</p>
              <p>Phone: 1800-XXX-XXXX</p>
              <p>Address: Ministry of Technology, New Delhi, India</p>
            </address>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-6 pt-6 flex flex-col md:flex-row justify-between">
          <p className="text-gray-400">
            &copy; 2025 Jan Shikayat. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="text-gray-400 hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-gray-400 hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;