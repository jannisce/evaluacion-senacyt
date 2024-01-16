import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Layout from '../../components/Layout/Layout'

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
        <h2 className='text-2xl lg:text-3xl text-left lg:mb-32 border-b-2 border-gray-300 pb-2'>
          Usuarios
        </h2>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {users.map((user) => (
            <div
              key={user.id}
              className='border border-gray-300 p-4 rounded-md'
            >
              <h3 className='text-xl font-semibold mb-2'>
                {user.nombre_completo}
              </h3>
              <p>Email: {user.email}</p>
              <p>Teléfono: {user.telefono}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Users
