import { useRecoilValue } from 'recoil';
import { cartTotalSelector } from '../../store';

export default function CartBadge() {
  const { totalAmount } = useRecoilValue(cartTotalSelector);

  return (
    <span className="inline-flex items-center justify-center absolute top-0 right-0 px-2 py-1 rounded-full bg-red-500 text-xs font-bold leading-none text-gray-200 transform translate-x-1/2 -translate-y-1/2">
      {totalAmount}
    </span>
  );
}
