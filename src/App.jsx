import { useState } from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import Home from './components/Home'
import About from './components/About'


function App() {

  const router = createBrowserRouter (
    createRoutesFromElements(
      <>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      </>
    )
  )
  return (
    <RouterProvider router={router}/>
  )
}

export default App
