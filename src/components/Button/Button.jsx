import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ title, ...props }) => {

  const style = `text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl
  h-32 w-60 sm:h-40 sm:w-72 md:h-48 md:w-80 lg:h-56 lg:w-96 xl:h-64 xl:w-112
  m-4 sm:mx-6 lg:mx-8 xl:mx-10
  bg-blue-500 hover:bg-blue-700 
  text-white font-semibold rounded-md 
  flex items-center justify-center
  shadow-md transition-all duration-300`

  return (
    <>
      <Link className={style} {...props}>
        <span className='text-center p-8'>{title}</span>
      </Link>
    </>
  )
}

export default Button
