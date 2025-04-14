import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import ProgramDetails from './pages/ProgramDetails';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/program/:type" element={<ProgramDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        
        <footer className="bg-white/80 backdrop-blur-sm py-4 border-t border-indigo-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-gray-500 text-sm">
              © 2025 Cost of MBA. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;