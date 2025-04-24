import { Sun, Moon } from "lucide-react";

const ThemeToggle = ({ isDarkMode, toggleDarkMode }) => (
  <button
    onClick={toggleDarkMode}
    className="p-2 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
    aria-label="Toggle theme"
  >
    {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
  </button>
);

export default ThemeToggle;
