import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import Button from '../components/Button';
import { PlusIcon, SearchIcon, FilterIcon } from 'lucide-react';
const DashboardPage: React.FC = () => {
  // Mock data for complaints
  const complaints = [{
    id: 'GR2025001',
    title: 'Water supply disruption in Sector 14',
    status: 'In Progress',
    date: '2025-05-20'
  }, {
    id: 'GR2025002',
    title: 'Street light not working near park',
    status: 'Assigned',
    date: '2025-05-19'
  }, {
    id: 'GR2025003',
    title: 'Garbage not collected for 3 days',
    status: 'Resolved',
    date: '2025-05-15'
  }, {
    id: 'GR2025004',
    title: 'Pothole on main road causing accidents',
    status: 'Pending',
    date: '2025-05-10'
  }];
  return <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-start">
          {/* Sidebar Navigation */}
          <aside className="w-full md:w-64 bg-white rounded-lg shadow mb-6 md:mb-0 md:mr-6">
            <nav className="p-4">
              <ul className="space-y-2">
                <li>
                  <Link to="/dashboard" className="block px-4 py-2 rounded-md bg-blue-50 text-[#007BFF] font-medium">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link to="/lodge-complaint" className="block px-4 py-2 rounded-md hover:bg-gray-100 text-gray-700">
                    Lodge Complaint
                  </Link>
                </li>
                <li>
                  <Link to="/complaints" className="block px-4 py-2 rounded-md hover:bg-gray-100 text-gray-700">
                    My Complaints
                  </Link>
                </li>
                <li>
                  <Link to="/feedback" className="block px-4 py-2 rounded-md hover:bg-gray-100 text-gray-700">
                    Feedback
                  </Link>
                </li>
                <li>
                  <Link to="/settings" className="block px-4 py-2 rounded-md hover:bg-gray-100 text-gray-700">
                    Settings
                  </Link>
                </li>
              </ul>
            </nav>
          </aside>
          {/* Main Content */}
          <main className="flex-grow bg-white rounded-lg shadow p-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <h1 className="text-2xl font-bold text-gray-800 mb-4 md:mb-0">
                Dashboard
              </h1>
              <Link to="/lodge-complaint">
                <Button variant="primary">
                  <PlusIcon size={18} className="mr-1" />
                  Lodge New Complaint
                </Button>
              </Link>
            </div>
            {/* Search and Filter */}
            <div className="mb-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-grow">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <SearchIcon size={18} className="text-gray-400" />
                  </div>
                  <input type="text" placeholder="Search complaints..." className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <Button variant="outline" className="flex items-center">
                  <FilterIcon size={18} className="mr-2" />
                  Filter
                </Button>
              </div>
            </div>
            {/* Recent Complaints */}
            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Recent Complaints
              </h2>
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
                    {complaints.map(complaint => <tr key={complaint.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {complaint.id}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {complaint.title}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${complaint.status === 'Resolved' ? 'bg-green-100 text-green-800' : complaint.status === 'In Progress' ? 'bg-blue-100 text-blue-800' : complaint.status === 'Assigned' ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-100 text-gray-800'}`}>
                            {complaint.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {complaint.date}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <Link to={`/complaints/${complaint.id}`} className="text-[#007BFF] hover:underline">
                            View Details
                          </Link>
                        </td>
                      </tr>)}
                  </tbody>
                </table>
              </div>
            </div>
          </main>
        </div>
      </div>
    </Layout>;
};
export default DashboardPage;