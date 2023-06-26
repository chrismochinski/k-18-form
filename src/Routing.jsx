import { lazy } from 'react';

const App = lazy(() => import('./App'));
const SubmissionPage = lazy(() => import('./SubmissionPage'));

const routes = [
  {
    path: '/',
    component: App,
    exact: true,
  },
  {
    path: '/submission',
    component: SubmissionPage,
    exact: true,
  },
];

export default routes;
