import { RouterProvider } from 'react-router-dom';
import router from './router/router';

function App() {
  return (
    <div className="drawer">
      <input type="checkbox" id="side-menu" className="drawer-toggle" />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
