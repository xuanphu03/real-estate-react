import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layouts/Layout'
import NotFound from './pages/404'
import Home from './pages/home'
import SearchInOffers from './pages/search'
import './style.css'
import Room from './pages/room'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/:id',
        element: <Room />
      },
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/search',
        element: <SearchInOffers />
      }
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
])

function App() {
  return <RouterProvider router={router} />
}

const root = createRoot(document.getElementById('root'))

root.render(<App />)
