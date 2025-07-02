import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Router, RouterProvider } from 'react-router-dom'; 
import './index.css'
import App from './App.jsx'
import Routing from './Routing.jsx';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import { Route } from 'react-router-dom';
import User from './components/User/user.jsx';
import Github, { githubInfoLoader } from './components/Github/github.jsx';

/*
Method :1
const router = createBrowserRouter([
  {
    path : '/',
    element : <Routing/>,
    children:[
      {
        path:'home',
        element:<Home/>
      },
      {
        path:'about',
        element:<About/>
      },
      {
        path:'contact',
        element:<Contact/>
      },
    ]
  }
])*/

/* Method : 2 (Optimized)*/
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Routing/>}>
      <Route path='home' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='user/:userId' element={<User/>}/>
      <Route loader={githubInfoLoader} path='github' element={<Github/>}/>
    </Route>
))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
