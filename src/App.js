import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import RootLayout from './ui/RootLayout';
import Blogs from './features/blog/Blogs';
import AddForm from './features/blog/AddForm';

const App = () => {

  // const per = [11, 22, 44, 55];
  // console.log([...per, 99]);
  // const p = {
  //   name: 'ram'
  // };

  // console.log({ ...p, age: 90 });

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Blogs />
        },
        {
          path: 'add-blog',
          element: <AddForm />
        }
      ]
    }
  ]);
  return <RouterProvider router={router} />
}

export default App