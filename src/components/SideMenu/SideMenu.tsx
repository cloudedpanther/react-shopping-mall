import { Link } from 'react-router-dom';
import { categories } from '../../utils/category';

interface SideMenuProps {
  onSideMenuToggle: () => void;
}

export default function SideMenu({ onSideMenuToggle }: SideMenuProps) {
  const handleLinkClick = () => {
    onSideMenuToggle();
  };

  return (
    <div className="drawer-side">
      <label htmlFor="side-menu" className="drawer-overlay"></label>
      <ul className="menu w-60 sm:w-80 p-4 overflow-y-auto bg-white dark:bg-base-100">
        {categories.map((category) => {
          return (
            <li key={category.name}>
              <Link
                className="!text-gray-600 active:!text-white dark:!text-white"
                to={category.url}
                onClick={handleLinkClick}>
                {category.text}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
