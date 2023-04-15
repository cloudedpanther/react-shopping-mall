import ThemeToggleButton from './ThemeToggleButton';
import SearchInput from './SearchInput';
import CartButton from './CartButton';

export default function UtilityNav() {
  return (
    <div className="flex items-center px-2">
      <ThemeToggleButton />
      <SearchInput />
      <CartButton />
    </div>
  );
}
