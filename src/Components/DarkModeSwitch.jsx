import React from 'react';
import { useTheme } from './ThemeSwitcher';

const DarkModeSwitch = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  console.log('dark mode')

  return (
    <div>
      <label>
        Dark Mode
        {console.log('dark mode')}
        <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
      </label>
    </div>
  );
};

export default DarkModeSwitch
