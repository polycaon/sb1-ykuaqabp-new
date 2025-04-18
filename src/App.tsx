import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import ProgramDetails from './pages/ProgramDetails';
import SecurityHeaders from './components/SecurityHeaders';
import SEOHead from './components/SEOHead';

function App() {
  // Block WordPress and other common attack paths
  const blockedPaths = [
    '/wp-admin',
    '/wp-login',
    '/wp-content',
    '/wordpress',
    '/admin',
    '/administrator',
    '/phpmyadmin',
    '/.env',
    '/config',
    '/backup',
    '/setup-config.php'
  ];

  const currentPath = window.location.pathname.toLowerCase();
  if (blockedPaths.some(path => currentPath.includes(path))) {
    return <Navigate to="/" replace />;
  }

  return (
    <Router>
      <SecurityHeaders />
      <SEOHead />
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/program/:type" element={<ProgramDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog/*" element={<Blog />} />
          {/* Catch any 404s and redirect to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;