import React from 'react'
import { useNavigate } from 'react-router-dom'

const Welcome = () => {
  const navigate = useNavigate()

  const handleCLick = () => {
    navigate('/home')
  }

  return (
    <div className='flex justify-center items-center h-screen bg-gray-100'>
      <div className='absolute top-0 left-0 right-0 bottom-0' />
      <div
        className='bg-white p-8 rounded-lg shadow-md w-80'
        style={{ position: 'relative', zIndex: 1 }}
      >
        <h2 className='text-2xl font-semibold mb-4 text-center'>
          Evaluación Senacyt
        </h2>
        <div className='space-y-4'>
          <h2 className=' mb-4 text-center text-gray-600'>
            Hecho por: Javier Chavez
          </h2>

          <button
            type='submit'
            className='bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded w-full'
            onClick={handleCLick}
          >
            Iniciar Sesión
          </button>
        </div>
      </div>
    </div>
  )
}

export default Welcome
