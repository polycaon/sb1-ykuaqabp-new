const currencyMap: { [key: string]: { symbol: string; rate: number } } = {
  'US': { symbol: '$', rate: 1 },
  'UK': { symbol: '£', rate: 0.79 },
  'France': { symbol: '€', rate: 0.92 },
  'Spain': { symbol: '€', rate: 0.92 },
  'Netherlands': { symbol: '€', rate: 0.92 },
  'Denmark': { symbol: 'kr', rate: 6.86 },
  'India': { symbol: '₹', rate: 83.12 }
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

  // For US amounts, show as is. For other currencies, convert from USD
  const localAmount = country === 'US' ? amount : amount * currencyInfo.rate;
  const formattedLocal = `${currencyInfo.symbol}${formatter.format(localAmount)}`;
  
  if (showUSD && country !== 'US') {
    return `${formattedLocal} ($${formatter.format(amount)})`;
  }
  
  return formattedLocal;
};