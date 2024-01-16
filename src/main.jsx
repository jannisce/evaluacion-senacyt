import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './index.css'
import Welcome from './pages/Welcome/Welcome.jsx'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Welcome />}></Route>

        <Route path='/home' element={<App />} />

        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
