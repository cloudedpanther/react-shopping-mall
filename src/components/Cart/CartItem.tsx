import { Link, Navigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { cartSelector } from '../../store';
import { makeNewCart } from '../../utils/cart';

interface CartItemProps {
  id: number;
}

export default function CartItem({ id }: CartItemProps) {
  const [cart, setCart] = useRecoilState(cartSelector);
  const item = cart.find((item) => item.id === id);

  if (!item) return <Navigate to="/404" />;

  const handlePlusCartButtonClick = () => {
    const newCart = makeNewCart(cart, id, item, false);
    setCart(newCart);
  };

  const handleMinusCartButtonClick = () => {
    const newCart = makeNewCart(cart, id, item, true);
    setCart(newCart);
  };

  return (
    <div className="lg:flex lg:items-center mt-4 px-2 lg:px-0">
      <Link to={`/product/${item.id}`}>
        <figure className="w-56 min-w-full flex-shrink-0 rounded-2xl overflow-hidden px-4 py-4 bg-white">
          <img
            src={item.image}
            alt={item.title}
            className="object-contain w-full h-48"></img>
        </figure>
      </Link>
      <div className="card-body px-1 lg:px-12">
        <h2 className="card-title">
          <Link className="link link-hover" to={`/product/${item.id}`}>
            {item.title}
          </Link>
        </h2>
        <p className="mt-2 mb-4 text-3xl">${item.price * item.amount}</p>
        <div className="card-actions">
          <div className="btn-group">
            <button
              className="btn btn-primary"
              onClick={handleMinusCartButtonClick}>
              -
            </button>
            <button className="btn btn-ghost no-animation">
              {item.amount}
            </button>
            <button
              className="btn btn-primary"
              onClick={handlePlusCartButtonClick}>
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
