import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../components/Layout';
import Button from '../components/Button';
import { ArrowLeftIcon, AlertCircleIcon, MessageSquareIcon, FileTextIcon, ImageIcon, ExternalLinkIcon } from 'lucide-react';
const ComplaintDetailsPage: React.FC = () => {
  const {
    id
  } = useParams<{
    id: string;
  }>();
  // Mock complaint data
  const complaint = {
    id: id || 'GR2025001',
    title: 'Water supply disruption in Sector 14',
    description: 'There has been no water supply in Sector 14 for the past 3 days. This is causing severe inconvenience to all residents. Multiple calls to the water department have gone unanswered.',
    category: 'Water Supply',
    department: 'Water Department',
    location: 'Sector 14, Block C, Near Community Park',
    status: 'In Progress',
    priority: 'High',
    dateSubmitted: '2025-05-20',
    lastUpdated: '2025-05-22',
    photos: ['https://images.unsplash.com/photo-1583898350903-99fa829dad3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'],
    timeline: [{
      date: '2025-05-20',
      status: 'Submitted',
      description: 'Complaint registered in the system'
    }, {
      date: '2025-05-21',
      status: 'Assigned',
      description: 'Assigned to Water Department'
    }, {
      date: '2025-05-22',
      status: 'In Progress',
      description: 'Field team dispatched for inspection'
    }]
  };
  return <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow overflow-hidden">
          {/* Header */}
          <div className="bg-[#007BFF] text-white p-6">
            <div className="flex items-center mb-4">
              <Link to="/complaints" className="mr-4">
                <ArrowLeftIcon size={20} />
              </Link>
              <h1 className="text-2xl font-bold">Complaint Details</h1>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between">
              <div>
                <p className="text-sm opacity-90">
                  Complaint ID: {complaint.id}
                </p>
                <h2 className="text-xl font-semibold mt-2">
                  {complaint.title}
                </h2>
              </div>
              <div className="mt-4 sm:mt-0">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white text-[#007BFF]">
                  {complaint.status}
                </span>
              </div>
            </div>
          </div>
          {/* Content */}
          <div className="p-6">
            {/* Details Section */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Details
              </h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 mb-6">{complaint.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Category</p>
                    <p className="font-medium">{complaint.category}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Department</p>
                    <p className="font-medium">{complaint.department}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="font-medium">{complaint.location}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Priority</p>
                    <p className="font-medium">{complaint.priority}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Submitted On</p>
                    <p className="font-medium">{complaint.dateSubmitted}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Last Updated</p>
                    <p className="font-medium">{complaint.lastUpdated}</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Photos/Evidence */}
            {complaint.photos.length > 0 && <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Photos/Evidence
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {complaint.photos.map((photo, index) => <div key={index} className="relative">
                      <img src={photo} alt={`Evidence ${index + 1}`} className="w-full h-48 object-cover rounded-lg" />
                      <button className="absolute bottom-2 right-2 bg-white p-1 rounded shadow">
                        <ExternalLinkIcon size={16} />
                      </button>
                    </div>)}
                </div>
              </div>}
            {/* Timeline */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Timeline
              </h3>
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-3 top-5 bottom-0 w-0.5 bg-gray-200"></div>
                {/* Timeline events */}
                <div className="space-y-6">
                  {complaint.timeline.map((event, index) => <div key={index} className="relative flex gap-4">
                      <div className={`w-6 h-6 rounded-full mt-1 flex-shrink-0 ${event.status === 'Submitted' ? 'bg-blue-100 text-blue-600' : event.status === 'Assigned' ? 'bg-yellow-100 text-yellow-600' : event.status === 'In Progress' ? 'bg-purple-100 text-purple-600' : event.status === 'Resolved' ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-600'}`}></div>
                      <div>
                        <p className="font-medium">{event.status}</p>
                        <p className="text-sm text-gray-500">{event.date}</p>
                        <p className="mt-1 text-gray-700">
                          {event.description}
                        </p>
                      </div>
                    </div>)}
                </div>
              </div>
            </div>
            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" className="flex items-center">
                <MessageSquareIcon size={18} className="mr-2" />
                Add Comment
              </Button>
              <Button variant="outline" className="flex items-center">
                <FileTextIcon size={18} className="mr-2" />
                Add Information
              </Button>
              <Button variant="secondary" className="flex items-center">
                <AlertCircleIcon size={18} className="mr-2" />
                Escalate
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>;
};
export default ComplaintDetailsPage;