import React, { useEffect, useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { durations, feeRanges } from '../data';
import { FilterOptions } from '../types';
import { supabase } from '../lib/supabase';

interface SearchFiltersProps {
  filters: FilterOptions;
  onFilterChange: (filters: Partial<FilterOptions>) => void;
}

export default function SearchFilters({ filters, onFilterChange }: SearchFiltersProps) {
  const [countries, setCountries] = useState<string[]>([]);
  const [states, setStates] = useState<string[]>([]);

  useEffect(() => {
    fetchCountries();
    fetchStates();
  }, []);

  async function fetchCountries() {
    try {
      const { data, error } = await supabase
        .from('schools')
        .select('country')
        .order('country');

      if (error) {
        console.error('Error fetching countries:', error);
        return;
      }

      const uniqueCountries = Array.from(new Set(data.map(school => school.country))).sort();
      setCountries(uniqueCountries);
    } catch (err) {
      console.error('Error in fetchCountries:', err);
    }
  }

  async function fetchStates() {
    try {
      const { data, error } = await supabase
        .from('schools')
        .select('state')
        .order('state');

      if (error) {
        console.error('Error fetching states:', error);
        return;
      }

      const uniqueStates = Array.from(new Set(data.map(school => school.state))).sort();
      setStates(uniqueStates);
    } catch (err) {
      console.error('Error in fetchStates:', err);
    }
  }

  return (
    <div className="w-full bg-white shadow-lg rounded-xl p-6 mb-8 border border-blue-100">
      <div className="flex items-center space-x-2 mb-6">
        <Filter className="h-5 w-5 text-blue-600" />
        <h2 className="text-lg font-semibold text-gray-900">Search and Filter</h2>
      </div>
      
      <div className="relative mb-6">
        <input
          type="text"
          placeholder="Search business schools..."
          className="w-full pl-10 pr-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
          value={filters.searchQuery}
          onChange={(e) => onFilterChange({ searchQuery: e.target.value })}
        />
        <Search className="absolute left-3 top-3.5 h-5 w-5 text-blue-400" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <select
          className="block w-full p-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white transition-colors duration-200"
          value={filters.country}
          onChange={(e) => onFilterChange({ country: e.target.value })}
        >
          <option value="">All Countries</option>
          {countries.map(country => (
            <option key={country} value={country}>{country}</option>
          ))}
        </select>

        <select
          className="block w-full p-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white transition-colors duration-200"
          value={filters.state}
          onChange={(e) => onFilterChange({ state: e.target.value })}
        >
          <option value="">All States</option>
          {states.map(state => (
            <option key={state} value={state}>{state}</option>
          ))}
        </select>

        <select
          className="block w-full p-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white transition-colors duration-200"
          value={filters.duration}
          onChange={(e) => onFilterChange({ duration: e.target.value })}
        >
          <option value="">All Durations</option>
          {durations.map(duration => (
            <option key={duration} value={duration}>{duration} months</option>
          ))}
        </select>

        <select
          className="block w-full p-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white transition-colors duration-200"
          value={filters.feeRange}
          onChange={(e) => onFilterChange({ feeRange: e.target.value })}
        >
          <option value="">All Fee Ranges</option>
          {feeRanges.map(range => (
            <option key={range} value={range}>${range}</option>
          ))}
        </select>
      </div>
    </div>
  );
}