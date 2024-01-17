import React, { useState } from 'react'
import axios from 'axios'

const UserDeletion = () => {
  const [formData, setFormData] = useState({
    id: '',
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await axios.delete(
        `https://n913tmwy61.execute-api.us-east-2.amazonaws.com/items/${formData.id}`
      )

      // Limpiar el formulario después de una solicitud exitosa
      setFormData({
        id: '',
      })
    } catch (error) {
      console.error('Error al enviar el formulario:', error)
    }
  }

  return (
    <form className='max-w-2xl mx-auto p-4' onSubmit={handleSubmit}>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        <div className='mb-4 '>
          <label className='text-2xl block font-semibold mb-1' htmlFor='id'>
            ID del usuario a eliminar:
          </label>
          <input
            className='w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500'
            type='text'
            id='id'
            name='id'
            value={formData.id}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>

      <div className='mt-4'>
        <button
          className='bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md focus:outline-none'
          type='submit'
        >
          Enviar
        </button>
      </div>
    </form>
  )
}

export default UserDeletion
