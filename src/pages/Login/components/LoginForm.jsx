import { GlobeAltIcon } from '@heroicons/react/solid'
import React from 'react'
import { useTranslation } from 'react-i18next'
import DropdownMenu from '../../../components/DropDown/DropdownMenu'
import { languages } from '../../../constants/navbarItems'
import useLoginForm from '../../../services/hooks/useLoginForm'

const LoginForm = () => {
  const { t } = useTranslation()
  const { setUser, setPassword, onSubmit } = useLoginForm()

  return (
    <form onSubmit={onSubmit} className='sm:px-12'>
      <div className='absolute top-0 right-0 p-2'>
        <DropdownMenu text='Language' icon={<GlobeAltIcon className='w-6 h-5 text-white' />} options={languages} />
      </div>
      <div className='mb-6'>
        <label htmlFor='user' className='block mb-2 text-sm font-medium text-gray-300 dark:text-gray-300'>{t('login.user.name')}</label>
        <input
          id='user'
          autoFocus
          type='text'
          onChange={(e) => setUser(e.target.value)}
          className='bg-gray-50 border shadow-md border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-64 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          required
        />
      </div>
      <div className='mb-6'>
        <label htmlFor='password' className='block mb-2 text-sm font-medium text-gray-300 dark:text-gray-300'>{t('login.user.password')}</label>
        <input
          id='password'
          type='password'
          onChange={(e) => setPassword(e.target.value)}
          className='bg-gray-50 border shadow-md border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-64 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          required
        />
      </div>
      <div className='flex justify-center items-center'>
        <button type='submit' className='text-white font-header bg-gradient-to-l shadow-xl from-complementary to-light focus:outline-none font-medium rounded-lg text-sm focus:ring-4 focus:ring-light px-9 py-2.5 text-center'>{t('login.form.action')}</button>
      </div>
    </form>
  )
}

export default LoginForm
