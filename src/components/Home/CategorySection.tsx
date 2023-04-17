import { useRecoilValue } from 'recoil';
import ProductCardList from '../Product/ProductCardList';
import { productsListSelector } from '../../store';

interface CategorySectionProps {
  category: string;
}

export default function CategorySection({ category }: CategorySectionProps) {
  const products = useRecoilValue(productsListSelector(category));

  return (
    <section className="pt-6 lg:pt-12 pb-4 lg:pb-8 px-4 xl:px-2 mt-10 xl:container mx-auto">
      <h2 className="mb-5 lg:mb-8 text-3xl lg:text-4xl text-center font-bold">
        {category}
      </h2>
      <div
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 item_list"
        data-scroll={true}>
        <ProductCardList items={products.slice(0, 4)} />
      </div>
    </section>
  );
}
