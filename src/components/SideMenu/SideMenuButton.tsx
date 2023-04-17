import MenuIcon from '../../icons/MenuIcon';

export default function SideMenuButton() {
  return (
    <label
      htmlFor="side-menu"
      className="flex-none lg:hidden btn btn-square btn-ghost w-10 sm:w-auto">
      <MenuIcon />
    </label>
  );
}
