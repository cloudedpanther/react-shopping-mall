import CategorySection from './CategorySection';

const categories = [
  {
    title: '패션',
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
  },
  {
    title: '액세서리',
    items: [
      {
        url: '/product/7',
        imgSrc: '/src/assets/demo-1.jpg',
        name: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
        price: 110,
      },
      {
        url: '/product/8',
        imgSrc: '/src/assets/demo-1.jpg',
        name: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
        price: 110,
      },
      {
        url: '/product/9',
        imgSrc: '/src/assets/demo-1.jpg',
        name: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
        price: 110,
      },
      {
        url: '/product/10',
        imgSrc: '/src/assets/demo-1.jpg',
        name: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
        price: 110,
      },
    ],
  },
  {
    title: '디지털',
    items: [
      {
        url: '/product/11',
        imgSrc: '/src/assets/demo-1.jpg',
        name: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
        price: 110,
      },
      {
        url: '/product/12',
        imgSrc: '/src/assets/demo-1.jpg',
        name: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
        price: 110,
      },
      {
        url: '/product/13',
        imgSrc: '/src/assets/demo-1.jpg',
        name: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
        price: 110,
      },
      {
        url: '/product/14',
        imgSrc: '/src/assets/demo-1.jpg',
        name: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
        price: 110,
      },
    ],
  },
];

export default function CategorySectionList() {
  return (
    <>
      {categories.map((category) => {
        return <CategorySection key={category.title} category={category} />;
      })}
    </>
  );
}
