import { useState } from 'react';
import LightIcon from '../icons/LightIcon';
import DarkIcon from '../icons/DarkIcon';

export default function ThemeToggleButton() {
  const [theme, setTheme] = useState(true);

  const handleThemeChange = () => {
    const htmlDOM = document.querySelector('html');

    if (htmlDOM !== null) {
      htmlDOM.dataset.theme = theme ? 'dark' : 'light';

      htmlDOM.className = theme ? 'dark' : '';
    }

    setTheme((theme) => !theme);
  };

  return (
    <label className="swap swap-rotate mr-2 sm:mr-4">
      <input
        type="checkbox"
        className="js-theme"
        checked={theme}
        onChange={handleThemeChange}
      />
      <LightIcon />
      <DarkIcon />
    </label>
  );
}
