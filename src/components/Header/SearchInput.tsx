import { ChangeEvent, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { productsSearchSelector } from '../../store';
import { Link } from 'react-router-dom';

const inputClassUp =
  'fixed left-0 top-4 opacity-0 sm:opacity-100 sm:static sm:flex w-full input input-ghost focus:outline-0 rounded-none sm:rounded bg-gray-300 dark:bg-gray-600 !text-gray-800 dark:!text-white sm:transform-none transition-all js-searchInput -z-10';

const inputClassDown =
  'fixed left-0 top-4 opacity-0 sm:opacity-100 sm:static sm:flex w-full input input-ghost focus:outline-0 rounded-none sm:rounded bg-gray-300 dark:bg-gray-600 !text-gray-800 dark:!text-white sm:transform-none transition-all js-searchInput translate-y-full !opacity-100';

export default function SearchInput() {
  const [inputClass, setInputClass] = useState(inputClassUp);
  const [keyword, setKeyword] = useState('');
  const searchResult = useRecoilValue(productsSearchSelector(keyword));

  const handleSearchButtonClick = () => {
    const newClass =
      inputClass === inputClassUp ? inputClassDown : inputClassUp;
    setInputClass(newClass);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const handleLinkClick = () => {
    setKeyword('');
  };

  return (
    <div className="dropdown">
      <button
        type="button"
        className="flex sm:hidden w-10 sm:w-auto mx-0 px-0 sm:mx-2 sm:px-2 btn btn-ghost js-search"
        onClick={handleSearchButtonClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 stroke-gray-700 dark:stroke-white"
          fill="none"
          viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
      </button>
      <input
        type="text"
        placeholder="검색"
        className={inputClass}
        value={keyword}
        onChange={handleInputChange}
      />
      <ul className="!fixed left-0 sm:!absolute sm:top-14 menu dropdown-content w-full sm:w-64 max-h-96 shadow text-base-content overflow-y-auto bg-white dark:bg-gray-600">
        {searchResult.map((product) => {
          return (
            <li key={product.id + Date.now()}>
              <Link
                to={`/product/${product.id}`}
                className="text-left js-searchedItem"
                onClick={handleLinkClick}>
                <span className="text-gray-600 dark:text-white line-clamp-2">
                  {product.title}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
