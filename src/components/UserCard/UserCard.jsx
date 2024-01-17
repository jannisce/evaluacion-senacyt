import React from 'react'
import { Link } from 'react-router-dom'

const UserCard = ({ user }) => {
  return (
    <Link
      to={`/usuarios/${user.id}`}
      className='w-80 bg-white shadow-md rounded-md overflow-hidden mx-auto max-w-sm'
    >
      <div className='m-2'>
        <h3 className='text-3xl font-semibold mb-2'>{user.nombre_completo}</h3>
        <p className='text-lg text-gray-600 flex items-center'>
          <img
            className='m-2'
            width='24'
            height='24'
            src='https://img.icons8.com/material-outlined/96/new-post.png'
            alt='email'
          />
          {user.email}
        </p>
        <p className='text-lg text-gray-600 flex items-center'>
          <img
            className='m-2'
            width='24'
            height='24'
            src='https://img.icons8.com/fluency-systems-regular/96/phone.png'
            alt='phone'
          />
          {user.telefono}
        </p>
      </div>
      <div className='bg-gray-100 p-4 border-t border-gray-200'>
        <p className='text-md text-gray-500 flex items-center'>
          <img
            className='m-2'
            width='24'
            height='24'
            src='https://img.icons8.com/material-outlined/96/id-verified.png'
            alt='id-verified'
          />
          {user.id}
        </p>
        <p className='text-md text-gray-500 flex items-center'>
          <img
            className='m-2'
            width='25'
            height='25'
            src='https://img.icons8.com/material-outlined/96/birthday.png'
            alt='birthday'
          />
          Fecha de Nacimiento: {user.fecha_nacimiento}
        </p>
      </div>
    </Link>
  )
}

export default UserCard
