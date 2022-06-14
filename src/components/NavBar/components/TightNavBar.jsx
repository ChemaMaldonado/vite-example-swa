import { motion } from 'framer-motion'
import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { MenuIcon, LogoutIcon } from '@heroicons/react/solid'
import IconAkralogic from '../../../assets/images/icon-akralogic.png'
import { gestionWebItems, contabilidadItems, comprasItems, almacenItems, listadosItems } from '../../../constants/navbarItems'
import DropdownMenu from '../../DropDown/DropdownMenu'
import useOutsideAlerter from '../../../services/hooks/useOutsideAlerter'

const TightNavBar = () => {
  const [sideBarState, setSideBarState] = useState(false)
  const sideBarRef = useRef(null)
  const sideBarIconRef = useRef(null)
  useOutsideAlerter(sideBarRef, sideBarIconRef, setSideBarState)

  const variants = {
    open: { opacity: 0.98, x: 0 },
    closed: { opacity: 0, x: '-5%' }
  }

  return (
    <>
      <nav className='flex tablet:hidden justify-between items-center py-5 px-5 bg-dark shadow-lg font-body rounded-b-md'>
        <button ref={sideBarIconRef} onClick={() => setSideBarState(!sideBarState)}>
          <MenuIcon className='h-6 w-6 text-white' />
        </button>
        <Link to='/inicio'>
          <img src={IconAkralogic} alt='Akralogic' className='w-auto h-5' />
        </Link>
        <Link to='/'>
          <LogoutIcon className='h-6 w-6 text-white' />
        </Link>
      </nav>
      <motion.nav animate={sideBarState ? 'open' : 'closed'} variants={variants} ref={sideBarRef} className={`${sideBarState ? 'absolute' : 'hidden'} tablet:hidden mt-10 top-0 left-0 h-auto w-48 pt-10 pb-8 bg-dark z-20 rounded-br-lg shadow-lg `}>
        <div className='flex flex-col space-y-4 font-header'>
          <DropdownMenu text='Gestión web' options={gestionWebItems} tight />
          <DropdownMenu text='Contabilidad' options={contabilidadItems} tight />
          <DropdownMenu text='Compras' options={comprasItems} tight />
          <DropdownMenu text='Almacén' options={almacenItems} tight />
          <DropdownMenu text='Listados' options={listadosItems} tight />
        </div>
      </motion.nav>
    </>
  )
}

export default TightNavBar
