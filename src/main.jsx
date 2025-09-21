import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Trendmovinfo from './Trendmovinfo.jsx'
import Peoplefavinfo from './Peoplefavinfo.jsx'
import Myfavorite from './Myfavorite.jsx'
import Login from './Login.jsx'

const Router=createBrowserRouter(
  [
    {
      path:'/',
      element:<App/>
    },
    {
      path:'/trendingmovie/:id',
      element:<Trendmovinfo/>
    },
    { 
      path:'/peoplefav/:id',
      element:<Peoplefavinfo/>
    },
    {
      path:'/favorites',
      element:<Myfavorite/>
    },
    {
      path:'/login',
      element:<Login/>
    }
  ]
)

createRoot(document.getElementById('root')).render(
  
    <RouterProvider router={Router}/>
)
