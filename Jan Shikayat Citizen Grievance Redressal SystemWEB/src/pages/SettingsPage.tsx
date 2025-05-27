import React, { useState } from 'react';
import Layout from '../components/Layout';
import Button from '../components/Button';
import { GlobeIcon, BellIcon, UserIcon, ShieldIcon, EyeIcon } from 'lucide-react';
const SettingsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('language');
  const renderTabContent = () => {
    switch (activeTab) {
      case 'language':
        return <LanguageSettings />;
      case 'accessibility':
        return <AccessibilitySettings />;
      case 'notifications':
        return <NotificationSettings />;
      case 'account':
        return <AccountSettings />;
      default:
        return <LanguageSettings />;
    }
  };
  return <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow">
          <h1 className="text-2xl font-bold text-gray-800 p-6 border-b">
            Settings
          </h1>
          <div className="flex flex-col md:flex-row">
            {/* Tabs */}
            <div className="w-full md:w-64 border-r">
              <nav className="p-4">
                <ul>
                  <li>
                    <button onClick={() => setActiveTab('language')} className={`flex items-center w-full px-4 py-2 rounded-md ${activeTab === 'language' ? 'bg-blue-50 text-[#007BFF]' : 'text-gray-700 hover:bg-gray-100'}`}>
                      <GlobeIcon size={18} className="mr-3" />
                      Language
                    </button>
                  </li>
                  <li>
                    <button onClick={() => setActiveTab('accessibility')} className={`flex items-center w-full px-4 py-2 rounded-md ${activeTab === 'accessibility' ? 'bg-blue-50 text-[#007BFF]' : 'text-gray-700 hover:bg-gray-100'}`}>
                      <EyeIcon size={18} className="mr-3" />
                      Accessibility
                    </button>
                  </li>
                  <li>
                    <button onClick={() => setActiveTab('notifications')} className={`flex items-center w-full px-4 py-2 rounded-md ${activeTab === 'notifications' ? 'bg-blue-50 text-[#007BFF]' : 'text-gray-700 hover:bg-gray-100'}`}>
                      <BellIcon size={18} className="mr-3" />
                      Notifications
                    </button>
                  </li>
                  <li>
                    <button onClick={() => setActiveTab('account')} className={`flex items-center w-full px-4 py-2 rounded-md ${activeTab === 'account' ? 'bg-blue-50 text-[#007BFF]' : 'text-gray-700 hover:bg-gray-100'}`}>
                      <UserIcon size={18} className="mr-3" />
                      Account
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
            {/* Tab Content */}
            <div className="flex-grow p-6">{renderTabContent()}</div>
          </div>
        </div>
      </div>
    </Layout>;
};
const LanguageSettings: React.FC = () => {
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
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  return <div>
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Language Preferences
      </h2>
      <p className="text-gray-600 mb-6">
        Select your preferred language for the application interface.
      </p>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-medium mb-2">
          Select Language
        </label>
        <select value={selectedLanguage} onChange={e => setSelectedLanguage(e.target.value)} className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
          {languages.map(language => <option key={language.code} value={language.code}>
              {language.name}
            </option>)}
        </select>
      </div>
      <Button variant="primary">Save Changes</Button>
    </div>;
};
const AccessibilitySettings: React.FC = () => {
  const [highContrast, setHighContrast] = useState(false);
  const [largeText, setLargeText] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [screenReader, setScreenReader] = useState(false);
  return <div>
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Accessibility Options
      </h2>
      <p className="text-gray-600 mb-6">
        Customize your experience with these accessibility settings.
      </p>
      <div className="space-y-4">
        <div className="flex items-center">
          <input id="high-contrast" type="checkbox" className="h-4 w-4 text-[#007BFF] focus:ring-blue-500 border-gray-300 rounded" checked={highContrast} onChange={() => setHighContrast(!highContrast)} />
          <label htmlFor="high-contrast" className="ml-2 block text-gray-700">
            High Contrast Mode
          </label>
        </div>
        <div className="flex items-center">
          <input id="large-text" type="checkbox" className="h-4 w-4 text-[#007BFF] focus:ring-blue-500 border-gray-300 rounded" checked={largeText} onChange={() => setLargeText(!largeText)} />
          <label htmlFor="large-text" className="ml-2 block text-gray-700">
            Large Text
          </label>
        </div>
        <div className="flex items-center">
          <input id="reduce-motion" type="checkbox" className="h-4 w-4 text-[#007BFF] focus:ring-blue-500 border-gray-300 rounded" checked={reduceMotion} onChange={() => setReduceMotion(!reduceMotion)} />
          <label htmlFor="reduce-motion" className="ml-2 block text-gray-700">
            Reduce Motion
          </label>
        </div>
        <div className="flex items-center">
          <input id="screen-reader" type="checkbox" className="h-4 w-4 text-[#007BFF] focus:ring-blue-500 border-gray-300 rounded" checked={screenReader} onChange={() => setScreenReader(!screenReader)} />
          <label htmlFor="screen-reader" className="ml-2 block text-gray-700">
            Screen Reader Support
          </label>
        </div>
      </div>
      <div className="mt-6">
        <label className="block text-gray-700 text-sm font-medium mb-2">
          Text Size
        </label>
        <input type="range" min="100" max="200" step="10" defaultValue="100" className="w-full" />
        <div className="flex justify-between text-sm text-gray-500">
          <span>A</span>
          <span>AA</span>
          <span>AAA</span>
        </div>
      </div>
      <div className="mt-6">
        <Button variant="primary">Save Changes</Button>
      </div>
    </div>;
};
const NotificationSettings: React.FC = () => {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(false);
  const [statusUpdates, setStatusUpdates] = useState(true);
  const [feedbackReminders, setFeedbackReminders] = useState(true);
  return <div>
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Notification Preferences
      </h2>
      <p className="text-gray-600 mb-6">
        Control how and when you receive notifications about your grievances.
      </p>
      <div className="mb-6">
        <h3 className="font-medium text-gray-700 mb-3">Notification Methods</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input id="email-notifications" type="checkbox" className="h-4 w-4 text-[#007BFF] focus:ring-blue-500 border-gray-300 rounded" checked={emailNotifications} onChange={() => setEmailNotifications(!emailNotifications)} />
              <label htmlFor="email-notifications" className="ml-2 block text-gray-700">
                Email Notifications
              </label>
            </div>
            <input type="email" className="w-48 px-2 py-1 border border-gray-300 rounded-md text-sm" placeholder="your@email.com" disabled={!emailNotifications} />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input id="sms-notifications" type="checkbox" className="h-4 w-4 text-[#007BFF] focus:ring-blue-500 border-gray-300 rounded" checked={smsNotifications} onChange={() => setSmsNotifications(!smsNotifications)} />
              <label htmlFor="sms-notifications" className="ml-2 block text-gray-700">
                SMS Notifications
              </label>
            </div>
            <input type="tel" className="w-48 px-2 py-1 border border-gray-300 rounded-md text-sm" placeholder="+91 12345 67890" disabled={!smsNotifications} />
          </div>
        </div>
      </div>
      <div className="mb-6">
        <h3 className="font-medium text-gray-700 mb-3">Notification Types</h3>
        <div className="space-y-4">
          <div className="flex items-center">
            <input id="status-updates" type="checkbox" className="h-4 w-4 text-[#007BFF] focus:ring-blue-500 border-gray-300 rounded" checked={statusUpdates} onChange={() => setStatusUpdates(!statusUpdates)} />
            <label htmlFor="status-updates" className="ml-2 block text-gray-700">
              Status Updates
            </label>
          </div>
          <div className="flex items-center">
            <input id="feedback-reminders" type="checkbox" className="h-4 w-4 text-[#007BFF] focus:ring-blue-500 border-gray-300 rounded" checked={feedbackReminders} onChange={() => setFeedbackReminders(!feedbackReminders)} />
            <label htmlFor="feedback-reminders" className="ml-2 block text-gray-700">
              Feedback Reminders
            </label>
          </div>
        </div>
      </div>
      <Button variant="primary">Save Changes</Button>
    </div>;
};
const AccountSettings: React.FC = () => {
  return <div>
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Account Management
      </h2>
      <p className="text-gray-600 mb-6">
        Update your personal information and manage your account settings.
      </p>
      <div className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">
            Full Name
          </label>
          <input id="name" type="text" className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" defaultValue="John Doe" />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">
            Email Address
          </label>
          <input id="email" type="email" className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" defaultValue="john.doe@example.com" />
        </div>
        <div>
          <label htmlFor="phone" className="block text-gray-700 text-sm font-medium mb-2">
            Phone Number
          </label>
          <input id="phone" type="tel" className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" defaultValue="+91 98765 43210" />
        </div>
        <div className="pt-4 border-t">
          <h3 className="font-medium text-gray-700 mb-4 flex items-center">
            <ShieldIcon size={18} className="mr-2" />
            Security
          </h3>
          <Button variant="outline" className="mb-4">
            Change Password
          </Button>
          <div>
            <label htmlFor="two-factor" className="flex items-center">
              <input id="two-factor" type="checkbox" className="h-4 w-4 text-[#007BFF] focus:ring-blue-500 border-gray-300 rounded" />
              <span className="ml-2 block text-gray-700">
                Enable Two-Factor Authentication
              </span>
            </label>
          </div>
        </div>
        <div className="flex space-x-4 pt-4">
          <Button variant="primary">Save Changes</Button>
          <Button variant="danger">Delete Account</Button>
        </div>
      </div>
    </div>;
};
export default SettingsPage;