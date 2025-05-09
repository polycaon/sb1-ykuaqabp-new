const currencyMap: { [key: string]: { symbol: string; rate: number } } = {
  'US': { symbol: '$', rate: 1 },
  'UK': { symbol: '£', rate: 0.79 },
  'Canada': { symbol: 'C$', rate: 1.35 },
  'Australia': { symbol: 'A$', rate: 1.52 },
  'New Zealand': { symbol: 'NZ$', rate: 1.65 },
  'India': { symbol: '₹', rate: 83.12 },
  'France': { symbol: '€', rate: 0.92 },
  'Germany': { symbol: '€', rate: 0.92 },
  'Spain': { symbol: '€', rate: 0.92 },
  'Italy': { symbol: '€', rate: 0.92 },
  'Netherlands': { symbol: '€', rate: 0.92 },
  'Switzerland': { symbol: 'CHF', rate: 0.90 },
  'Singapore': { symbol: 'S$', rate: 1.34 },
  'Denmark': { symbol: 'kr', rate: 6.86 },
  'Sweden': { symbol: 'kr', rate: 10.45 },
  'Norway': { symbol: 'kr', rate: 10.62 }
};

export const formatCurrency = (amount: number, country: string, showUSD = false) => {
  // Check if amount exists and is a valid number
  if (amount === undefined || amount === null || isNaN(amount)) {
    return 'N/A';
  }

  const currencyInfo = currencyMap[country] || currencyMap['US'];
  const formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  // For US amounts, show as is
  if (country === 'US') {
    return `$${formatter.format(amount)}`;
  }

  // For other currencies, convert to USD (since amount is in local currency)
  const usdAmount = amount / currencyInfo.rate;
  const formattedUSD = `$${formatter.format(usdAmount)}`;
  const formattedLocal = `${currencyInfo.symbol}${formatter.format(amount)}`;
  
  // If showUSD is true, show both USD and local currency
  if (showUSD) {
    return `${formattedUSD} (${formattedLocal})`;
  }
  
  // If showUSD is false, show only USD
  return formattedUSD;
};