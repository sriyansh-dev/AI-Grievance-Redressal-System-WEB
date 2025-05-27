import React from 'react';
interface LanguageSelectorProps {
  onClose?: () => void;
}
const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  onClose
}) => {
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
    if (onClose) onClose();
  };
  return <div className="w-64">
      <h3 className="font-semibold text-gray-800 mb-2">Select Language</h3>
      <ul className="space-y-1">
        {languages.map(language => <li key={language.code}>
            <button onClick={() => handleLanguageSelect(language.code)} className="w-full text-left px-3 py-2 rounded hover:bg-gray-100 transition">
              {language.name}
            </button>
          </li>)}
      </ul>
    </div>;
};
export default LanguageSelector;