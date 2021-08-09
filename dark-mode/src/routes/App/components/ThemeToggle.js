import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

function ThemeToggle() {
  const rootId = document.getElementById('root');
  const lightMode = 'light-mode';
  const darkMode = 'dark-mode';
  const [themeMode, setThemeMode] = useState(getInitialTheme);

  function getInitialTheme() {
    if (localStorage.getItem('theme')) {
      const theme = localStorage.getItem('theme');
      rootId.className = theme;
      return theme;
    } else {
      localStorage.setItem('theme', lightMode);
      return lightMode;
    }
  };

  function setTheme(theme) {
    localStorage.setItem('theme', theme);
    rootId.className = theme;
    setThemeMode(theme);
  };

  function toggleTheme() {
    if (localStorage.getItem('theme')) {
      if (localStorage.getItem('theme') === darkMode) {
        setTheme(lightMode);
      } else {
        setTheme(darkMode);
      }
    }
  };

  useEffect(() => {
    localStorage.setItem('theme', themeMode);
  }, [themeMode]);

  return (
    <>
      <button className='app__dark-mode-btn icon level-right' onClick={toggleTheme}>
        {themeMode === lightMode
          ? <FontAwesomeIcon icon={faMoon} />
          : <FontAwesomeIcon icon={faSun} />
        }
      </button>
    </>
  )
}

export default ThemeToggle;
