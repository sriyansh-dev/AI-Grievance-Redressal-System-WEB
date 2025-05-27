import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import Button from '../components/Button';
import { SearchIcon, FilterIcon, SortAscIcon } from 'lucide-react';
const ComplaintStatusPage: React.FC = () => {
  // Mock data for complaints
  const complaints = [{
    id: 'GR2025001',
    title: 'Water supply disruption in Sector 14',
    status: 'In Progress',
    date: '2025-05-20',
    department: 'Water Department',
    priority: 'High'
  }, {
    id: 'GR2025002',
    title: 'Street light not working near park',
    status: 'Assigned',
    date: '2025-05-19',
    department: 'Electricity Department',
    priority: 'Medium'
  }, {
    id: 'GR2025003',
    title: 'Garbage not collected for 3 days',
    status: 'Resolved',
    date: '2025-05-15',
    department: 'Sanitation Department',
    priority: 'Medium'
  }, {
    id: 'GR2025004',
    title: 'Pothole on main road causing accidents',
    status: 'Pending',
    date: '2025-05-10',
    department: 'Roads Department',
    priority: 'High'
  }, {
    id: 'GR2025005',
    title: 'Noise pollution from nearby construction',
    status: 'Under Review',
    date: '2025-05-08',
    department: 'Pollution Control Board',
    priority: 'Low'
  }];
  const [searchTerm, setSearchTerm] = useState('');
  const filteredComplaints = complaints.filter(complaint => complaint.id.toLowerCase().includes(searchTerm.toLowerCase()) || complaint.title.toLowerCase().includes(searchTerm.toLowerCase()) || complaint.status.toLowerCase().includes(searchTerm.toLowerCase()));
  return <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">
            My Complaints
          </h1>
          {/* Search and Filter */}
          <div className="mb-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <SearchIcon size={18} className="text-gray-400" />
                </div>
                <input type="text" placeholder="Search by ID, title, or status..." className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
              </div>
              <div className="flex gap-2">
                <Button variant="outline" className="flex items-center">
                  <FilterIcon size={18} className="mr-2" />
                  Filter
                </Button>
                <Button variant="outline" className="flex items-center">
                  <SortAscIcon size={18} className="mr-2" />
                  Sort
                </Button>
              </div>
            </div>
          </div>
          {/* Complaints Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    ID
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Title
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Department
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredComplaints.length > 0 ? filteredComplaints.map(complaint => <tr key={complaint.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {complaint.id}
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">
                        {complaint.title}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {complaint.department}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${complaint.status === 'Resolved' ? 'bg-green-100 text-green-800' : complaint.status === 'In Progress' ? 'bg-blue-100 text-blue-800' : complaint.status === 'Assigned' ? 'bg-yellow-100 text-yellow-800' : complaint.status === 'Under Review' ? 'bg-purple-100 text-purple-800' : 'bg-gray-100 text-gray-800'}`}>
                          {complaint.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {complaint.date}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600">
                        <Link to={`/complaints/${complaint.id}`} className="text-[#007BFF] hover:underline">
                          View Details
                        </Link>
                      </td>
                    </tr>) : <tr>
                    <td colSpan={6} className="px-6 py-4 text-center text-gray-500">
                      No complaints found matching your search.
                    </td>
                  </tr>}
              </tbody>
            </table>
          </div>
          {/* Pagination */}
          <div className="mt-6 flex justify-between items-center">
            <p className="text-sm text-gray-700">
              Showing <span className="font-medium">1</span> to{' '}
              <span className="font-medium">{filteredComplaints.length}</span>{' '}
              of{' '}
              <span className="font-medium">{filteredComplaints.length}</span>{' '}
              results
            </p>
            <div className="flex space-x-2">
              <Button variant="outline" disabled>
                Previous
              </Button>
              <Button variant="outline">Next</Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>;
};
export default ComplaintStatusPage;