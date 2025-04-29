import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import ContentGenerator from './pages/ContentGenerator';
import Scheduler from './pages/Scheduler';
import Analytics from './pages/Analytics';
import Settings from './pages/Settings';
import Account from './pages/Account';

/**
 * Application router configuration 
 */
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: 'content-generator',
        element: <ContentGenerator />,
      },
      {
        path: 'scheduler',
        element: <Scheduler />,
      },
      {
        path: 'analytics',
        element: <Analytics />,
      },
      {
        path: 'settings',
        element: <Settings />,
      },
      {
        path: 'account',
        element: <Account />,
      },
    ],
  },
]);

export default router; 