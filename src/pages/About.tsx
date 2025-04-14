import React from 'react';
import { GraduationCap, Globe, DollarSign, Search } from 'lucide-react';

function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">About MBA Bucks</h1>
      
      <div className="prose prose-blue max-w-none">
        <p className="text-lg text-gray-600 mb-8">
          MBA Bucks is your comprehensive guide to MBA programs worldwide. We help prospective students make informed decisions by providing transparent, up-to-date information about program costs, durations, and locations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-blue-100">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-blue-100 rounded-lg">
                <GraduationCap className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900">Our Mission</h2>
            </div>
            <p className="text-gray-600">
              To provide transparent, accurate information about MBA programs worldwide, helping students make informed decisions about their education investment.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-blue-100">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Globe className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900">Global Coverage</h2>
            </div>
            <p className="text-gray-600">
              We cover MBA programs from top institutions across the Americas, Europe, Asia, and beyond, with regular updates to our database.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Why Choose Us?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-5 rounded-lg border border-blue-100">
            <Search className="h-5 w-5 text-blue-600 mb-3" />
            <h3 className="font-medium text-gray-900 mb-2">Comprehensive Data</h3>
            <p className="text-sm text-gray-600">
              Detailed information about program costs, duration, and locations.
            </p>
          </div>
          
          <div className="bg-white p-5 rounded-lg border border-blue-100">
            <DollarSign className="h-5 w-5 text-blue-600 mb-3" />
            <h3 className="font-medium text-gray-900 mb-2">Fee Transparency</h3>
            <p className="text-sm text-gray-600">
              Clear breakdown of tuition fees with currency conversion.
            </p>
          </div>
          
          <div className="bg-white p-5 rounded-lg border border-blue-100">
            <Globe className="h-5 w-5 text-blue-600 mb-3" />
            <h3 className="font-medium text-gray-900 mb-2">Global Perspective</h3>
            <p className="text-sm text-gray-600">
              Coverage of MBA programs from around the world.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;