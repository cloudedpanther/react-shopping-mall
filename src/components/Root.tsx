import Footer from './Footer';
import Header from './Header';
import { Outlet } from 'react-router-dom';

export default function Root() {
  return (
    <section className="drawer-content">
      <Header />
      <Outlet />
      <Footer />
    </section>
  );
}
