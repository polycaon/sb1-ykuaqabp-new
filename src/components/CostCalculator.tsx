import React, { useState, useEffect } from 'react';
import { Calculator, DollarSign, Home, Briefcase, GraduationCap, Plane } from 'lucide-react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface CostBreakdown {
  tuition: number;
  living: number;
  travel: number;
  materials: number;
  total: number;
}

export default function CostCalculator() {
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedProgram, setSelectedProgram] = useState('');
  const [currentSalary, setCurrentSalary] = useState<number>(0);
  const [costs, setCosts] = useState<CostBreakdown>({
    tuition: 0,
    living: 0,
    travel: 0,
    materials: 0,
    total: 0
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [exchangeRates, setExchangeRates] = useState<Record<string, number>>({});

  useEffect(() => {
    fetchExchangeRates();
  }, []);

  async function fetchExchangeRates() {
    try {
      const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
      const data = await response.json();
      setExchangeRates(data.rates);
    } catch (err) {
      console.error('Error fetching exchange rates:', err);
      setError('Failed to load exchange rates. Using default USD values.');
    }
  }

  async function calculateCosts() {
    setLoading(true);
    setError(null);

    try {
      // Fetch living costs for the selected city
      const response = await fetch(`https://api.api-ninjas.com/v1/cost_of_living?city=${selectedCity}`, {
        headers: {
          'X-Api-Key': 'YOUR_API_NINJAS_KEY'
        }
      });
      
      const livingData = await response.json();
      
      // Calculate total costs
      const tuition = 100000; // Example tuition fee
      const monthlyLiving = livingData.cost_of_living || 2000; // Fallback value
      const programDuration = 24; // Example duration in months
      
      const breakdown: CostBreakdown = {
        tuition: tuition,
        living: monthlyLiving * programDuration,
        travel: 5000, // Example travel cost
        materials: 2000, // Example materials cost
        total: 0
      };
      
      breakdown.total = Object.values(breakdown).reduce((a, b) => a + b, 0);
      
      setCosts(breakdown);
    } catch (err) {
      console.error('Error calculating costs:', err);
      setError('Failed to calculate costs. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  const chartData = {
    labels: ['Current', 'Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5'],
    datasets: [
      {
        label: 'Projected Salary',
        data: [
          currentSalary,
          currentSalary * 0.8, // During MBA
          currentSalary * 0.8, // During MBA
          currentSalary * 1.5, // Post MBA
          currentSalary * 1.7,
          currentSalary * 2
        ],
        borderColor: 'rgb(99, 102, 241)',
        tension: 0.1
      }
    ]
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-blue-100">
      <div className="flex items-center space-x-2 mb-6">
        <Calculator className="h-6 w-6 text-blue-600" />
        <h2 className="text-2xl font-semibold text-gray-900">MBA Cost Calculator</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Select City
            </label>
            <select
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
            >
              <option value="">Select a city</option>
              <option value="new-york">New York</option>
              <option value="london">London</option>
              <option value="paris">Paris</option>
              {/* Add more cities */}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Program Type
            </label>
            <select
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              value={selectedProgram}
              onChange={(e) => setSelectedProgram(e.target.value)}
            >
              <option value="">Select a program</option>
              <option value="full-time">Full-time MBA</option>
              <option value="part-time">Part-time MBA</option>
              <option value="executive">Executive MBA</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Current Annual Salary (USD)
            </label>
            <input
              type="number"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              value={currentSalary}
              onChange={(e) => setCurrentSalary(Number(e.target.value))}
              placeholder="Enter your current salary"
            />
          </div>

          <button
            onClick={calculateCosts}
            disabled={loading || !selectedCity || !selectedProgram}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:bg-blue-300 transition-colors"
          >
            {loading ? 'Calculating...' : 'Calculate Costs'}
          </button>

          {error && (
            <div className="text-red-600 text-sm mt-2">
              {error}
            </div>
          )}
        </div>

        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Cost Breakdown</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <GraduationCap className="h-4 w-4 text-blue-600 mr-2" />
                <span>Tuition</span>
              </div>
              <span className="font-medium">${costs.tuition.toLocaleString()}</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Home className="h-4 w-4 text-blue-600 mr-2" />
                <span>Living Expenses</span>
              </div>
              <span className="font-medium">${costs.living.toLocaleString()}</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Plane className="h-4 w-4 text-blue-600 mr-2" />
                <span>Travel</span>
              </div>
              <span className="font-medium">${costs.travel.toLocaleString()}</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Briefcase className="h-4 w-4 text-blue-600 mr-2" />
                <span>Materials</span>
              </div>
              <span className="font-medium">${costs.materials.toLocaleString()}</span>
            </div>
            <div className="border-t pt-2 mt-2">
              <div className="flex items-center justify-between text-lg font-semibold">
                <div className="flex items-center">
                  <DollarSign className="h-5 w-5 text-green-600 mr-2" />
                  <span>Total Cost</span>
                </div>
                <span className="text-green-600">${costs.total.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Salary Projection</h3>
        <div className="h-64">
          <Line
            data={chartData}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  position: 'top' as const,
                },
                title: {
                  display: true,
                  text: '5-Year Salary Projection'
                }
              }
            }}
          />
        </div>
      </div>
    </div>
  );
}