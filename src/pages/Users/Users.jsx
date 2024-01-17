import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Layout from '../../components/Layout/Layout'
import { Link } from 'react-router-dom'
import UserCard from '../../components/UserCard/UserCard'

const Users = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios
      .get('https://n913tmwy61.execute-api.us-east-2.amazonaws.com/items')
      .then((response) => {
        const validUsers = response.data.filter(isValidUser)
        setUsers(validUsers)
      })
      .catch((error) => {
        console.error('Error al obtener usuarios:', error)
      })
  }, [])

  //Para validar que los usuarios tengan los atributos requeridos
  const isValidUser = (user) => {
    const requiredAttributes = ['id', 'nombre_completo', 'email', 'telefono']
    return requiredAttributes.every(
      (attr) => user[attr] && typeof user[attr] === 'string'
    )
  }

  return (
    <Layout>
      <div className='p-6'>
        <Link
          to='/home'
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
          Volver al inicio
        </Link>

        <div className='m-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {users.map((user) => (
            <div key={user.id} className='sm:flex w-full'>
              <UserCard user={user} />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Users
