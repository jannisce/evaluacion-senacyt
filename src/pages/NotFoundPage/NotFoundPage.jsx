import React from 'react'

const NotFoundPage = () => {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-500'>
      <div className='absolute top-0 left-0 right-0 bottom-0' />
      <div
        className='bg-white p-8 rounded shadow-md'
        style={{ position: 'relative', zIndex: 1 }}
      >
        <h1 className='text-3xl font-semibold mb-4'>
          Esta página a la que intentas acceder no está disponible
        </h1>
        <p className='text-gray-600'>
          El enlace al que intentas acceder podría estar roto o la página puede
          haber sido eliminada.
        </p>
        <a
          href='/'
          className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full block mt-4 text-center transition duration-300 ease-in-out'
        >
          Volver al inicio
        </a>
      </div>
    </div>
  )
}

export default NotFoundPage
