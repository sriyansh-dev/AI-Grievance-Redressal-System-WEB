import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LanguageSelectionPage from './pages/LanguageSelectionPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import ComplaintFormPage from './pages/ComplaintFormPage';
import ComplaintStatusPage from './pages/ComplaintStatusPage';
import ComplaintDetailsPage from './pages/ComplaintDetailsPage';
import FeedbackPage from './pages/FeedbackPage';
import SettingsPage from './pages/SettingsPage';
import HelpPage from './pages/HelpPage';
import AboutPage from './pages/AboutPage';
export function App() {
  return <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/language" element={<LanguageSelectionPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/lodge-complaint" element={<ComplaintFormPage />} />
        <Route path="/complaints" element={<ComplaintStatusPage />} />
        <Route path="/complaints/:id" element={<ComplaintDetailsPage />} />
        <Route path="/feedback" element={<FeedbackPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>;
}