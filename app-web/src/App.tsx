import React from 'react';

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Blog from './blog/Blog';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Error404 from './pages/Error404';

export const router = createBrowserRouter([
  {path: '*', element: <Error404 />},
  {path: 'web/sample', element: <Blog />},
  {path: 'web/privacypolicy', element: <PrivacyPolicy />},
  {path: 'web/privacypolicy/:lang', element: <PrivacyPolicy />},
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
