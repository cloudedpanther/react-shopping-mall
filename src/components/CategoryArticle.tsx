import ProductCardList from './ProductCardList';

interface ProductProps {
  url: string;
  imgSrc: string;
  name: string;
  price: number;
}

interface CategoryArticleProps {
  category: {
    title: string;
    items: ProductProps[];
  };
}

export default function CategoryArticle({ category }: CategoryArticleProps) {
  return (
    <article className="pt-2 lg:pt-4 pb-4 lg:pb-8 px-4 xl:px-2 mb-20 xl:container mx-auto">
      <h2 className="mb-5 lg:mb-8 text-3xl lg:text-4xl text-center font-bold">
        {category.title}
      </h2>
      <div
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 item_list"
        data-scroll={false}>
        <ProductCardList items={category.items} />
      </div>
    </article>
  );
}
