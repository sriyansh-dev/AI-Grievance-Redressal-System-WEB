import React, { useState } from 'react';
import Layout from '../components/Layout';
import { SearchIcon, ChevronDownIcon, ChevronUpIcon, PhoneIcon, MailIcon, MessageSquareIcon } from 'lucide-react';
import Button from '../components/Button';
const HelpPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  // FAQ data
  const faqs = [{
    question: 'How do I lodge a new complaint?',
    answer: "To lodge a new complaint, log in to your account and click on the 'Lodge Complaint' button. Fill in the required details such as title, description, category, and location. You can also attach photos or videos as evidence. Once submitted, you'll receive a complaint ID for tracking."
  }, {
    question: 'How can I track the status of my complaint?',
    answer: "You can track your complaint by clicking on the 'Track Status' option in the navigation menu. Enter your complaint ID or browse through your list of complaints. Click on any complaint to view its current status, updates, and timeline."
  }, {
    question: "What if I'm not satisfied with the resolution?",
    answer: "If you're not satisfied with the resolution, you can provide feedback when prompted or click the 'Escalate' button on the complaint details page. This will bring your complaint to the attention of higher authorities for review."
  }, {
    question: 'Can I lodge a complaint without creating an account?',
    answer: 'Yes, you can lodge a complaint as a guest without creating an account. However, creating an account allows you to easily track all your complaints, receive notifications, and provide feedback.'
  }, {
    question: 'How long does it typically take to resolve a complaint?',
    answer: 'Resolution time varies depending on the nature and complexity of the complaint. Simple issues may be resolved within 3-7 days, while complex matters might take 2-3 weeks. You can always check the real-time status of your complaint in the system.'
  }, {
    question: 'What information should I include when lodging a complaint?',
    answer: 'For effective resolution, include a clear title, detailed description of the issue, accurate location, relevant category, and any supporting evidence like photos or videos. The more specific information you provide, the faster and more effectively your complaint can be addressed.'
  }, {
    question: 'How do I change my language preferences?',
    answer: "You can change your language preferences by going to the Settings page and selecting the Language tab. Choose your preferred language from the dropdown menu and click 'Save Changes'."
  }];
  const filteredFaqs = faqs.filter(faq => faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || faq.answer.toLowerCase().includes(searchTerm.toLowerCase()));
  return <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Help & Support
          </h1>
          {/* Search */}
          <div className="mb-10">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <SearchIcon size={20} className="text-gray-400" />
              </div>
              <input type="text" placeholder="Search for help topics..." className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
            </div>
          </div>
          {/* FAQs */}
          <div className="bg-white rounded-lg shadow-sm mb-10">
            <h2 className="text-xl font-semibold text-gray-800 p-6 border-b">
              Frequently Asked Questions
            </h2>
            <div className="divide-y">
              {filteredFaqs.length > 0 ? filteredFaqs.map((faq, index) => <FaqItem key={index} question={faq.question} answer={faq.answer} />) : <div className="p-6 text-center text-gray-500">
                  No FAQ matches your search. Try different keywords or contact
                  support.
                </div>}
            </div>
          </div>
          {/* Contact Support */}
          <div className="bg-white rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold text-gray-800 p-6 border-b">
              Contact Support
            </h2>
            <div className="p-6">
              <p className="text-gray-600 mb-6">
                Can't find what you're looking for? Our support team is here to
                help you.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <PhoneIcon size={24} className="text-[#007BFF]" />
                  </div>
                  <h3 className="font-semibold mb-2">Call Us</h3>
                  <p className="text-gray-600 mb-3">1800-XXX-XXXX</p>
                  <p className="text-sm text-gray-500">
                    Available 9am - 6pm, Mon-Sat
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <div className="w-12 h-12 bg-[#FF9933]/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <MailIcon size={24} className="text-[#FF9933]" />
                  </div>
                  <h3 className="font-semibold mb-2">Email Us</h3>
                  <p className="text-gray-600 mb-3">
                    support@janshikayat.gov.in
                  </p>
                  <p className="text-sm text-gray-500">
                    We'll respond within 24 hours
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <div className="w-12 h-12 bg-[#2E8B57]/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <MessageSquareIcon size={24} className="text-[#2E8B57]" />
                  </div>
                  <h3 className="font-semibold mb-2">Live Chat</h3>
                  <p className="text-gray-600 mb-3">
                    Chat with our support team
                  </p>
                  <Button variant="primary" size="sm">
                    Start Chat
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>;
};
interface FaqItemProps {
  question: string;
  answer: string;
}
const FaqItem: React.FC<FaqItemProps> = ({
  question,
  answer
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return <div className="border-gray-100">
      <button className="flex justify-between items-center w-full p-6 text-left" onClick={() => setIsOpen(!isOpen)}>
        <h3 className="font-medium text-gray-800">{question}</h3>
        {isOpen ? <ChevronUpIcon size={20} className="text-gray-500" /> : <ChevronDownIcon size={20} className="text-gray-500" />}
      </button>
      {isOpen && <div className="px-6 pb-6 pt-0">
          <p className="text-gray-600">{answer}</p>
        </div>}
    </div>;
};
export default HelpPage;