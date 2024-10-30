import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from './components/Home/Home';
import Foods from './components/Foods/Foods';
import FoodDetails from './components/Foods/FoodDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/Foods",
        loader: () => fetch('https://www.themealdb.com/api/json/v1/1/categories.php'),
        element: <Foods></Foods>
      },
      {
        path: "/Details/:DetailsId",
        loader: ({params}) => fetch(`www.themealdb.com/api/json/v1/1/categories.php?i=${params.DetailsId}`),
        element: <FoodDetails></FoodDetails>
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
