import CategorySection from './CategorySection';
import { categories } from '../../utils/category';

export default function CategorySectionList() {
  return (
    <>
      {categories.map((category) => {
        return <CategorySection key={category.name} category={category.text} />;
      })}
    </>
  );
}
