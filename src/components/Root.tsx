import { Outlet } from 'react-router-dom';
import Header from './Header';
import SideMenu from './SideMenu';
import Footer from './Footer';
import { useState } from 'react';

export default function Root() {
  const [sideMenuOpen, setSideMenuOpen] = useState(false);

  const handleSideMenuToggle = () => {
    setSideMenuOpen((prev) => !prev);
  };

  return (
    <div className="drawer">
      <input
        type="checkbox"
        id="side-menu"
        className="drawer-toggle"
        checked={sideMenuOpen}
        onChange={handleSideMenuToggle}
      />
      <section className="drawer-content">
        <Header />
        <main className="main pt-16">
          <Outlet />
        </main>
        <Footer />
      </section>
      <SideMenu onSideMenuToggle={handleSideMenuToggle} />
    </div>
  );
}
