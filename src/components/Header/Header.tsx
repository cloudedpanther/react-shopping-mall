import HeaderLogo from './HeaderLogo';
import SideMenuButton from '../SideMenu/SideMenuButton';
import HeaderMenuList from './HeaderMenuList';
import UtilityNav from './UtilityNav';

export default function Header() {
  return (
    <div className="fixed z-10 w-full navbar shadow-lg bg-white dark:bg-neutral text-neutral-content">
      <div className="flex w-full xl:container xl:m-auto">
        <SideMenuButton />
        <HeaderLogo />
        <HeaderMenuList />
        <UtilityNav />
      </div>
    </div>
  );
}
