import { Link, Navigate, useParams } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import Rating from '../components/RatingStar/Rating';
import { useRecoilState, useRecoilValue } from 'recoil';
import { productsSelector } from '../store/products';
import { cartSelector } from '../store';
import { makeNewCart } from '../utils/cart';

export default function Product() {
  const { id } = useParams();
  const item = useRecoilValue(productsSelector(id));
  const [cart, setCart] = useRecoilState(cartSelector);

  if (!item) {
    return <Navigate to="/404" />;
  }

  const handleCartButtonClick = () => {
    const newCart = makeNewCart(cart, Number(id), item, false);
    setCart(newCart);
  };

  return (
    <>
      <section className="pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto">
        <div>
          <Breadcrumb />
          <div className="lg:flex lg:items-center mt-6 md:mt-14 px-2 lg:px-0">
            <figure className="flex-shrink-0 rounded-2xl overflow-hidden px-4 py-4 bg-white view_image">
              <img
                src={item.image}
                alt={item.title}
                className="object-contain w-full h-72"
              />
            </figure>
            <div className="card-body px-1 lg:px-12">
              <h2 className="card-title">
                {item.title}
                <span className="badge badge-accent ml-2">NEW</span>
              </h2>
              <p>{item.description}</p>
              <Rating rating={item.rating} />
              <p className="mt-2 mb-4 text-3xl">${item.price}</p>
              <div className="card-actions">
                <button
                  className="btn btn-primary"
                  onClick={handleCartButtonClick}>
                  장바구니에 담기
                </button>
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
