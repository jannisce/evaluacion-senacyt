import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const UserDetailedCard = ({ user }) => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false)
  const [editedUser, setEditedUser] = useState({ ...user })

  const handleEditClick = () => {
    setIsEditing(true)
  }

  const handleCancelClick = () => {
    setIsEditing(false)
    setEditedUser({ ...user })
  }

  const handleConfirmClick = async () => {
    await axios.put(
      `https://n913tmwy61.execute-api.us-east-2.amazonaws.com/items`,
      user
    )
    setIsEditing(false)
  }

  const handleDeleteClick = async () => {
    const shouldDelete = window.confirm(
      `¿Estás seguro de que quieres eliminar el usuario: ${user.nombre_completo} con ID: ${user.id}?`
    )

    if (shouldDelete) {
      try {
        await axios.delete(
          `https://n913tmwy61.execute-api.us-east-2.amazonaws.com/items/${user.id}`
        )
        // console.log(`Usuario con ID ${user.id} eliminado`)
        navigate('/usuarios')
      } catch (error) {
        console.error('Error al eliminar el usuario:', error)
      }
    }
  }

  const handleInputChange = (e) => {
    setEditedUser({
      ...editedUser,
      [e.target.name]: e.target.value,
    })
  }

  const fields = [
    'nombre',
    'codigo_postal',
    'fecha_nacimiento',
    'provincia',
    'apellido2',
    'email',
    'apellido1',
    'numero_via',
    'direccion_completa',
    'direccion',
    'ssn',
    'tarjeta_fecha',
    'nombre_completo',
    'iban',
    'municipio',
    'contrasenya',
    'pasaporte',
    'telefono',
    'nombre_usuario',
    'tarjeta_cvc',
    'bic',
    'tarjeta',
  ]

  const renderInput = (fieldName) => (
    <p className='text-lg mb-4' key={fieldName}>
      <span className={`font-semibold`}>{fieldName}:</span>
      {isEditing ? (
        <input
          type='text'
          name={fieldName}
          value={editedUser[fieldName]}
          onChange={handleInputChange}
          className={` ${ isEditing ? 'bg-blue-200' : ''}`}
        />
      ) : (
        <input 
          type='text' 
          name={fieldName} 
          value={user[fieldName]} 
          readOnly
        />
      )}
    </p>
  )

  const renderedFields = fields.map(renderInput)

  return (
    <div className='bg-white shadow-md rounded-md p-6 w-full max-w-6xl mx-auto flex flex-col'>
      <h2 className='text-4xl font-semibold mb-6'>{user.nombre_completo}</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 flex-grow'>
        <div>{renderedFields}</div>

        <div>
          <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md mr-2'
            onClick={isEditing ? handleConfirmClick : handleEditClick}
          >
            {isEditing ? 'Confirmar' : 'Editar'}
          </button>
          {isEditing && (
            <button
              className='bg-gray-500 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-md'
              onClick={handleCancelClick}
            >
              Cancelar
            </button>
          )}
          {!isEditing && (
            <button
              className='bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-md ml-2'
              onClick={handleDeleteClick}
            >
              Eliminar
            </button>
          )}
        </div>
      </div>

      <div className='mt-8'>
        <p className='text-lg mb-4'>
          <span className='font-semibold'>ID:</span> {user.id}
        </p>
      </div>
    </div>
  )
}

export default UserDetailedCard
