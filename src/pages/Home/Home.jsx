// Home.jsx
import React from 'react'
import Header from '../../components/Header/Header'
import Button from '../../components/Button/Button'
import { Link } from 'react-router-dom'

const Home = () => {

  

  return (
    <>
      <Header />
      <div className='text-2xl lg:text-3xl text-left lg:mb-32 p-6 border-red-300 border'>
        Bienvenido a la plataforma
      </div>
      <div className='flex flex-col items-center justify-center p-5 lg:flex-row lg:justify-center'>
          <Button title='Ver usuarios' to="/usuarios"/>
          <Button title='Agregar usuario' to="/agregar-usuario"/>
          <Button title='Eliminar usuario' to="/eliminar-usuario"/>
      </div>
    </>
  )
}

export default Home
