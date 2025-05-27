import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import Button from '../components/Button';
import { StarIcon, CheckCircleIcon } from 'lucide-react';
const FeedbackPage: React.FC = () => {
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [comment, setComment] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  // Mock complaint data for feedback
  const complaint = {
    id: 'GR2025003',
    title: 'Garbage not collected for 3 days',
    resolvedDate: '2025-05-15',
    department: 'Sanitation Department'
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Submit feedback logic would go here
    setIsSubmitted(true);
  };
  return <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow p-6">
            {!isSubmitted ? <>
                <h1 className="text-2xl font-bold text-gray-800 mb-6">
                  Provide Feedback
                </h1>
                {/* Complaint Info */}
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <h2 className="font-semibold text-gray-800 mb-2">
                    Complaint Details
                  </h2>
                  <p className="text-gray-600 mb-1">ID: {complaint.id}</p>
                  <p className="text-gray-600 mb-1">Title: {complaint.title}</p>
                  <p className="text-gray-600 mb-1">
                    Resolved on: {complaint.resolvedDate}
                  </p>
                  <p className="text-gray-600">
                    Department: {complaint.department}
                  </p>
                </div>
                <form onSubmit={handleSubmit}>
                  {/* Rating */}
                  <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-medium mb-3">
                      How satisfied are you with the resolution?
                    </label>
                    <div className="flex items-center">
                      {[1, 2, 3, 4, 5].map(star => <button key={star} type="button" onClick={() => setRating(star)} onMouseEnter={() => setHoveredRating(star)} onMouseLeave={() => setHoveredRating(0)} className="p-1 focus:outline-none">
                          <StarIcon size={32} className={`${(hoveredRating || rating) >= star ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
                        </button>)}
                      <span className="ml-2 text-gray-600">
                        {rating > 0 ? `${rating} out of 5` : 'Select rating'}
                      </span>
                    </div>
                  </div>
                  {/* Comment */}
                  <div className="mb-6">
                    <label htmlFor="comment" className="block text-gray-700 text-sm font-medium mb-2">
                      Additional Comments (Optional)
                    </label>
                    <textarea id="comment" rows={4} className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="Share your experience with the resolution process..." value={comment} onChange={e => setComment(e.target.value)}></textarea>
                  </div>
                  {/* Submit Button */}
                  <div className="flex justify-end space-x-4">
                    <Button variant="outline" onClick={() => navigate('/complaints')}>
                      Cancel
                    </Button>
                    <Button type="submit" variant="primary" disabled={rating === 0}>
                      Submit Feedback
                    </Button>
                  </div>
                </form>
              </> : <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircleIcon size={32} className="text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  Thank You for Your Feedback!
                </h2>
                <p className="text-gray-600 mb-6">
                  Your feedback helps us improve our services for all citizens.
                </p>
                <Button variant="primary" onClick={() => navigate('/dashboard')}>
                  Back to Dashboard
                </Button>
              </div>}
          </div>
        </div>
      </div>
    </Layout>;
};
export default FeedbackPage;