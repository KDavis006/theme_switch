import React from 'react';
import { useTheme } from './ThemeSwitcher';

const DarkModeSwitch = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <div>
      <label>
        Dark Mode
        <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
      </label>
    </div>
  );
};

export default DarkModeSwitch;
