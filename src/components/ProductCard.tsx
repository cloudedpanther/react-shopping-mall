import { Link } from 'react-router-dom';

interface ProductProps {
  url: string;
  imgSrc: string;
  name: string;
  price: number;
}

interface ProductCardProps {
  item: ProductProps;
}

export default function ProductCard({ item }: ProductCardProps) {
  return (
    <Link
      className="card card-bordered border-gray-200 dark:border-gray-800 card-compact lg:card-normal"
      to={item.url}>
      <figure className="flex h-80 bg-white overflow-hidden">
        <img
          src={item.imgSrc}
          alt="상품 이미지"
          className="transition-transform duration-300"
        />
      </figure>
      <div className="card-body bg-gray-100 dark:bg-gray-700">
        <p className="card-title text-base">{item.name}</p>
        <p className="text-base">${item.price}</p>
      </div>
    </Link>
  );
}
