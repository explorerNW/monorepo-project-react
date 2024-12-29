import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { lazy, Suspense } from 'react';

const UserProfile = lazy(() => import('./pages/user-profile'));

const router = createBrowserRouter([
  {
    path: '',
    element: <App />,
  },
  {
    path: 'user-profile',
    element: (
      <Suspense fallback={'loading...'}>
        <UserProfile />
      </Suspense>
    ),
  },
]);

export default router;
