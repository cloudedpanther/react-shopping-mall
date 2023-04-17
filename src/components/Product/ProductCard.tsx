import { Link } from 'react-router-dom';
import { ProductProps } from '../../store/products';
interface ProductCardProps {
  item: ProductProps;
}

export default function ProductCard({ item }: ProductCardProps) {
  return (
    <Link
      className="card card-bordered border-gray-200 dark:border-gray-800 card-compact lg:card-normal"
      to={`/product/${item.id}`}>
      <figure className="flex h-80 bg-white overflow-hidden">
        <img
          src={item.image}
          alt="상품 이미지"
          className="transition-transform duration-300"
        />
      </figure>
      <div className="card-body bg-gray-100 dark:bg-gray-700">
        <p className="card-title text-base">{item.title}</p>
        <p className="text-base">${item.price}</p>
      </div>
    </Link>
  );
}
