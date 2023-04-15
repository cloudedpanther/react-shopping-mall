import ProductCardList from './ProductCardList';

interface ProductProps {
  url: string;
  imgSrc: string;
  name: string;
  price: number;
}

interface CategorySectionProps {
  category: {
    title: string;
    items: ProductProps[];
  };
}

export default function CategorySection({ category }: CategorySectionProps) {
  return (
    <section className="pt-6 lg:pt-12 pb-4 lg:pb-8 px-4 xl:px-2 mt-10 xl:container mx-auto">
      <h2 className="mb-5 lg:mb-8 text-3xl lg:text-4xl text-center font-bold">
        {category.title}
      </h2>
      <div
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 item_list"
        data-scroll={true}>
        <ProductCardList items={category.items} />
      </div>
    </section>
  );
}
