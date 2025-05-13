import { HashRouter, BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { CurrencyProvider } from './context/CurrencyContext';
import IndexPage from './pages/IndexPage';
import RatesPage from './pages/RatesPage';

function App() {
  return (
    <ThemeProvider>
      <CurrencyProvider>
        <HashRouter>
          <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="/rates" element={<RatesPage />} />
          </Routes>
        </HashRouter>
      </CurrencyProvider>
    </ThemeProvider>
  );
}

export default App;
