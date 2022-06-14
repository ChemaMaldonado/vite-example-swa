import React from 'react'
import { useTranslation } from 'react-i18next'

const HomeHeroSection = (props) => {
  const { t } = useTranslation()
  const text = props.text || ''
  const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
  const date = new Date().toLocaleDateString('es-ES', dateOptions)

  return (
    <div className='flex flex-col my-10 justify-center items-center'>
      <h1 className='font-header text-sm text-gray-400 md:text-md'>{date}</h1>
      <h1 className='font-header text-2xl md:text-3xl'>{t(text)}</h1>
    </div>
  )
}

export default HomeHeroSection
