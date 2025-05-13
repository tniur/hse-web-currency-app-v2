function Footer() {
  return (
    <footer className="p-4 border-t bg-white dark:bg-gray-800 flex justify-center items-center min-h-[60px] shadow-sm">
      <a
        href="https://github.com/tniur/hse-web-currency-app-v2"
        target="_blank"
        className="flex items-center gap-2 font-semibold text-blue-600 dark:text-blue-400"
      >
        <img src="/hse-web-currency-app-v2/github-icon.png" alt="GitHub" className="w-6 h-6" />
        GitHub
      </a>
    </footer>
  );
}

export default Footer;
