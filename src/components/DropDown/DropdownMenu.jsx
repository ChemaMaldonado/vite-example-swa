import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { Link } from 'react-router-dom'
import { changeLanguage } from 'i18next'

function classNames (...classes) {
  return classes.filter(Boolean).join(' ')
}

const DropdownMenu = (props) => {
  const text = props.text || 'Menu'
  const options = props.options || []
  const tight = props.tight || false
  return (
    <Menu as='div' className='relative inline-block text-left z-30'>
      <div>
        <Menu.Button className='inline-flex justify-center w-full rounded-md shadow-sm px-4 py-2 bg-dark text-sm font-medium text-white focus:outline-none hover:underline hover:decoration-white hover:decoration-2 hover:underline-offset-4'>
          {!props.icon && text}
          {!props.icon && <ChevronDownIcon className='-mr-1 ml-2 h-5 w-5' aria-hidden='true' />}
          {props.icon}
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        <Menu.Items className={`origin-top-right max-h-96 overflow-auto ${tight && 'mx-3'} tablet:absolute right-0 w-auto mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none`}>
          <div className='py-1'>
            {Object.entries(options).map((option, key) => (
              <Menu.Item key={key}>
                {({ active }) => (
                  <Link
                    to={`${!props.icon ? option[1] : ''}`}
                    onClick={() => {
                      props.icon && changeLanguage(option[0])
                    }}
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm border-b-2 border-gray-300'
                    )}
                  >
                    {option[0]}
                  </Link>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default DropdownMenu
