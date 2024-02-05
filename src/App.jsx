import { ThemeSwitcher } from './Components/ThemeSwitcher';
import { useTheme } from './Components/ThemeSwitcher';

const App = () => {
  return (
    <ThemeSwitcher>
      <AppContent />
    </ThemeSwitcher>
  );
};

const AppContent = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <div className={`container ${darkMode ? 'dark-mode' : ''}`}>
      <div className="content">
        <h1 className={darkMode ? 'dark-text' : ''}>Your App</h1>
        <label className="toggle-switch">
          <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
          Dark Mode
        </label>
      </div>
    </div>
  );
};

export default App;