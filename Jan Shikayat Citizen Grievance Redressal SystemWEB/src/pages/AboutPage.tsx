import React from 'react';
import Layout from '../components/Layout';
import { CheckCircleIcon, ShieldIcon, UsersIcon, TrendingUpIcon } from 'lucide-react';
const AboutPage: React.FC = () => {
  return <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="bg-gradient-to-r from-[#007BFF] to-blue-700 text-white rounded-lg shadow-lg p-8 mb-10">
            <h1 className="text-3xl font-bold mb-4">About Jan Shikayat</h1>
            <p className="text-xl opacity-90">
              AI-Powered Citizen Grievance Redressal System
            </p>
            <p className="mt-4">Version 1.0.0 | Released May 2025</p>
          </div>
          {/* Mission & Vision */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600 mb-6">
              Jan Shikayat aims to provide a transparent, efficient, and
              accessible platform for citizens to voice their concerns and get
              them resolved in a timely manner. We leverage artificial
              intelligence to streamline the grievance redressal process and
              ensure accountability at all levels of governance.
            </p>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Our Vision
            </h2>
            <p className="text-gray-600">
              To build a bridge between citizens and government services,
              fostering trust and improving the quality of public services
              through technology-driven solutions that empower every citizen to
              participate in governance.
            </p>
          </div>
          {/* Key Features */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <CheckCircleIcon size={20} className="text-[#007BFF]" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">
                    Multilingual Support
                  </h3>
                  <p className="text-gray-600">
                    Available in multiple Indian languages to ensure
                    accessibility for all citizens.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 bg-[#FF9933]/20 rounded-full flex items-center justify-center">
                    <ShieldIcon size={20} className="text-[#FF9933]" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">
                    Secure & Private
                  </h3>
                  <p className="text-gray-600">
                    End-to-end encryption and strict privacy controls to protect
                    your personal information.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 bg-[#2E8B57]/20 rounded-full flex items-center justify-center">
                    <TrendingUpIcon size={20} className="text-[#2E8B57]" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">
                    Real-time Tracking
                  </h3>
                  <p className="text-gray-600">
                    Monitor the status of your complaints in real-time with our
                    transparent tracking system.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <UsersIcon size={20} className="text-purple-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">
                    AI-Powered Routing
                  </h3>
                  <p className="text-gray-600">
                    Advanced AI technology ensures your complaint reaches the
                    right department quickly.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Developers & Legal */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Information
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Developed By
                </h3>
                <p className="text-gray-600">
                  Ministry of Technology, Government of India
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Contact
                </h3>
                <p className="text-gray-600">
                  Email: info@janshikayat.gov.in
                  <br />
                  Phone: 1800-XXX-XXXX
                  <br />
                  Address: Ministry of Technology, New Delhi, India
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Legal
                </h3>
                <div className="space-y-2">
                  <p>
                    <a href="#" className="text-[#007BFF] hover:underline">
                      Terms of Service
                    </a>
                  </p>
                  <p>
                    <a href="#" className="text-[#007BFF] hover:underline">
                      Privacy Policy
                    </a>
                  </p>
                  <p>
                    <a href="#" className="text-[#007BFF] hover:underline">
                      Data Usage Policy
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>;
};
export default AboutPage;