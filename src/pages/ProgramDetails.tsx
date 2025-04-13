import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SearchFilters from '../components/SearchFilters';
import SchoolsTable from '../components/SchoolsTable';
import { FilterOptions } from '../types';
import { supabase } from '../lib/supabase';
import type { Database } from '../types/supabase';

type ProgramType = Database['public']['Tables']['program_types']['Row'];
type School = Database['public']['Tables']['schools']['Row'];

export default function ProgramDetails() {
  const { type } = useParams();
  const [program, setProgram] = useState<ProgramType | null>(null);
  const [schools, setSchools] = useState<School[]>([]);
  const [filters, setFilters] = useState<FilterOptions>({
    country: '',
    state: '',
    duration: '',
    feeRange: '',
    searchQuery: '',
    programType: type || ''
  });

  useEffect(() => {
    if (type) {
      fetchProgramType();
      fetchSchools();
    }
  }, [type]);

  useEffect(() => {
    fetchSchools();
  }, [filters]);

  async function fetchProgramType() {
    const { data, error } = await supabase
      .from('program_types')
      .select('*')
      .eq('id', type)
      .single();
    
    if (error) {
      console.error('Error fetching program type:', error);
      return;
    }

    setProgram(data);
  }

  async function fetchSchools() {
    let query = supabase
      .from('schools')
      .select('*')
      .eq('program_type', type);

    if (filters.country) {
      query = query.eq('country', filters.country);
    }
    if (filters.state) {
      query = query.eq('state', filters.state);
    }
    if (filters.duration) {
      query = query.eq('duration', parseInt(filters.duration));
    }
    if (filters.feeRange) {
      const [min, max] = filters.feeRange.split('-').map(n => parseInt(n.replace(/,/g, '')));
      if (min) query = query.gte('tuition_fee', min);
      if (max) query = query.lte('tuition_fee', max);
    }
    if (filters.searchQuery) {
      query = query.or(`name.ilike.%${filters.searchQuery}%,city.ilike.%${filters.searchQuery}%,state.ilike.%${filters.searchQuery}%,country.ilike.%${filters.searchQuery}%`);
    }

    const { data, error } = await query;
    
    if (error) {
      console.error('Error fetching schools:', error);
      return;
    }

    setSchools(data);
  }

  if (!program) {
    return <div>Program not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{program.name} Programs</h1>
        <p className="text-lg text-gray-600">{program.description}</p>
      </div>

      <div className="space-y-8">
        <SearchFilters 
          filters={filters} 
          onFilterChange={(newFilters) => setFilters(prev => ({ ...prev, ...newFilters }))} 
        />
        <SchoolsTable schools={schools} />
      </div>
    </div>
  );
}