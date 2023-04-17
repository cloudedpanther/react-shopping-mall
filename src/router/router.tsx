import { createBrowserRouter } from 'react-router-dom';
import Root from '../pages/Root';
import Home from '../pages/Home';
import Cart from '../pages/Cart';
import Product from '../pages/Product';
import NotFound from '../pages/NotFound';
import CategoryPage from '../pages/CategoryPage';
import Error from '../pages/Error';

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
        element: <CategoryPage />,
      },
      {
        path: 'accessory',
        element: <CategoryPage />,
      },
      {
        path: 'digital',
        element: <CategoryPage />,
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
        element: <NotFound />,
      },
    ],
    errorElement: <Error />,
  },
]);

export default router;
