import { Link } from 'react-router-dom';
import { categories } from '../../utils/category';

export default function HeaderMenuList() {
  return (
    <div className="flex-none hidden md:flex md:flex-1 ml-2">
      {categories.map((category) => {
        return (
          <Link
            key={category.name}
            className="btn btn-ghost btn-sm rounded-btn text-gray-700 dark:text-white"
            to={category.url}>
            {category.text}
          </Link>
        );
      })}
    </div>
  );
}
