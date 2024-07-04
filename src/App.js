import React from 'react'
import { Router, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Page1 from './pages/nested-compo/Page1';
import Page2 from './pages/nested-compo/Page2';

const App = () => {

  const router = createBrowserRouter([

    {
      path: '/',
      element: <Home />,
      children: [
        {
          index: true,
          element: <Page1 />,
        },

        {
          path: 'page2',
          element: <Page2 />,

        },

      ]

    },
    {
      path: 'about-page',
      element: <About />
    }


  ]);

  return <RouterProvider router={router} />
}

export default App