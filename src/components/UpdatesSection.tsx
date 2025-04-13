import React from 'react';
import { Bell } from 'lucide-react';
import { Update } from '../types';

const updates: Update[] = [
  {
    date: '2025-03-15',
    title: 'Added European Schools',
    description: 'Added top MBA programs from France and Spain.'
  },
  {
    date: '2025-03-10',
    title: 'UK Schools Update',
    description: 'Added UK business schools data.'
  },
  {
    date: '2025-03-05',
    title: 'Launch',
    description: 'Initial launch with US MBA programs.'
  }
];

export default function UpdatesSection() {
  return (
    <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-blue-100">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-2">
          <Bell className="h-4 w-4 text-blue-600" />
          <h2 className="text-sm font-semibold text-gray-900">Latest Updates</h2>
        </div>
      </div>
      <div className="space-y-2">
        {updates.slice(0, 2).map((update, index) => (
          <div key={index} className="border-l-2 border-blue-200 pl-3 py-1">
            <div className="flex justify-between items-start">
              <p className="text-xs text-gray-600">
                <span className="font-medium text-gray-900">{update.title}</span> - {update.description}
              </p>
              <span className="text-xs text-gray-400 ml-2">{update.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}