import { atom, selector } from 'recoil';

export const isDarkState = atom({
  key: 'isDark',
  default: selector({
    key: 'localIsDark',
    get: () => {
      const json = localStorage.getItem(isDarkState.key);

      if (!json) return false;

      const isDark = JSON.parse(json);
      changeTheme(isDark);

      return isDark;
    },
  }),
});

export const isDarkSelector = selector({
  key: 'isDarkSelector',
  get: ({ get }) => {
    const isDark = get(isDarkState);
    return isDark;
  },
  set: ({ set }, isDark) => {
    changeTheme(isDark);

    set(isDarkState, isDark);

    const json = JSON.stringify(isDark);
    localStorage.setItem(isDarkState.key, json);
  },
});

const changeTheme = (isDark: boolean) => {
  const htmlDOM = document.querySelector('html');

  if (htmlDOM !== null) {
    htmlDOM.dataset.theme = isDark ? 'dark' : 'light';

    htmlDOM.className = isDark ? 'dark' : '';
  }
};
