import { Link } from 'react-router-dom';
import { useCurrency } from '../context/CurrencyContext';
import useCurrencyApi from '../hooks/useCurrencyApi';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RateCard from '../components/RateCard';
import CurrencyGrid from '../components/CurrencyGrid';

function RatesPage() {
  const { selectedCurrencies } = useCurrency();
  const { data, loading, error } = useCurrencyApi(`latest&symbols=${selectedCurrencies.join(',')}`);

  if (loading) return <div className="text-center p-4">Загрузка...</div>;
  if (error)
    return (
      <div className="text-center p-4 text-red-600">
        Ошибка: {error}. Попробуйте перезагрузить страницу.
      </div>
    );
  if (!data || !data.success || !data.rates) {
    return (
      <div className="text-center p-4">
        Курсы валют недоступны. Попробуйте перезагрузить страницу.
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header title="Актуальные курсы" />
      <main className="p-5 flex-1 flex flex-col">
        <Link to="/" className="mb-5 inline-block">
          ← Назад
        </Link>
        <CurrencyGrid>
          {Object.entries(data.rates).map(([abbr, rate]) => (
            <RateCard key={abbr} abbr={abbr} rate={rate} />
          ))}
        </CurrencyGrid>
      </main>
      <Footer />
    </div>
  );
}

export default RatesPage;
