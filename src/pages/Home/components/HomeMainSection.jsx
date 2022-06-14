import { CloudDownloadIcon, ChartBarIcon } from '@heroicons/react/solid'
import React, { useState } from 'react'
import ListSelect from '../../../components/ListSelect/ListSelect'
import Modal from '../../../components/Modal/Modal'
import DatePicker from '../../../components/DatePicker/DatePicker'

const ModalContent = () => {
  return (
    <>
      <ListSelect text='Página: ' />
      <ListSelect text='Referencia: ' />
      <DatePicker />
    </>
  )
}

const HomeMainSection = () => {
  const [open, setOpen] = useState(false)
  const modalProps = {
    open,
    setOpen,
    title: 'Sección de ventas',
    action: {
      title: 'Consultar',
      func: () => setOpen(false)
    }
  }
  return (
    <>
      <div className='flex justify-center items-center mx-6 md:mx-0 space-x-6 md:space-x-24 my-12 font-header'>
        <button className='bg-dark shadow-lg p-2 h-24 w-32 md:h-26 hover:border-4 hover:border-light md:w-48 text-white rounded-md'>
          <div className='flex flex-col justify-center items-center'>
            DIFICIL STOCK
            <CloudDownloadIcon className='pt-2 h-6 w-6 text-light' />
          </div>
        </button>
        <button className='bg-dark shadow-lg p-2 h-24 w-32 md:h-26 hover:border-4 hover:border-light md:w-48 text-white rounded-md'>
          <div className='flex flex-col justify-center items-center'>
            RATIOS RMA
            <CloudDownloadIcon className='pt-2 h-6 w-6 text-light' />
          </div>
        </button>
        <button onClick={() => setOpen(true)} className='bg-dark shadow-lg p-2 h-24 w-32 md:h-26 hover:border-4 hover:border-light md:w-48 text-white rounded-md'>
          <div className='flex flex-col justify-center items-center'>
            VENTAS
            <ChartBarIcon className='pt-2 h-6 w-6 text-light' />
          </div>
        </button>
      </div>
      <Modal {...modalProps}>
        <ModalContent />
      </Modal>
    </>
  )
}

export default HomeMainSection
