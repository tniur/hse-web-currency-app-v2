import { useTheme } from '../context/ThemeContext';

function Header({ title }) {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <header className="flex items-center justify-between p-4 sticky top-0 z-10 border-b bg-white dark:bg-gray-800">
      <h1 className="text-xl font-semibold">{title}</h1>
      <button onClick={toggleTheme}>
        <img
          src="/hse-web-currency-app-v2/theme-icon.png"
          alt="Переключить тему"
          className="w-6 h-6 transition-transform duration-200 hover:scale-110"
        />
      </button>
    </header>
  );
}

export default Header;
