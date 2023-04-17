import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import SideMenu from '../components/SideMenu/SideMenu';
import Footer from '../components/Footer/Footer';
import { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { fetchProducts, productsInitializer } from '../store';
import ScrollToTop from '../components/Scroll/ScrollToTop';

export default function Root() {
  const [sideMenuOpen, setSideMenuOpen] = useState(false);

  const handleSideMenuToggle = () => {
    setSideMenuOpen((prev) => !prev);
  };

  const setProducts = useSetRecoilState(productsInitializer);

  useEffect(() => {
    const initProducts = async () => {
      const products = await fetchProducts();
      setProducts(products);
    };

    initProducts();
  }, []);

  return (
    <ScrollToTop>
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
    </ScrollToTop>
  );
}
