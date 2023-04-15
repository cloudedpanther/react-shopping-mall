import CategoryPage from './CategoryPage';

const category = {
  title: '디지털',
  items: [
    {
      url: '/product/1',
      imgSrc: '/src/assets/demo-1.jpg',
      name: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
      price: 110,
    },
    {
      url: '/product/2',
      imgSrc: '/src/assets/demo-1.jpg',
      name: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
      price: 110,
    },
    {
      url: '/product/3',
      imgSrc: '/src/assets/demo-1.jpg',
      name: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
      price: 110,
    },
    {
      url: '/product/4',
      imgSrc: '/src/assets/demo-1.jpg',
      name: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
      price: 110,
    },
    {
      url: '/product/5',
      imgSrc: '/src/assets/demo-1.jpg',
      name: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
      price: 110,
    },
    {
      url: '/product/6',
      imgSrc: '/src/assets/demo-1.jpg',
      name: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
      price: 110,
    },
  ],
};

export default function Digital() {
  return <CategoryPage category={category} />;
}
