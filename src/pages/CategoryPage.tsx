import CategoryArticle from '../components/Category/CategoryArticle';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';

export default function CategoryPage() {
  return (
    <section className="pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto">
      <Breadcrumb />
      <CategoryArticle />
    </section>
  );
}
