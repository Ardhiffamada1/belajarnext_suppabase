'use client'

import { useState, useEffect } from 'react';

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    // Check if dark mode is enabled in local storage
    const savedDarkModeSetting = localStorage.getItem('darkMode');
    if (savedDarkModeSetting) {
      setIsDarkMode(savedDarkModeSetting === 'true');
    } else {
      // If no setting found, check user's preference
      setIsDarkMode(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
  }, []);

  useEffect(() => {
    // Update CSS variables to reflect the dark mode state
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    // Save dark mode setting to local storage
    localStorage.setItem('darkMode', isDarkMode.toString());
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button
      className="w-12 h-6 flex items-center rounded-full p-1 bg-gray-300 dark:bg-gray-700 focus:outline-none"
      onClick={toggleDarkMode}
    >
      <div
        className={`w-5 h-5 bg-white dark:bg-gray-800 rounded-full shadow-md transform transition-transform ${
          isDarkMode ? 'translate-x-6' : 'translate-x-0'
        }`}
      ></div>
    </button>
  );
};

export default DarkModeToggle;
