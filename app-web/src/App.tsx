import React from 'react';

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Blog from './blog/Blog';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Error404 from './pages/Error404';

export const router = createBrowserRouter([{
  path: process.env.PUBLIC_URL,
  children: [
    {path: '*', element: <Error404 />},
    {path: 'sample', element: <Blog />},
    {path: 'privacypolicy', element: <PrivacyPolicy />},
    {path: 'privacypolicy/:lang', element: <PrivacyPolicy />},
  ],
}]);

// アプリケーション
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
