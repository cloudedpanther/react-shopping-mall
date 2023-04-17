import { useLocation } from 'react-router-dom';
import ProductCardList from '../Product/ProductCardList';
import { useRecoilValue } from 'recoil';
import { productsListSelector } from '../../store';
import { getCategoryName } from '../../utils/category';

export default function CategoryArticle() {
  const { pathname } = useLocation();
  const category = getCategoryName(pathname);
  const products = useRecoilValue(productsListSelector(category));

  return (
    <article className="pt-2 lg:pt-4 pb-4 lg:pb-8 px-4 xl:px-2 mb-20 xl:container mx-auto">
      <h2 className="mb-5 lg:mb-8 text-3xl lg:text-4xl text-center font-bold">
        {category}
      </h2>
      <div
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 item_list"
        data-scroll={false}>
        <ProductCardList items={products} />
      </div>
    </article>
  );
}
