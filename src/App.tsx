import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import Home from './pages/Home';
import Signup from './pages/SignUp';
import Login from './pages/Login';
import './global.css'; // Import global styles
import './i18n'; // Import i18n configuration
import Footer from './components/Footer'; // Import Footer
import LanguageSwitcher from './components/LanguageSwitcher'; // Import LanguageSwitcher
import Info from './components/Info';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Team from './pages/Team';
import FAQ from './pages/FAQ';



function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Navbar */}
      <Navbar />
      <div id="google_translate_element"></div>
      <LanguageSwitcher />
      
      {/* Hero Section */}
      {/* Main Content */}
      <main className="flex-1 p-4 sm:p-6 md:p-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/features" element={<Features />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/info" element={<Info />} />
          <Route path="/team" element={<Team />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </main>
      
      {/* Footer */}
        <Footer />
    </div>
  );
}

export default App;

