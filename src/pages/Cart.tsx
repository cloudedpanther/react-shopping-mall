import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import CartItem from '../components/Cart/CartItem';
import CartModal from '../components/Cart/CartModal';
import { useRecoilValue } from 'recoil';
import { cartTotalSelector, cartState } from '../store';

export default function Cart() {
  const items = useRecoilValue(cartState);
  const { totalPrice } = useRecoilValue(cartTotalSelector);

  return (
    <section className="pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto">
      <Breadcrumb />

      <div className="mt-6 md:mt-14 px-2 lg:px-0">
        {items.length === 0 && (
          <div>
            <h1 className="text-2xl">장바구니에 물품이 없습니다.</h1>
            <Link className="btn btn-primary mt-10" to="/">
              담으러 가기
            </Link>
          </div>
        )}
        <div className="lg:flex justify-between mb-20">
          <div>
            {items.length > 0 &&
              items.map((item) => (
                <CartItem key={Date.now() + item.id} id={item.id} />
              ))}
          </div>
          <div className="self-start shrink-0 flex items-center mt-10 mb-20">
            <span className="text-xl md:text-2xl">총: ${totalPrice}</span>
            <label
              htmlFor="confirm-modal"
              className="modal-button btn btn-primary ml-5">
              구매하기
            </label>
          </div>
        </div>
      </div>

      <CartModal />
    </section>
  );
}
