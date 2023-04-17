import { ProductProps } from '../../store/products';
import ProductCard from './ProductCard';

interface ProductCardListProps {
  items: ProductProps[];
}

export default function ProductCardList({ items }: ProductCardListProps) {
  return (
    <>
      {items.map((item) => {
        return <ProductCard key={item.id + Date.now()} item={item} />;
      })}
    </>
  );
}
