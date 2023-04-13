import { createBrowserRouter } from 'react-router-dom';
import Root from '../components/Root';
import Home from '../pages/Home';
import Fashion from '../pages/Fashion';
import Accessory from '../pages/Accessory';
import Digital from '../pages/Digital';
import Cart from '../pages/Cart';

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
        path: 'cart',
        element: <Cart />,
      },
    ],
  },
]);

export default router;
