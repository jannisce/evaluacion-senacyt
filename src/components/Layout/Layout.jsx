import React from 'react'
import Header from '../../components/Header/Header'

const Layout = ( {children} ) => {

  return (
    <>
      <Header />
      <main className='p-6'>
        {children}
      </main>
    </>
  )
}

export default Layout
