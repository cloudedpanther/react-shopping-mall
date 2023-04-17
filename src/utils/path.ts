import { useRecoilValue } from 'recoil';
import { productsSelector } from '../store/products';

const pathList = [
  {
    url: '/fashion',
    text: '패션',
  },
  {
    url: '/accessory',
    text: '액세서리',
  },
  {
    url: '/digital',
    text: '디지털',
  },
  {
    url: '/cart',
    text: '장바구니',
  },
];

export const getCurrenPath = (pathname: string, id: number) => {
  const pathArray = ['홈'];

  if (!id) {
    const path = pathList.find((path) => path.url === pathname)?.text;

    if (!path) return pathArray;

    pathArray.push(path);
    return pathArray;
  }

  const product = useRecoilValue(productsSelector(id));

  if (!product) return pathArray;

  const { category, title } = product;
  pathArray.push(category, title);

  return pathArray.slice(-2);
};
