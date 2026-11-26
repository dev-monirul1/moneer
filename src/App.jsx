import { useState } from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import Home from './components/Home'
import About from './components/About'
import RootLayout from './components/layouts/RootLayout'
import Error from './components/layouts/Error'
import FaqIndex from './components/pages/faq/FaqIndex'
import ContactIndex from './components/pages/contact/ContactIndex'
import ContactUsIndex from './components/pages/contact-us/ContactUsIndex'


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path='*' element={<Error />}/>
        <Route element={<RootLayout/>}>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/faq' element={<FaqIndex />}/>
          <Route path='/contact-us' element={<ContactIndex />}/>
        </Route>
      </>
    )
  )
  return (
    <RouterProvider router={router} />
  )
}

export default App
