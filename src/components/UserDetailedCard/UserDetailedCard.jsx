import React from 'react';

const UserDetailedCard = ({ user }) => {
  return (
    <div className='bg-white shadow-md rounded-md p-6 w-full max-w-6xl mx-auto flex flex-col'>
      <h2 className='text-4xl font-semibold mb-6'>{user.nombre_completo}</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 flex-grow'>
        <div>
          <p className='text-lg mb-4'>
            <span className='font-semibold'>Nombre:</span> {user.nombre}
          </p>
          <p className='text-lg mb-4'>
            <span className='font-semibold'>Apellido 1:</span> {user.apellido1}
          </p>
          <p className='text-lg mb-4'>
            <span className='font-semibold'>Apellido 2:</span> {user.apellido2}
          </p>
          <p className='text-lg mb-4'>
            <span className='font-semibold'>Fecha de Nacimiento:</span>{' '}
            {user.fecha_nacimiento}
          </p>
          <p className='text-lg mb-4'>
            <span className='font-semibold'>Email:</span> {user.email}
          </p>
        </div>

        <div>
          <p className='text-lg mb-4'>
            <span className='font-semibold'>Teléfono:</span> {user.telefono}
          </p>
          <p className='text-lg mb-4'>
            <span className='font-semibold'>Dirección:</span> {user.direccion}
          </p>
          <p className='text-lg mb-4'>
            <span className='font-semibold'>Código Postal:</span>{' '}
            {user.codigo_postal}
          </p>
          <p className='text-lg mb-4'>
            <span className='font-semibold'>Municipio:</span> {user.municipio}
          </p>
          <p className='text-lg mb-4'>
            <span className='font-semibold'>Provincia:</span> {user.provincia}
          </p>
        </div>
      </div>
      <div className='mt-8'>
        <p className='text-lg mb-4'>
          <span className='font-semibold'>ID:</span> {user.id}
        </p>
        <p className='text-lg mb-4'>
          <span className='font-semibold'>SSN:</span> {user.ssn}
        </p>
        <p className='text-lg mb-4'>
          <span className='font-semibold'>IBAN:</span> {user.iban}
        </p>
        <p className='text-lg mb-4'>
          <span className='font-semibold'>Tarjeta:</span> {user.tarjeta}
        </p>
      </div>
    </div>
  );
};

export default UserDetailedCard;
