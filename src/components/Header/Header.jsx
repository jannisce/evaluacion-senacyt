import React from 'react'

const Header = () => {
  return (
    <header className='bg-slate-200 p-4 sm:p-6 sticky top-0'>
      <div className='container mx-auto flex items-center justify-between'>
        <img
          className='h-12 sm:h-14 md:h-18 lg:h-20 xl:h-20'
          src='https://senacyt.gob.gt/templates/yootheme/cache/22/logo-Gobierno-2024-30-2293e88d.webp'
          alt='logo senacyt'
        />
        <div className='text-slate-900 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold'>
          Evaluación Senacyt
        </div>
      </div>
    </header>
  )
}

export default Header
