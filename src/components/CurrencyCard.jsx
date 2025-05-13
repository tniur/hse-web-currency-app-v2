import { useCurrency } from '../context/CurrencyContext';

function CurrencyCard({ abbr, name }) {
  const { selectedCurrencies, toggleCurrency } = useCurrency();
  const isSelected = selectedCurrencies.includes(abbr);

  const handleClick = () => toggleCurrency(abbr);

  return (
    <div
      className={`relative group h-24 flex flex-col justify-center items-center 
                  text-lg font-bold text-center cursor-pointer rounded-xl p-6 
                  transition-all border
                  ${
                    isSelected
                      ? 'bg-blue-100 dark:bg-blue-700 border-blue-500'
                      : 'bg-white dark:bg-gray-700'
                  } 
                  hover:bg-blue-50 dark:hover:bg-gray-600`}
      onClick={handleClick}
    >
      {abbr}
      <div
        className="absolute top-2 left-1/2 -translate-x-1/2 px-2 py-1 
                      rounded text-sm bg-blue-500 text-white 
                      opacity-0 group-hover:opacity-100 transition-opacity"
      >
        {name}
      </div>
    </div>
  );
}

export default CurrencyCard;
