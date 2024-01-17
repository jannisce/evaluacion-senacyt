import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

//pages
import Welcome from './pages/Welcome/Welcome.jsx'
import Home from './pages/Home/Home.jsx'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage.jsx'
import Users from './pages/Users/Users.jsx'
import UserDetails from './pages/Users/UserDetails.jsx'
import AddUser from './pages/Users/AddUser.jsx'
import DeleteUser from './pages/Users/DeleteUser.jsx'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Welcome />}></Route>

        <Route path='/home' element={<Home />} />
        <Route path='/usuarios' element={<Users />} />
        <Route path='/usuarios/:id' element={<UserDetails />} />
        <Route path='/usuarios/agregar' element={<AddUser />} />
        <Route path='/usuarios/eliminar' element={<DeleteUser />} />

        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
