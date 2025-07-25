import { useState } from "react";

export const ToggleTheme = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setDarkMode(!darkMode);
  };

  return (
    <>
      <button
        onClick={toggleTheme}
        className="w-10 h-4 rounded-full bg-primary flex items-center transition duration-300 focus:outline-none shadow"
      >
        <div
          className={`w-6 h-6 relative rounded-full transition duration-500 transform
          ${darkMode ? "translate-x-full bg-primary border border-gray-400" : "-translate-x-2 bg-yellow-500"}`}
        >
          {darkMode ? "🌙" : "☀️"}
        </div>
      </button>
    </>
  );
};
