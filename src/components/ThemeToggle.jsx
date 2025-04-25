import { useState, useEffect } from 'react';

function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // On component mount, check if user has previously set a theme preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.body.setAttribute('data-theme', 'dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.body.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
    } else {
      document.body.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    }
    
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="theme-toggle">
      <span className="theme-icon">{isDarkMode ? '🌙' : '☀️'}</span>
      <label className="theme-toggle-switch">
        <input type="checkbox" checked={isDarkMode} onChange={toggleTheme} />
        <span className="slider"></span>
      </label>
    </div>
  );
}

export default ThemeToggle;