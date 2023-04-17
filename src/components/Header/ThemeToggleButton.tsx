import LightIcon from '../../icons/LightIcon';
import DarkIcon from '../../icons/DarkIcon';
import { useRecoilState } from 'recoil';
import { isDarkSelector } from '../../store';
import { ChangeEvent } from 'react';

export default function ThemeToggleButton() {
  const [isDark, setIsDark] = useRecoilState(isDarkSelector);

  const handleThemeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.checked;
    setIsDark(newValue);
  };

  return (
    <label className="swap swap-rotate mr-2 sm:mr-4">
      <input
        type="checkbox"
        className="js-theme"
        checked={isDark}
        onChange={handleThemeChange}
      />
      <DarkIcon />
      <LightIcon />
    </label>
  );
}
