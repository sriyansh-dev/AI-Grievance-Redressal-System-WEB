import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import Button from '../components/Button';
import { FileTextIcon, ClipboardListIcon, HelpCircleIcon } from 'lucide-react';
const LandingPage: React.FC = () => {
  return <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#007BFF] to-blue-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                File a Grievance Today
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Jan Shikayat: Your voice matters. Submit and track grievances
                easily with our AI-powered system.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/lodge-complaint">
                  <Button variant="secondary" size="lg">
                    Lodge Now
                  </Button>
                </Link>
                <Link to="/complaints">
                  <Button variant="outline" size="lg" className="bg-white/10 text-white border-white/30 hover:bg-white/20">
                    Track Status
                  </Button>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img src="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=500&q=80" alt="Citizen services illustration" className="rounded-lg shadow-lg max-w-full h-auto" />
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileTextIcon size={32} className="text-[#007BFF]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Submit a Complaint</h3>
              <p className="text-gray-600">
                Lodge your grievance with details and supporting evidence like
                photos or videos.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-[#FF9933]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <ClipboardListIcon size={32} className="text-[#FF9933]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Track Progress</h3>
              <p className="text-gray-600">
                Monitor the status of your complaint in real-time with our
                transparent tracking system.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-[#2E8B57]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <HelpCircleIcon size={32} className="text-[#2E8B57]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Get Resolution</h3>
              <p className="text-gray-600">
                Receive updates and provide feedback on the resolution of your
                grievance.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to get started?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of citizens who have successfully resolved their
            grievances through Jan Shikayat.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/login">
              <Button variant="primary" size="lg">
                Sign In / Register
              </Button>
            </Link>
            <Link to="/lodge-complaint">
              <Button variant="secondary" size="lg">
                Continue as Guest
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>;
};
export default LandingPage;