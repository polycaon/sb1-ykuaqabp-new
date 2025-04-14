import { School, ProgramType } from './types';

export const programTypes: ProgramType[] = [
  {
    id: 'full-time-mba',
    name: 'Full-Time MBA',
    description: 'Traditional two-year program with comprehensive business education and internship opportunities. Ideal for career switchers and accelerated growth.',
    averageDuration: '18-24 months',
    averageFee: '$150,000+',
    icon: 'GraduationCap'
  },
  {
    id: 'part-time-mba',
    name: 'Part-Time MBA',
    description: 'Flexible program designed for working professionals, allowing you to earn your degree while maintaining your career.',
    averageDuration: '24-36 months',
    averageFee: '$100,000+',
    icon: 'Clock'
  },
  {
    id: 'online-mba',
    name: 'Online MBA',
    description: 'Remote learning with the same curriculum as on-campus programs. Perfect for global professionals seeking flexibility.',
    averageDuration: '18-24 months',
    averageFee: '$80,000+',
    icon: 'Globe'
  },
  {
    id: 'mim',
    name: 'Master in Management',
    description: 'Designed for recent graduates with limited work experience. Focus on foundational business concepts and leadership skills.',
    averageDuration: '12-15 months',
    averageFee: '$50,000+',
    icon: 'BookOpen'
  },
  {
    id: 'msc-management',
    name: 'MSc Management',
    description: 'Specialized management education with research focus. Ideal for those seeking deep expertise in specific business areas.',
    averageDuration: '12 months',
    averageFee: '$45,000+',
    icon: 'ScrollText'
  },
  {
    id: 'emba',
    name: 'Executive MBA',
    description: 'Designed for senior executives and leaders. Flexible format combining intensive in-person modules with distance learning.',
    averageDuration: '18-24 months',
    averageFee: '$125,000+',
    icon: 'Briefcase'
  }
];

export const schools: School[] = [
  // Full-Time MBA Programs - US Schools
  {
    name: "Harvard Business School",
    city: "Boston",
    state: "Massachusetts",
    country: "US",
    duration: 24,
    tuitionFee: 152820,
    programType: "full-time-mba"
  },
  {
    name: "Stanford Graduate School of Business",
    city: "Stanford",
    state: "California",
    country: "US",
    duration: 24,
    tuitionFee: 164910,
    programType: "full-time-mba"
  },
  {
    name: "Wharton School",
    city: "Philadelphia",
    state: "Pennsylvania",
    country: "US",
    duration: 20,
    tuitionFee: 169660,
    programType: "full-time-mba"
  },
  {
    name: "Booth School of Business",
    city: "Chicago",
    state: "Illinois",
    country: "US",
    duration: 21,
    tuitionFee: 168396,
    programType: "full-time-mba"
  },
  {
    name: "Columbia Business School",
    city: "New York",
    state: "New York",
    country: "US",
    duration: 20,
    tuitionFee: 176600,
    programType: "full-time-mba"
  },
  {
    name: "Kellogg School of Management",
    city: "Evanston",
    state: "Illinois",
    country: "US",
    duration: 24,
    tuitionFee: 167220,
    programType: "full-time-mba"
  },
  {
    name: "MIT Sloan School of Management",
    city: "Cambridge",
    state: "Massachusetts",
    country: "US",
    duration: 24,
    tuitionFee: 168700,
    programType: "full-time-mba"
  },
  {
    name: "Yale School of Management",
    city: "New Haven",
    state: "Connecticut",
    country: "US",
    duration: 24,
    tuitionFee: 169800,
    programType: "full-time-mba"
  },
  // Full-Time MBA Programs - UK Schools
  {
    name: "London Business School",
    city: "London",
    state: "London",
    country: "UK",
    duration: 21,
    tuitionFee: 119950,
    programType: "full-time-mba"
  },
  {
    name: "Judge Business School",
    city: "Cambridge",
    state: "London",
    country: "UK",
    duration: 12,
    tuitionFee: 74000,
    programType: "full-time-mba"
  },
  {
    name: "Said Business School",
    city: "Oxford",
    state: "London",
    country: "UK",
    duration: 12,
    tuitionFee: 83770,
    programType: "full-time-mba"
  },
  // Full-Time MBA Programs - European Schools
  {
    name: "INSEAD",
    city: "Fontainebleau",
    state: "Île-de-France",
    country: "France",
    duration: 12,
    tuitionFee: 107600,
    programType: "full-time-mba"
  },
  {
    name: "IESE Business School",
    city: "Barcelona",
    state: "Catalonia",
    country: "Spain",
    duration: 15,
    tuitionFee: 110000,
    programType: "full-time-mba"
  },
  {
    name: "HEC Paris Business School",
    city: "Paris",
    state: "Île-de-France",
    country: "France",
    duration: 16,
    tuitionFee: 98000,
    programType: "full-time-mba"
  },
  {
    name: "Goizueta Business School",
    city: "Atlanta",
    state: "Georgia",
    country: "US",
    duration: 24,
    tuitionFee: 148000,
    programType: "full-time-mba"
  },
  // Part-Time MBA Programs
  {
    name: "NYU Stern School of Business",
    city: "New York",
    state: "New York",
    country: "US",
    duration: 36,
    tuitionFee: 147832,
    programType: "part-time-mba"
  },
  {
    name: "UC Berkeley Haas",
    city: "Berkeley",
    state: "California",
    country: "US",
    duration: 30,
    tuitionFee: 143812,
    programType: "part-time-mba"
  },
  {
    name: "Chicago Booth Evening MBA",
    city: "Chicago",
    state: "Illinois",
    country: "US",
    duration: 33,
    tuitionFee: 149396,
    programType: "part-time-mba"
  },
  // Online MBA Programs
  {
    name: "Imperial College Business School",
    city: "London",
    state: "London",
    country: "UK",
    duration: 24,
    tuitionFee: 41500,
    programType: "online-mba"
  },
  {
    name: "Warwick Business School",
    city: "Coventry",
    state: "London",
    country: "UK",
    duration: 24,
    tuitionFee: 45500,
    programType: "online-mba"
  },
  {
    name: "Carnegie Mellon Tepper",
    city: "Pittsburgh",
    state: "PA",
    country: "US",
    duration: 32,
    tuitionFee: 141000,
    programType: "online-mba"
  },
  // Master in Management Programs
  {
    name: "HEC Paris",
    city: "Paris",
    state: "Île-de-France",
    country: "France",
    duration: 18,
    tuitionFee: 48000,
    programType: "mim"
  },
  {
    name: "London Business School MiM",
    city: "London",
    state: "London",
    country: "UK",
    duration: 12,
    tuitionFee: 41500,
    programType: "mim"
  },
  {
    name: "ESADE Business School",
    city: "Barcelona",
    state: "Catalonia",
    country: "Spain",
    duration: 18,
    tuitionFee: 35900,
    programType: "mim"
  }
];

export const countries = [...new Set(schools.map(school => school.country))].sort();
export const states = [...new Set(schools.map(school => school.state))].sort();
export const durations = [...new Set(schools.map(school => school.duration))].sort((a, b) => 
  typeof a === 'number' && typeof b === 'number' ? a - b : String(a).localeCompare(String(b))
);

export const feeRanges = [
  "0-50,000",
  "50,001-100,000",
  "100,001-150,000",
  "150,001-200,000",
  "200,001+"
];