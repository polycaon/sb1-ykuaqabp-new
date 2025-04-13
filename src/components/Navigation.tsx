import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GraduationCap, Home, Info, BookOpen } from 'lucide-react';

export default function Navigation() {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="bg-white/80 backdrop-blur-sm shadow-lg border-b border-blue-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-2 rounded-lg">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  MBA Fees Explorer
                </h1>
              </div>
            </Link>
          </div>
          
          <div className="flex space-x-8">
            <Link
              to="/"
              className={`flex items-center space-x-1 px-3 py-2 text-sm font-medium ${
                isActive('/') 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-500 hover:text-blue-600'
              }`}
            >
              <Home className="h-4 w-4" />
              <span>Home</span>
            </Link>
            
            <Link
              to="/about"
              className={`flex items-center space-x-1 px-3 py-2 text-sm font-medium ${
                isActive('/about') 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-500 hover:text-blue-600'
              }`}
            >
              <Info className="h-4 w-4" />
              <span>About</span>
            </Link>
            
            <Link
              to="/blog"
              className={`flex items-center space-x-1 px-3 py-2 text-sm font-medium ${
                isActive('/blog') 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-500 hover:text-blue-600'
              }`}
            >
              <BookOpen className="h-4 w-4" />
              <span>Blog</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}