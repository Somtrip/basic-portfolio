import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/home/Home.jsx'
import About from './components/about/About.jsx'
import Contact from './components/contact/Contact.jsx'
import Faq from './components/faq/Faq.jsx'
import Result from './components/result/Result.jsx'
import JEEmain from './components/jeemain/JEEmain.jsx'

 



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} > 
    <Route path='' element={<Home />} />
    <Route path='about' element={<About />} />
    <Route path='contact' element={<Contact />} />
    <Route path='faq' element={<Faq />} />
    <Route path='result' element={<Result />} />
    <Route path='jeemain' element={<JEEmain />} />

    </Route>
  )
 
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
