import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import AboutUs from './components/AboutUs/AboutUs.jsx';
import Calculator from './components/Calculator/Calculator.jsx';
import StartPage from './components/StartPage/StartPage.jsx';
import Main from './components/Main/Main.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/about-us',
        element: <AboutUs></AboutUs>
      },
      {
        path: '/calculator',
        element: <Calculator></Calculator>
      },
      {
        path: '/start-page',
        element: <StartPage></StartPage>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
