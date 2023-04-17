import { atom, selector } from 'recoil';

export interface CartProps {
  id: number;
  title: string;
  price: number;
  image: string;
  amount: number;
}

export const cartState = atom<CartProps[]>({
  key: 'cart',
  default: selector({
    key: 'localCart',
    get: () => {
      const json = localStorage.getItem(cartState.key);

      if (!json) return [];

      const cart = JSON.parse(json);
      return cart;
    },
  }),
});

export const cartSelector = selector({
  key: 'cartSelector',
  get: ({ get }) => get(cartState),
  set: ({ set }, newCart) => {
    set(cartState, newCart);

    const json = JSON.stringify(newCart);
    localStorage.setItem(cartState.key, json);
  },
});

export const cartTotalSelector = selector({
  key: 'cartTotalSelector',
  get: ({ get }) => {
    const cart = get(cartState);

    const totalAmount = cart.reduce((acc, cur) => acc + cur.amount, 0);
    const totalPrice = cart.reduce(
      (acc, cur) => acc + cur.price * cur.amount,
      0,
    );

    return { totalAmount, totalPrice };
  },
});
