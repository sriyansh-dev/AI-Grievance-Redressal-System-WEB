import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon, XIcon, GlobeIcon } from 'lucide-react';
import LanguageSelector from './LanguageSelector';
const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLanguageSelector, setShowLanguageSelector] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const toggleLanguageSelector = () => {
    setShowLanguageSelector(!showLanguageSelector);
  };
  return <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-full bg-[#007BFF] flex items-center justify-center text-white font-bold">
            JS
          </div>
          <span className="text-xl font-bold text-gray-800">Jan Shikayat</span>
        </Link>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-700 hover:text-[#007BFF]">
            Home
          </Link>
          <Link to="/lodge-complaint" className="text-gray-700 hover:text-[#007BFF]">
            Lodge Complaint
          </Link>
          <Link to="/complaints" className="text-gray-700 hover:text-[#007BFF]">
            Track Status
          </Link>
          <Link to="/help" className="text-gray-700 hover:text-[#007BFF]">
            Help
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-[#007BFF]">
            About
          </Link>
          <button onClick={toggleLanguageSelector} className="flex items-center text-gray-700 hover:text-[#007BFF]">
            <GlobeIcon size={20} />
            <span className="ml-1">Language</span>
          </button>
          <Link to="/login" className="bg-[#007BFF] text-white px-4 py-2 rounded hover:bg-blue-600 transition">
            Login
          </Link>
        </nav>
        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && <nav className="md:hidden bg-white py-4 px-4 shadow-inner">
          <div className="flex flex-col space-y-4">
            <Link to="/" className="text-gray-700 hover:text-[#007BFF]" onClick={toggleMenu}>
              Home
            </Link>
            <Link to="/lodge-complaint" className="text-gray-700 hover:text-[#007BFF]" onClick={toggleMenu}>
              Lodge Complaint
            </Link>
            <Link to="/complaints" className="text-gray-700 hover:text-[#007BFF]" onClick={toggleMenu}>
              Track Status
            </Link>
            <Link to="/help" className="text-gray-700 hover:text-[#007BFF]" onClick={toggleMenu}>
              Help
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-[#007BFF]" onClick={toggleMenu}>
              About
            </Link>
            <button onClick={toggleLanguageSelector} className="flex items-center text-gray-700 hover:text-[#007BFF]">
              <GlobeIcon size={20} />
              <span className="ml-1">Language</span>
            </button>
            <Link to="/login" className="bg-[#007BFF] text-white px-4 py-2 rounded hover:bg-blue-600 transition text-center" onClick={toggleMenu}>
              Login
            </Link>
          </div>
        </nav>}
      {/* Language Selector Dropdown */}
      {showLanguageSelector && <div className="absolute right-4 top-16 bg-white shadow-lg rounded-md p-4 z-50">
          <LanguageSelector onClose={() => setShowLanguageSelector(false)} />
        </div>}
    </header>;
};
export default Header;