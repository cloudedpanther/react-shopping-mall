import CategoryArticle from '../components/CategoryArticle';
import Breadcrumb from '../components/Breadcrumb';

interface ProductProps {
  url: string;
  imgSrc: string;
  name: string;
  price: number;
}

interface CategoryPageProps {
  category: {
    title: string;
    items: ProductProps[];
  };
}

export default function CategoryPage({ category }: CategoryPageProps) {
  const pageHistory = ['홈', category.title];

  return (
    <section className="pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto">
      <Breadcrumb pageHistory={pageHistory} />
      <CategoryArticle category={category} />
    </section>
  );
}
