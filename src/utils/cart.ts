import { CartProps } from '../store/cart';
import { ProductProps } from '../store/products';

type CartMakerProps = (
  cart: CartProps[],
  id: number,
  item: ProductProps | CartProps,
  isMinus: boolean,
) => CartProps[];

export const makeNewCart: CartMakerProps = (cart, id, item, isMinus) => {
  const index = cart.findIndex((item) => item.id === id);

  if (index > -1) {
    const prevItem = cart[index];

    if (isMinus) {
      if (prevItem.amount > 1) {
        const newCart = [
          ...cart.slice(0, index),
          {
            ...prevItem,
            amount: prevItem.amount - 1,
          },
          ...cart.slice(index + 1),
        ];
        return newCart;
      }

      const newCart = [...cart.slice(0, index), ...cart.slice(index + 1)];
      return newCart;
    }

    const newCart = [
      ...cart.slice(0, index),
      {
        ...prevItem,
        amount: prevItem.amount + 1,
      },
      ...cart.slice(index + 1),
    ];
    return newCart;
  }

  const { title, price, image } = item;
  const newCartItem = {
    id,
    title,
    price,
    image,
    amount: 1,
  };
  const newCart = [...cart, newCartItem];
  return newCart;
};
