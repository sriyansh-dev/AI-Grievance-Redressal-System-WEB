import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import Button from '../components/Button';
import { GlobeIcon } from 'lucide-react';
const LanguageSelectionPage: React.FC = () => {
  const navigate = useNavigate();
  const languages = [{
    code: 'en',
    name: 'English'
  }, {
    code: 'hi',
    name: 'हिन्दी (Hindi)'
  }, {
    code: 'ta',
    name: 'தமிழ் (Tamil)'
  }, {
    code: 'te',
    name: 'తెలుగు (Telugu)'
  }, {
    code: 'bn',
    name: 'বাংলা (Bengali)'
  }, {
    code: 'mr',
    name: 'मराठी (Marathi)'
  }, {
    code: 'gu',
    name: 'ગુજરાતી (Gujarati)'
  }, {
    code: 'kn',
    name: 'ಕನ್ನಡ (Kannada)'
  }, {
    code: 'ml',
    name: 'മലയാളം (Malayalam)'
  }, {
    code: 'pa',
    name: 'ਪੰਜਾਬੀ (Punjabi)'
  }];
  const handleLanguageSelect = (code: string) => {
    console.log(`Selected language: ${code}`);
    navigate('/login');
  };
  return <Layout showHeader={false} showFooter={false}>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-[#007BFF] rounded-full flex items-center justify-center mx-auto mb-4">
              <GlobeIcon size={32} className="text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-800">
              Select Your Language
            </h1>
            <p className="text-gray-600 mt-2">
              Choose your preferred language to continue
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {languages.map(language => <button key={language.code} onClick={() => handleLanguageSelect(language.code)} className="flex items-center justify-center p-3 border border-gray-300 rounded-md hover:bg-gray-50 transition">
                {language.name}
              </button>)}
          </div>
          <Button variant="primary" fullWidth onClick={() => navigate('/login')}>
            Proceed with English
          </Button>
        </div>
      </div>
    </Layout>;
};
export default LanguageSelectionPage;