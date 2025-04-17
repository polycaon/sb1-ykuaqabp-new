import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GraduationCap, Clock, Globe, BookOpen, ScrollText, Briefcase, Users, MapPin, DollarSign, Bell, Linkedin, Facebook, Twitter } from 'lucide-react';
import { supabase } from '../lib/supabase';
import type { Database } from '../types/supabase';
import { Update } from '../types';

type ProgramType = Database['public']['Tables']['program_types']['Row'];

const iconMap: { [key: string]: React.ComponentType } = {
  GraduationCap,
  Clock,
  Globe,
  BookOpen,
  ScrollText,
  Briefcase
};

const updates: Update[] = [
  {
    date: '2025-03-20',
    title: 'Added 50 US Schools',
    description: 'Expanded our database with 50 top US MBA programs.'
  },
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

export default function Home() {
  const navigate = useNavigate();
  const [programTypes, setProgramTypes] = useState<ProgramType[]>([]);
  const [schoolCounts, setSchoolCounts] = useState<Record<string, { schoolCount: number; countryCount: number }>>({});
  const [error, setError] = useState<string | null>(null);
  const [showStatsPopup, setShowStatsPopup] = useState(true);
  const [totalStats, setTotalStats] = useState({ schools: 0, programs: 0, countries: 0 });

  useEffect(() => {
    fetchProgramTypes();
    fetchSchoolStats();
  }, []);

  async function fetchProgramTypes() {
    try {
      const { data, error } = await supabase
        .from('program_types')
        .select('*');
      
      if (error) {
        console.error('Error fetching program types:', error);
        setError('Failed to load program types. Please try again later.');
        return;
      }

      setProgramTypes(data || []);
    } catch (err) {
      console.error('Error in fetchProgramTypes:', err);
      setError('An unexpected error occurred. Please try again later.');
    }
  }

  async function fetchSchoolStats() {
    try {
      const { data: schools, error } = await supabase
        .from('schools')
        .select('name, program_type, country');
      
      if (error) {
        console.error('Error fetching schools:', error);
        setError('Failed to load school statistics. Please try again later.');
        return;
      }

      const stats: Record<string, { schoolCount: number; countryCount: number }> = {};
      const uniqueSchools = new Set();
      const uniqueCountries = new Set();
      let totalProgramCount = 0;

      // First pass: collect unique schools and countries
      (schools || []).forEach(school => {
        if (!school.program_type) return;
        uniqueSchools.add(school.name);
        uniqueCountries.add(school.country);
      });

      // Second pass: count programs and countries per program type
      (schools || []).forEach(school => {
        if (!school.program_type) return;
        totalProgramCount++;
        
        if (!stats[school.program_type]) {
          stats[school.program_type] = { schoolCount: 0, countryCount: 0, countries: new Set() };
        }
        stats[school.program_type].schoolCount++;
        stats[school.program_type].countries.add(school.country);
        stats[school.program_type].countryCount = stats[school.program_type].countries.size;
      });

      setSchoolCounts(stats);
      setTotalStats({
        schools: uniqueSchools.size,
        programs: totalProgramCount,
        countries: uniqueCountries.size
      });
    } catch (err) {
      console.error('Error in fetchSchoolStats:', err);
      setError('An unexpected error occurred while loading school data.');
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {error && (
        <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
          {error}
        </div>
      )}
      
      <div className="relative text-center mb-16">
        {/* Stats Popup */}
        {showStatsPopup && (
          <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-gradient-to-br from-blue-600 to-purple-600 text-white p-3 rounded-lg shadow-lg animate-fade-in">
            <button 
              onClick={() => setShowStatsPopup(false)}
              className="absolute top-1 right-1 text-white/80 hover:text-white text-xs"
            >
              ×
            </button>
            <div className="flex flex-col items-center text-center">
              <div className="text-lg font-bold">{totalStats.schools}+ Schools</div>
              <div className="text-lg font-bold">{totalStats.programs}+ Programs</div>
              <div className="text-lg font-bold">{totalStats.countries}+ Countries</div>
              <div className="text-xs text-blue-100 mt-1">Added</div>
            </div>
          </div>
        )}

        <div className="absolute inset-0 flex items-center justify-center -z-10 opacity-5">
          <GraduationCap className="w-96 h-96" />
        </div>
        <h1 className="text-6xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
          MBA Costs, Simplified!
        </h1>
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Pick the Right MBA Without Breaking the Bank
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Compare tuition, fees, and other costs from top business schools worldwide—make a smarter financial decision for your MBA journey
        </p>
      </div>

      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-9">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {programTypes.map((program) => {
              const Icon = iconMap[program.icon as keyof typeof iconMap];
              const stats = schoolCounts[program.id] || { schoolCount: 0, countryCount: 0 };
              
              return (
                <div
                  key={program.id}
                  onClick={() => navigate(`/program/${program.id}`)}
                  className="group relative bg-white rounded-2xl p-6 shadow-md hover:shadow-xl border-2 border-indigo-100 hover:border-indigo-300 transition-all duration-300 cursor-pointer overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-bl-[100%]"></div>
                  <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-tr from-pink-500/5 to-purple-500/5 rounded-tr-[100%]"></div>
                  
                  <div className="relative">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="p-2 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl text-white shadow-md">
                        {Icon && <Icon className="h-5 w-5" />}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">{program.name}</h3>
                    </div>
                    
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">{program.description}</p>
                    
                    <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2 text-indigo-400" />
                        <span>{program.average_duration}</span>
                      </div>
                      <div className="flex items-center">
                        <DollarSign className="h-4 w-4 mr-2 text-indigo-400" />
                        <span>{program.average_fee}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-xs text-gray-400 border-t border-gray-100 pt-3">
                      <div className="flex items-center">
                        <Users className="h-3 w-3 mr-1" />
                        <span>{stats.schoolCount} Schools</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-3 w-3 mr-1" />
                        <span>{stats.countryCount} Countries</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="col-span-12 lg:col-span-3">
          <div className="sticky top-24">
            <div className="bg-white rounded-2xl p-6 shadow-md border-2 border-indigo-100">
              <div className="flex items-center space-x-2 mb-4">
                <Bell className="h-5 w-5 text-indigo-500" />
                <h2 className="text-lg font-semibold text-gray-900">Latest Updates</h2>
              </div>
              <div className="space-y-4">
                {updates.map((update, index) => (
                  <div key={index} className="border-l-2 border-indigo-200 pl-4 py-1">
                    <p className="text-sm text-gray-600">
                      <span className="font-medium text-gray-900">{update.title}</span> - {update.description}
                    </p>
                    <span className="text-xs text-gray-400">{update.date}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer with social links and copyright */}
      <div className="mt-12 pt-4 border-t border-gray-200">
        <div className="flex justify-center items-center space-x-8">
          <span className="text-sm text-gray-500">© 2025 Cost of MBA. All rights reserved.</span>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}