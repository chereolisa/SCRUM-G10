import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import Home from './pages/Home';
import Signup from './pages/SignUp';
import Login from './pages/Login';
import LanguageSwitcher from './components/LanguageSwitcher'; // Import LanguageSwitcher

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Navbar */}
      <Navbar />
      
      {/* Main Content */}
      <main className="flex-1 p-4 sm:p-6 md:p-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4 sm:p-6 md:p-8 text-center">
        <p>© 2025 SCRUM G10</p>
      </footer>
      
      {/* Language Switcher at Bottom Right */}
      <LanguageSwitcher />
    </div>
  );
}

export default App;

