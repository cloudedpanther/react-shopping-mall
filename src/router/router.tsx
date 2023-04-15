import { createBrowserRouter, Navigate } from 'react-router-dom';
import Root from '../components/Root';
import Home from '../pages/Home';
import Fashion from '../pages/Fashion';
import Accessory from '../pages/Accessory';
import Digital from '../pages/Digital';
import Cart from '../pages/Cart';
import Product from '../pages/Product';
import NotFound from '../pages/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'fashion',
        element: <Fashion />,
      },
      {
        path: 'accessory',
        element: <Accessory />,
      },
      {
        path: 'digital',
        element: <Digital />,
      },
      {
        path: 'product/:id',
        element: <Product />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: '404',
        element: <NotFound />,
      },
      {
        path: '*',
        element: <Navigate to="/404" />,
      },
    ],
    errorElement: <Navigate to="/404" />,
  },
]);

export default router;
