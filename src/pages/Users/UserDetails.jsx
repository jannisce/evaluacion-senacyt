import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Layout from '../../components/Layout/Layout'
import { useParams } from 'react-router-dom'
import BackButton from '../../components/BackButton/BackButton'
import Loading from '../../components/Loading/Loading'
import UserDetailedCard from '../../components/UserDetailedCard/UserDetailedCard'

const UserDetails = ( ) => {
  const { id } = useParams()
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(
          `https://n913tmwy61.execute-api.us-east-2.amazonaws.com/items/${id}`
        )
        setUser(response.data)
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    fetchUserDetails()

  }, [id])

  return (
    <Layout>

      <BackButton title="Volver a usuarios" to="/usuarios"/>

      {/* {loading && <p>Cargando detalles del usuario...</p>} */}
      {loading && <Loading />}
      {error && <p className='m-6 text-2xl'>Error al cargar los detalles del usuario: {error}</p>}

      {user && (
        <div className='m-4 bg-gray-100  p-6 rounded-md shadow-md mx-auto max-w-6xl'>
          <UserDetailedCard user={user} />
        </div>
      )}
    </Layout>
  )
}

export default UserDetails
