import { Link } from 'react-router-dom';
import CartIcon from '../../icons/CartIcon';
import CartBadge from './CartBadge';

export default function CartButton() {
  return (
    <Link className="btn btn-ghost w-10 sm:w-12 ml-1" to="/cart">
      <span className="relative">
        <CartIcon />
        <CartBadge />
      </span>
    </Link>
  );
}
