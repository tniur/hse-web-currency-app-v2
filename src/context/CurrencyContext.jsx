import { createContext, useContext, useState } from 'react';

const CurrencyContext = createContext();

export function CurrencyProvider({ children }) {
  const [selectedCurrencies, setSelectedCurrencies] = useState(() => {
    const saved = localStorage.getItem('selectedCurrencies');
    return saved ? saved.split(',') : [];
  });

  const toggleCurrency = (currency) => {
    setSelectedCurrencies((prev) => {
      const newSelection = prev.includes(currency)
        ? prev.filter((c) => c !== currency)
        : [...prev, currency];
      localStorage.setItem('selectedCurrencies', newSelection.join(','));
      return newSelection;
    });
  };

  return (
    <CurrencyContext.Provider value={{ selectedCurrencies, toggleCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  return useContext(CurrencyContext);
}
