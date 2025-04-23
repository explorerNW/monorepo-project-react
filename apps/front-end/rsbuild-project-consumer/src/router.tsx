import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { lazy, Suspense } from 'react';

const UserProfile = lazy(() => import('./pages/user-profile'));

const UserProfileWrapper = () => (
  <Suspense fallback={'loading...'}>
    <UserProfile />
  </Suspense>
);

const router = createBrowserRouter([
  {
    path: '',
    element: <App />,
  },
  {
    path: 'user-profile',
    element: <UserProfileWrapper />,
  },
]);

export default router;
