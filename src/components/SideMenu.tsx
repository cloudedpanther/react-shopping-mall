import { Link } from 'react-router-dom';

const menuList = [
  {
    category: 'fashion',
    text: '패션',
    url: '/fashion',
  },
  {
    category: 'accessory',
    text: '액세서리',
    url: '/accessory',
  },
  {
    category: 'digital',
    text: '디지털',
    url: '/digital',
  },
];

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
        {menuList.map((menu) => {
          return (
            <li key={menu.category}>
              <Link
                className="!text-gray-600 active:!text-white dark:!text-white"
                to={menu.url}
                onClick={handleLinkClick}>
                {menu.text}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
