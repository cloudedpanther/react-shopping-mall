import { Link, Navigate, useParams } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import Rating from '../components/Rating';

const items = [
  {
    id: 1,
    category: '패션',
    url: '/product/1',
    imgSrc: '/src/assets/demo-1.jpg',
    name: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
    desc: 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
    rating: {
      value: 3.9,
      contributed: 120,
    },
    price: 110,
  },
  {
    id: 2,
    category: '패션',
    url: '/product/2',
    imgSrc: '/src/assets/demo-1.jpg',
    name: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
    desc: 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
    rating: {
      value: 3.9,
      contributed: 120,
    },
    price: 110,
  },
  {
    id: 3,
    category: '패션',
    url: '/product/3',
    imgSrc: '/src/assets/demo-1.jpg',
    name: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
    desc: 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
    rating: {
      value: 3.9,
      contributed: 120,
    },
    price: 110,
  },
  {
    id: 4,
    category: '패션',
    url: '/product/4',
    imgSrc: '/src/assets/demo-1.jpg',
    name: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
    desc: 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
    rating: {
      value: 3.9,
      contributed: 120,
    },
    price: 110,
  },
  {
    id: 5,
    category: '패션',
    url: '/product/5',
    imgSrc: '/src/assets/demo-1.jpg',
    name: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
    desc: 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
    rating: {
      value: 3.9,
      contributed: 120,
    },
    price: 110,
  },
  {
    id: 6,
    category: '패션',
    url: '/product/6',
    imgSrc: '/src/assets/demo-1.jpg',
    name: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
    desc: 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
    rating: {
      value: 3.9,
      contributed: 120,
    },
    price: 110,
  },
];

export default function Product() {
  const { id } = useParams();
  const item = items.find((item) => item.id === Number(id));

  if (!item) {
    return <Navigate to="/404" />;
  }

  const pageHistory = [item.category, item.name];

  return (
    <>
      <section className="pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto">
        <div>
          <Breadcrumb pageHistory={pageHistory} />
          <div className="lg:flex lg:items-center mt-6 md:mt-14 px-2 lg:px-0">
            <figure className="flex-shrink-0 rounded-2xl overflow-hidden px-4 py-4 bg-white view_image">
              <img
                src={item.imgSrc}
                alt={item.name}
                className="object-contain w-full h-72"
              />
            </figure>
            <div className="card-body px-1 lg:px-12">
              <h2 className="card-title">
                {item.name}
                <span className="badge badge-accent ml-2">NEW</span>
              </h2>
              <p>{item.desc}</p>
              <Rating rating={item.rating} />
              <p className="mt-2 mb-4 text-3xl">${item.price}</p>
              <div className="card-actions">
                <button className="btn btn-primary">장바구니에 담기</button>
                <Link className="btn btn-outline ml-1" to="/cart">
                  장바구니로 이동
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
