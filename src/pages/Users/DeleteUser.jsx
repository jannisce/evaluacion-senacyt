import React from 'react'
import Layout from '../../components/Layout/Layout'
import BackButton from '../../components/BackButton/BackButton'
import UserDeletion from '../../components/UserDeletion/UserDeletion'

const DeleteUser = () => {
  return (
    <Layout>
      <BackButton title="Volver al inicio" to="/home"/>
      <UserDeletion />

    </Layout>
  )
}

export default DeleteUser