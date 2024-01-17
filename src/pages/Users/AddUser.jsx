import React from 'react'
import Layout from '../../components/Layout/Layout'
import BackButton from '../../components/BackButton/BackButton'
import UserForm from '../../components/UserForm/UserForm'

const AddUser = () => {
  return (
    <Layout>
      <BackButton title="Volver al inicio" to="/home"/>
      <UserForm />

    </Layout>
  )
}

export default AddUser