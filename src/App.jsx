import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from './layouts/DefaultLayout'
import HomePage from './pages/HomePage'
import MoviesPage from "./pages/MoviesPage"
import SingleMoviePage from "./pages/SingleMoviePage"

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout/>}>
            {/* rotte */}
            <Route path='/' element={ <HomePage />} />
            <Route path='/movies' element={ <MoviesPage />} />
            <Route path='/movies/:id' element={ <SingleMoviePage />} />
            
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
