import React from 'react'
import { useTranslation } from 'react-i18next'

const LoginFooter = () => {
  const { t } = useTranslation()
  const date = new Date().getFullYear()
  return (
    <>
      <span className='text-white text-xs text-center pt-5'>
        <p>{t('login.form.footer.header', { date })}</p>
      </span>
      <span className='text-white text-xs text-center pt-1'>
        {t('login.form.footer.subheader')}
      </span>
      <span className='text-white text-xs text-center pt-1'>
        Vite
      </span>
    </>
  )
}

export default LoginFooter
