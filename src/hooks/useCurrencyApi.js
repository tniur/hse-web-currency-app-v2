import { useState, useEffect } from 'react';

const API_KEY = '774bca5df320949cff978ba50520d7df';
const API_BASE = 'https://data.fixer.io/api';

function useCurrencyApi(endpoint) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${API_BASE}/${endpoint}?access_key=${API_KEY}`, {
          signal: controller.signal,
        });
        if (!res.ok) throw new Error('Ошибка сети');
        const result = await res.json();
        if (!result.success) throw new Error(result.error?.info || 'Ошибка API');
        setData(result);
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    return () => controller.abort();
  }, [endpoint]);

  return { data, loading, error };
}

export default useCurrencyApi;
