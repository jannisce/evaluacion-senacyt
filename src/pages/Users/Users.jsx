import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Layout from '../../components/Layout/Layout'
import UserCard from '../../components/UserCard/UserCard'
import BackButton from '../../components/BackButton/BackButton'
import Loading from '../../components/Loading/Loading'

const Users = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    axios
      .get('https://n913tmwy61.execute-api.us-east-2.amazonaws.com/items')
      .then((response) => {
        const validUsers = response.data.filter(isValidUser)
        setUsers(validUsers)
        // console.log('Usuarios:', response.data)
      })
      .catch((error) => {
        setError(error.message)
        console.error('Error al obtener usuarios:', error)
      })
      .finally(() => {
        setLoading(false)
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
      <BackButton title='Volver al inicio' to='/home' />

      {loading && <Loading />}
      {error && <p className='m-6 text-2xl'>Error al cargar usuarios: {error}</p>}

      <div className='m-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {users.map((user) => (
          <div key={user.id} className='sm:flex w-full'>
            <UserCard user={user} />
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default Users
