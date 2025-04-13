export interface School {
  id?: string;
  name: string;
  city: string;
  state: string;
  country: string;
  duration: number;
  tuition_fee: number;
  program_type: string;
}

export interface FilterOptions {
  country: string;
  state: string;
  duration: string;
  feeRange: string;
  searchQuery: string;
  programType: string;
}

export type ProgramType = {
  id: string;
  name: string;
  description: string;
  averageDuration: string;
  averageFee: string;
  icon: string;
};

export interface Update {
  date: string;
  title: string;
  description: string;
}