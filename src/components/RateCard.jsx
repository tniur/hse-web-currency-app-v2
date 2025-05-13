import { useState } from 'react';

function RateCard({ abbr, rate }) {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleClick = () => {
    navigator.clipboard.writeText(`${abbr}: ${rate.toFixed(2)}`);
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 2000);
  };

  return (
    <div
      className="border rounded-xl p-6 text-center font-bold text-lg cursor-pointer transition-all flex flex-col justify-center items-center h-24 relative bg-white dark:bg-gray-700 hover:bg-blue-50 dark:hover:bg-gray-600"
      onClick={handleClick}
    >
      {`${abbr}: ${rate.toFixed(2)}`}
      <div
        className={`absolute bottom-2 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs rounded px-2 py-1 transition-opacity ${
          showTooltip ? 'opacity-100' : 'opacity-0'
        }`}
      >
        Курс скопирован
      </div>
    </div>
  );
}

export default RateCard;
