import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Layout from '../../components/Layout/Layout'
import { useParams } from 'react-router-dom'
import BackButton from '../../components/BackButton/BackButton'
import Loading from '../../components/Loading/Loading'

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
        <div className='m-4 bg-gray-100  p-6 rounded-md shadow-md mx-auto max-w-md'>
          <h2 className='text-2xl font-semibold mb-4'>
            {user.nombre_completo}
          </h2>

          <div className='w-80 grid grid-cols-1 gap-4 sm:grid-cols-2'>
            <div>
              <p>
                <span className='font-semibold'>Nombre:</span> {user.nombre}
              </p>
              <p>
                <span className='font-semibold'>Apellido 1:</span>{' '}
                {user.apellido1}
              </p>
              <p>
                <span className='font-semibold'>Apellido 2:</span>{' '}
                {user.apellido2}
              </p>
              <p>
                <span className='font-semibold'>Fecha de Nacimiento:</span>{' '}
                {user.fecha_nacimiento}
              </p>
              <p>
                <span className='font-semibold'>Email:</span> {user.email}
              </p>
            </div>

            <div>
              <p>
                <span className='font-semibold'>Teléfono:</span> {user.telefono}
              </p>
              <p>
                <span className='font-semibold'>Dirección:</span>{' '}
                {user.direccion}
              </p>
              <p>
                <span className='font-semibold'>Código Postal:</span>{' '}
                {user.codigo_postal}
              </p>
              <p>
                <span className='font-semibold'>Municipio:</span>{' '}
                {user.municipio}
              </p>
              <p>
                <span className='font-semibold'>Provincia:</span>{' '}
                {user.provincia}
              </p>
            </div>
          </div>

          <div className='mt-4'>
            <p>
              <span className='font-semibold'>ID:</span> {user.id}
            </p>
            <p>
              <span className='font-semibold'>SSN:</span> {user.ssn}
            </p>
            <p>
              <span className='font-semibold'>IBAN:</span> {user.iban}
            </p>
            <p>
              <span className='font-semibold'>Tarjeta:</span> {user.tarjeta}
            </p>
          </div>
        </div>
      )}
    </Layout>
  )
}

export default UserDetails
