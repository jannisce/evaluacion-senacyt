import React from 'react'
import { Link } from 'react-router-dom'

const BackButton = ( {title, ...props} ) => {
  return (
    <Link
      {...props}
      className='inline-flex items-center p-3 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-md shadow-md transition-all duration-300'
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
        className='w-6 h-6 mr-2'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M10 19l-7-7m0 0l7-7m-7 7h18'
        />
      </svg>
      {title || 'Volver'}
    </Link>
  )
}

export default BackButton
