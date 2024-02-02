import React from 'react';
import DarkModeSwitch from './Components/DarkModeSwitch';
import { ThemeSwitcher } from './Components/ThemeSwitcher';
import { useTheme } from './Components/ThemeSwitcher';

const App = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <ThemeSwitcher className={`${darkMode ? 'dark-mode' : ''}`}>
      <div>
        <h1>Your App</h1>
        <DarkModeSwitch />
      </div>
    </ThemeSwitcher>
  );
};

export default App;
