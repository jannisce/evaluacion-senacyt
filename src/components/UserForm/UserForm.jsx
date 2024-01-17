import React, { useState } from 'react'
import axios from 'axios'

function generarIdUnico() {
  const numeros = generarNumerosAleatorios(8) // Generar 8 dígitos aleatorios
  const letras = generarLetraAleatoria() // Generar una letra aleatoria
  return `${numeros}${letras}`
}

function generarNumerosAleatorios(cantidad) {
  let numeros = ''
  for (let i = 0; i < cantidad; i++) {
    numeros += Math.floor(Math.random() * 10) // Números aleatorios del 0 al 9
  }
  return numeros
}

function generarLetraAleatoria() {
  const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const indice = Math.floor(Math.random() * letras.length)
  return letras.charAt(indice)
}

const UserForm = () => {
  // const [formData, setFormData] = useState({
    // nombre: '',
    // codigo_postal: '',
    // fecha_nacimiento: '',
    // provincia: '',
    // apellido2: '',
    // email: '',
    // apellido1: '',
    // numero_via: '',
    // direccion_completa: '',
    // direccion: '',
    // ssn: '',
    // tarjeta_fecha: '',
    // nombre_completo: '',
    // iban: '',
    // municipio: '',
    // contrasenya: '',
    // pasaporte: '',
    // telefono: '',
    // nombre_usuario: '',
    // tarjeta_cvc: '',
    // bic: '',
    // id: generarIdUnico(),
    // tarjeta: '',
  // })

  const [formData, setFormData] = useState({
    nombre: 'Javier',
    codigo_postal: '01051',
    fecha_nacimiento: '25/08/2002',
    provincia: 'Guatemala',
    apellido2: 'Escobar',
    email: 'javierjlace@gmail.com',
    apellido1: 'Chavez',
    numero_via: '123',
    direccion_completa: 'Guatemala',
    direccion: 'SCP',
    ssn: '1231',
    tarjeta_fecha: '05/26',
    nombre_completo: 'Javier Chavez',
    iban: '123123123',
    municipio: 'SCP',
    contrasenya: 'password1',
    pasaporte: '8927319',
    telefono: '12345678',
    nombre_usuario: 'jannisce',
    tarjeta_cvc: '123',
    bic: 'ASKLJW1WJ3L',
    id: generarIdUnico(),
    tarjeta: '128937128739',
  })

  // console.log(formData)

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
      await axios.put(
        `https://n913tmwy61.execute-api.us-east-2.amazonaws.com/items`,
        formData
      )

      // Limpiar el formulario después de una solicitud exitosa
      setFormData({
        nombre: '',
        codigo_postal: '',
        fecha_nacimiento: '',
        provincia: '',
        apellido2: '',
        email: '',
        apellido1: '',
        numero_via: '',
        direccion_completa: '',
        direccion: '',
        ssn: '',
        tarjeta_fecha: '',
        nombre_completo: '',
        iban: '',
        municipio: '',
        contrasenya: '',
        pasaporte: '',
        telefono: '',
        nombre_usuario: '',
        tarjeta_cvc: '',
        bic: '',
        id: '',
        tarjeta: '',
      })
    } catch (error) {
      console.error('Error al enviar el formulario:', error)
    }
  }

  return (
    <form className='max-w-2xl mx-auto p-4' onSubmit={handleSubmit}>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        <div className='mb-4'>
          <label className='block text-sm font-semibold mb-1' htmlFor='nombre'>
            Nombre:
          </label>
          <input
            className='w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500'
            type='text'
            id='nombre'
            name='nombre'
            value={formData.nombre}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className='mb-4'>
          <label
            className='block text-sm font-semibold mb-1'
            htmlFor='nombre_completo'
          >
            nombre_completo:
          </label>
          <input
            className='w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500'
            type='text'
            id='nombre_completo'
            name='nombre_completo'
            value={formData.nombre_completo}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className='mb-4'>
          <label className='block text-sm font-semibold mb-1' htmlFor='email'>
            Email:
          </label>
          <input
            className='w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500'
            type='text'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className='mb-4'>
          <label
            className='block text-sm font-semibold mb-1'
            htmlFor='telefono'
          >
            Teléfono:
          </label>
          <input
            className='w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500'
            type='text'
            id='telefono'
            name='telefono'
            value={formData.telefono}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className='mb-4'>
          <label
            className='block text-sm font-semibold mb-1'
            htmlFor='direccion'
          >
            Dirección completo:
          </label>
          <input
            className='w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500'
            type='text'
            id='direccion_completa'
            name='direccion_completa'
            value={formData.direccion_completa}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className='mb-4'>
          <label
            className='block text-sm font-semibold mb-1'
            htmlFor='fecha_nacimiento'
          >
            fecha_nacimiento:
          </label>
          <input
            className='w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500'
            type='text'
            id='fecha_nacimiento'
            name='fecha_nacimiento'
            value={formData.fecha_nacimiento}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className='mb-4'>
          <label
            className='block text-sm font-semibold mb-1'
            htmlFor='provincia'
          >
            provincia:
          </label>
          <input
            className='w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500'
            type='text'
            id='provincia'
            name='provincia'
            value={formData.provincia}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className='mb-4'>
          <label
            className='block text-sm font-semibold mb-1'
            htmlFor='municipio'
          >
            municipio:
          </label>
          <input
            className='w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500'
            type='text'
            id='municipio'
            name='municipio'
            value={formData.municipio}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className='mb-4'>
          <label
            className='block text-sm font-semibold mb-1'
            htmlFor='codigo_postal'
          >
            codigo_postal:
          </label>
          <input
            className='w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500'
            type='text'
            id='codigo_postal'
            name='codigo_postal'
            value={formData.codigo_postal}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className='mb-4'>
          <label
            className='block text-sm font-semibold mb-1'
            htmlFor='numero_via'
          >
            numero_via:
          </label>
          <input
            className='w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500'
            type='text'
            id='numero_via'
            name='numero_via'
            value={formData.numero_via}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className='mb-4'>
          <label
            className='block text-sm font-semibold mb-1'
            htmlFor='direccion'
          >
            direccion:
          </label>
          <input
            className='w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500'
            type='text'
            id='direccion'
            name='direccion'
            value={formData.direccion}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className='mb-4'>
          <label
            className='block text-sm font-semibold mb-1'
            htmlFor='apellido1'
          >
            apellido1:
          </label>
          <input
            className='w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500'
            type='text'
            id='apellido1'
            name='apellido1'
            value={formData.apellido1}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className='mb-4'>
          <label
            className='block text-sm font-semibold mb-1'
            htmlFor='apellido2'
          >
            apellido2:
          </label>
          <input
            className='w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500'
            type='text'
            id='apellido2'
            name='apellido2'
            value={formData.apellido2}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className='mb-4'>
          <label className='block text-sm font-semibold mb-1' htmlFor='ssn'>
            ssn:
          </label>
          <input
            className='w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500'
            type='text'
            id='ssn'
            name='ssn'
            value={formData.ssn}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className='mb-4'>
          <label className='block text-sm font-semibold mb-1' htmlFor='tarjeta'>
            tarjeta:
          </label>
          <input
            className='w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500'
            type='text'
            id='tarjeta'
            name='tarjeta'
            value={formData.tarjeta}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className='mb-4'>
          <label
            className='block text-sm font-semibold mb-1'
            htmlFor='tarjeta_fecha'
          >
            tarjeta_fecha:
          </label>
          <input
            className='w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500'
            type='text'
            id='tarjeta_fecha'
            name='tarjeta_fecha'
            value={formData.tarjeta_fecha}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className='mb-4'>
          <label
            className='block text-sm font-semibold mb-1'
            htmlFor='tarjeta_cvc'
          >
            tarjeta_cvc:
          </label>
          <input
            className='w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500'
            type='text'
            id='tarjeta_cvc'
            name='tarjeta_cvc'
            value={formData.tarjeta_cvc}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className='mb-4'>
          <label className='block text-sm font-semibold mb-1' htmlFor='iban'>
            iban:
          </label>
          <input
            className='w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500'
            type='text'
            id='iban'
            name='iban'
            value={formData.iban}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className='mb-4'>
          <label
            className='block text-sm font-semibold mb-1'
            htmlFor='contrasenya'
          >
            contrasenya:
          </label>
          <input
            className='w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500'
            type='text'
            id='contrasenya'
            name='contrasenya'
            value={formData.contrasenya}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className='mb-4'>
          <label
            className='block text-sm font-semibold mb-1'
            htmlFor='pasaporte'
          >
            pasaporte:
          </label>
          <input
            className='w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500'
            type='text'
            id='pasaporte'
            name='pasaporte'
            value={formData.pasaporte}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className='mb-4'>
          <label
            className='block text-sm font-semibold mb-1'
            htmlFor='nombre_usuario'
          >
            nombre_usuario:
          </label>
          <input
            className='w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500'
            type='text'
            id='nombre_usuario'
            name='nombre_usuario'
            value={formData.nombre_usuario}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className='mb-4'>
          <label className='block text-sm font-semibold mb-1' htmlFor='bic'>
            bic:
          </label>
          <input
            className='w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500'
            type='text'
            id='bic'
            name='bic'
            value={formData.bic}
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

export default UserForm
