import { useNavigate } from 'react-router-dom';
import { useCurrency } from '../context/CurrencyContext';
import useCurrencyApi from '../hooks/useCurrencyApi';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CurrencyCard from '../components/CurrencyCard';
import CurrencyGrid from '../components/CurrencyGrid';
import ProceedButton from '../components/ProceedButton';

function IndexPage() {
  const { selectedCurrencies } = useCurrency();
  const { data, loading, error } = useCurrencyApi('symbols');
  const navigate = useNavigate();

  if (loading) return <div className="text-center p-4">Загрузка...</div>;
  if (error)
    return (
      <div className="text-center p-4 text-red-600">
        Ошибка: {error}. Попробуйте перезагрузить страницу.
      </div>
    );
  if (!data || !data.symbols)
    return (
      <div className="text-center p-4">
        Данные о валютах недоступны. Попробуйте перезагрузить страницу.
      </div>
    );

  return (
    <>
      <Header title="Выберите валюты" />
      <main className="p-5 flex-1">
        <CurrencyGrid>
          {Object.entries(data.symbols).map(([abbr, name]) => (
            <CurrencyCard key={abbr} abbr={abbr} name={name} />
          ))}
        </CurrencyGrid>
        <ProceedButton
          disabled={selectedCurrencies.length === 0}
          onClick={() => navigate('/rates')}
        >
          Посмотреть курс валют
        </ProceedButton>
      </main>
      <Footer />
    </>
  );
}

export default IndexPage;
