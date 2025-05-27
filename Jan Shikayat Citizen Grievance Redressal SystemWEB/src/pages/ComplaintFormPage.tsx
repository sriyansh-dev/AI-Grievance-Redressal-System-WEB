import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import Button from '../components/Button';
import { FileTextIcon, MapPinIcon, CameraIcon, VideoIcon, MicIcon, CheckCircleIcon } from 'lucide-react';
const ComplaintFormPage: React.FC = () => {
  const navigate = useNavigate();
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [complaintId, setComplaintId] = useState('');
  const categories = ['Water Supply', 'Electricity', 'Roads & Infrastructure', 'Garbage Collection', 'Street Lighting', 'Public Transport', 'Law & Order', 'Public Health', 'Education', 'Others'];
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Generate a random complaint ID
    const newId = `GR${Math.floor(Math.random() * 9000) + 1000}`;
    setComplaintId(newId);
    setShowConfirmation(true);
  };
  const handleViewStatus = () => {
    navigate('/complaints');
  };
  return <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow p-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">
              Lodge a New Complaint
            </h1>
            {!showConfirmation ? <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="title" className="block text-gray-700 text-sm font-medium mb-2">
                    Complaint Title
                  </label>
                  <input type="text" id="title" className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="Brief title of your complaint" required />
                </div>
                <div className="mb-6">
                  <label htmlFor="category" className="block text-gray-700 text-sm font-medium mb-2">
                    Category
                  </label>
                  <select id="category" className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" required>
                    <option value="">Select a category</option>
                    {categories.map((category, index) => <option key={index} value={category}>
                        {category}
                      </option>)}
                  </select>
                </div>
                <div className="mb-6">
                  <label htmlFor="description" className="block text-gray-700 text-sm font-medium mb-2">
                    Description
                  </label>
                  <textarea id="description" rows={5} className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="Detailed description of your complaint" required></textarea>
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Location
                  </label>
                  <div className="flex items-center">
                    <div className="relative flex-grow">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <MapPinIcon size={18} className="text-gray-400" />
                      </div>
                      <input type="text" className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="Enter location or use current location" required />
                    </div>
                    <Button variant="outline" className="ml-2">
                      Map
                    </Button>
                  </div>
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Evidence (Optional)
                  </label>
                  <div className="flex flex-wrap gap-4">
                    <Button variant="outline" className="flex items-center">
                      <CameraIcon size={18} className="mr-2" />
                      Add Photo
                    </Button>
                    <Button variant="outline" className="flex items-center">
                      <VideoIcon size={18} className="mr-2" />
                      Add Video
                    </Button>
                    <Button variant="outline" className="flex items-center">
                      <MicIcon size={18} className="mr-2" />
                      Voice Input
                    </Button>
                  </div>
                </div>
                <div className="flex justify-end space-x-4">
                  <Button variant="outline" onClick={() => navigate(-1)}>
                    Cancel
                  </Button>
                  <Button type="submit" variant="primary">
                    Submit Complaint
                  </Button>
                </div>
              </form> : <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircleIcon size={32} className="text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  Complaint Submitted Successfully!
                </h2>
                <p className="text-gray-600 mb-4">
                  Your complaint has been registered with ID:{' '}
                  <span className="font-semibold">{complaintId}</span>
                </p>
                <p className="text-gray-600 mb-6">
                  You can track the status of your complaint using this ID. We
                  will notify you about updates.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button variant="primary" onClick={handleViewStatus}>
                    View Status
                  </Button>
                  <Button variant="outline" onClick={() => navigate('/')}>
                    Back to Home
                  </Button>
                </div>
              </div>}
          </div>
        </div>
      </div>
    </Layout>;
};
export default ComplaintFormPage;