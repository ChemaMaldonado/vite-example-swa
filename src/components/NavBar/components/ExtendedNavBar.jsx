import { Link } from 'react-router-dom'
import IconAkralogic from '../../../assets/images/icon-akralogic.png'
import DropdownMenu from '../../DropDown/DropdownMenu'
import { LogoutIcon, GlobeAltIcon } from '@heroicons/react/solid'
import { gestionWebItems, contabilidadItems, comprasItems, almacenItems, listadosItems, languages } from '../../../constants/navbarItems'

const ExtendedNavBar = () => {
  return (
    <nav className='hidden tablet:flex w-full h-auto bg-dark py-2 justify-between items-center space-x-4 px-3'>
      <div className='w-1/6 flex-nowrap'>
        <Link to='/dashboard' className='text-white'>
          <img src={IconAkralogic} alt='Akralogic' className='w-auto h-5' />
        </Link>
      </div>
      <div className='flex justify-center w-full'>
        <DropdownMenu text='Gestión web' options={gestionWebItems} />
        <DropdownMenu text='Contabilidad' options={contabilidadItems} />
        <DropdownMenu text='Compras' options={comprasItems} />
        <DropdownMenu text='Almacén' options={almacenItems} />
        <DropdownMenu text='Listados' options={listadosItems} />
      </div>
      <div className='w-1/6'>
        <div className='flex justify-end items-center'>
          <button>
            <DropdownMenu text='Language' icon={<GlobeAltIcon className='w-7 h-6 text-white hover:text-light' />} options={languages} />
          </button>
          <Link to='/' className=''>
            <LogoutIcon className='h-6 w-6 text-white hover:text-light' />
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default ExtendedNavBar
