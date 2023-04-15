import ProductCard from './ProductCard';

interface ProductProps {
  url: string;
  imgSrc: string;
  name: string;
  price: number;
}

interface ProductCardListProps {
  items: ProductProps[];
}

export default function ProductCardList({ items }: ProductCardListProps) {
  return (
    <>
      {items.map((item) => {
        return <ProductCard key={item.name + item.url} item={item} />;
      })}
    </>
  );
}
