import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home';
import RootLayout from './components/RootLayout';
import NotFound from './pages/NotFound';


const App = () => {

  const router = createBrowserRouter([

    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />,

        },

        {
          path: '*',
          element: <NotFound />
        }



      ]

    },



  ]);

  return <RouterProvider router={router} />
}

export default App