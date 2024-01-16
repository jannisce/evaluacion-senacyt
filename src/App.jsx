import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

//pages
import Welcome from './pages/Welcome/Welcome.jsx'
import Home from './pages/Home/Home.jsx'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage.jsx'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Welcome />}></Route>

        <Route path='/home' element={<Home />} />

        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
