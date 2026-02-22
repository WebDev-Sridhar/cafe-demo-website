import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './pages/Home'
import Menu from './pages/Menu'
import About from './pages/About'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import ProductDetail from './pages/ProductDetail'



const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'menu', element: <Menu /> },
      { path: 'about', element: <About /> },
      { path: 'gallery', element: <Gallery /> },
      { path: 'contact', element: <Contact /> },
      { path: 'menu/:id', element: <ProductDetail /> },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
