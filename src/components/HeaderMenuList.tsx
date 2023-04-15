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

export default function HeaderMenuList() {
  return (
    <div className="flex-none hidden md:flex md:flex-1 ml-2">
      {menuList.map((menu) => {
        return (
          <Link
            key={menu.category}
            className="btn btn-ghost btn-sm rounded-btn text-gray-700 dark:text-white"
            to={menu.url}>
            {menu.text}
          </Link>
        );
      })}
    </div>
  );
}
