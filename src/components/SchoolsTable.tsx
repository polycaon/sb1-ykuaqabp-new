import React, { useState } from 'react';
import { ArrowUpDown, Building2, MapPin, Flag, Clock, DollarSign } from 'lucide-react';
import { School } from '../types';
import { formatCurrency } from '../utils/currency';

interface SchoolsTableProps {
  schools: School[];
}

type SortField = 'name' | 'city' | 'state' | 'country' | 'duration' | 'tuitionFee';
type SortDirection = 'asc' | 'desc';

export default function SchoolsTable({ schools }: SchoolsTableProps) {
  const [sortField, setSortField] = useState<SortField>('name');
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc');
  const [showUSD, setShowUSD] = useState(true);

  const handleSort = (field: SortField) => {
    if (field === sortField) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const sortedSchools = [...schools].sort((a, b) => {
    const multiplier = sortDirection === 'asc' ? 1 : -1;
    
    if (sortField === 'tuitionFee') {
      const feeA = typeof a.tuition_fee === 'number' ? a.tuition_fee : 0;
      const feeB = typeof b.tuition_fee === 'number' ? b.tuition_fee : 0;
      return (feeA - feeB) * multiplier;
    }
    
    const fieldA = a[sortField] || '';
    const fieldB = b[sortField] || '';

    if (typeof fieldA === 'number' && typeof fieldB === 'number') {
      return (fieldA - fieldB) * multiplier;
    }
    return String(fieldA).localeCompare(String(fieldB)) * multiplier;
  });

  const getIcon = (field: string) => {
    switch (field) {
      case 'name':
        return <Building2 className="h-4 w-4" />;
      case 'city':
      case 'state':
        return <MapPin className="h-4 w-4" />;
      case 'country':
        return <Flag className="h-4 w-4" />;
      case 'duration':
        return <Clock className="h-4 w-4" />;
      case 'tuitionFee':
        return <DollarSign className="h-4 w-4" />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <button
          onClick={() => setShowUSD(!showUSD)}
          className="text-sm text-blue-600 hover:text-blue-800 underline"
        >
          {showUSD ? 'Hide USD Equivalent' : 'Show USD Equivalent'}
        </button>
      </div>
      <div className="w-full overflow-x-auto bg-white rounded-xl shadow-lg border border-blue-100">
        <table className="w-full min-w-full divide-y divide-blue-200">
          <thead className="bg-blue-50">
            <tr>
              {['name', 'city', 'state', 'country', 'duration', 'tuitionFee'].map((field) => (
                <th
                  key={field}
                  className="px-6 py-4 text-left text-xs font-medium text-blue-600 uppercase tracking-wider cursor-pointer hover:bg-blue-100 transition-colors duration-200"
                  onClick={() => handleSort(field as SortField)}
                >
                  <div className="flex items-center space-x-2">
                    {getIcon(field)}
                    <span>{field === 'tuitionFee' ? 'Tuition Fee' : field.charAt(0).toUpperCase() + field.slice(1)}</span>
                    <ArrowUpDown className="h-4 w-4" />
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-blue-100">
            {sortedSchools.map((school, index) => (
              <tr 
                key={school.id || school.name} 
                className={`
                  hover:bg-blue-50 transition-colors duration-200
                  ${index % 2 === 0 ? 'bg-white' : 'bg-blue-50/30'}
                `}
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{school.name}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-600">{school.city}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-600">{school.state}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {school.country}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-600">{school.duration} months</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-green-600">
                    {formatCurrency(school.tuition_fee, school.country, showUSD)}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}