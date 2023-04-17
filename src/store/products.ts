import { atom, selector, selectorFamily } from 'recoil';
import axios from 'axios';
import { subCategoryMap } from '../utils/category';

export interface ProductProps {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const URL = 'https://fakestoreapi.com/products';

export const fetchProducts = async () => {
  try {
    const res = await axios.get<ProductProps[]>(URL);
    return res.data;
  } catch (error) {
    console.log(error);
    throw new Error();
  }
};

export const productsState = atom<ProductProps[]>({
  key: 'products',
  default: [],
});

export const productsInitializer = selector({
  key: 'productsInitializer',
  get: ({ get }) => {
    return get(productsState);
  },
  set: ({ set }, fetched) => {
    if (!(fetched instanceof Array)) {
      throw new Error();
    }

    const products = fetched.map((product) => {
      for (const category in subCategoryMap) {
        const categoryMatch = subCategoryMap[category].includes(
          product.category,
        );

        if (categoryMatch) {
          return {
            ...product,
            price: Math.round(product.price),
            category,
          };
        }
      }
      return product;
    });

    set(productsState, products);
  },
});

export const productsSelector = selectorFamily({
  key: 'productsSelector',
  get:
    (id) =>
    ({ get }) => {
      const products = get(productsState);
      const targetProduct = products.find(
        (product) => product.id === Number(id),
      );

      return targetProduct;
    },
});

export const productsListSelector = selectorFamily({
  key: 'productsListSelector',
  get:
    (category) =>
    ({ get }) => {
      const products = get(productsState);

      return products.filter((product) => product.category === category);
    },
});

export const productsSearchSelector = selectorFamily({
  key: 'productsSearchSelector',
  get:
    (keyword: string) =>
    ({ get }) => {
      if (keyword === '') return [];

      const products = get(productsState);

      return products.filter((product) => {
        return product.title.toLowerCase().includes(keyword.toLowerCase());
      });
    },
});
