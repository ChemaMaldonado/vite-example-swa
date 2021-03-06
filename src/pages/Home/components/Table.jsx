import React, { useState } from 'react'

const Table = () => {
  const newItems = [
    {
      id: 'Apple Macbook 17',
      referencia: 'Silver',
      nombre: 'Laptop',
      stock: '2999€',
      EAN: '2999€',
      Rotación: '2999€',
      Destacable: '2999€',
      Visible: '2999€'
    },
    {
      id: 'Microsoft Surface Pro',
      referencia: 'Black',
      nombre: 'Laptop',
      stock: '1999€',
      EAN: '2999€',
      Rotación: '2999€',
      Destacable: '2999€',
      Visible: '2999€'
    },
    {
      id: 'Apple Macbook 17',
      referencia: 'Silver',
      nombre: 'Laptop',
      stock: '1999€',
      EAN: '2999€',
      Rotación: '2999€',
      Destacable: '2999€',
      Visible: '2999€'
    },
    {
      id: 'Apple Macbook 17',
      referencia: 'Black',
      nombre: 'Laptop',
      stock: '1999€',
      EAN: '2999€',
      Rotación: '2999€',
      Destacable: '2999€',
      Visible: '2999€'
    }
  ]
  const [products, setProducts] = useState(newItems)
  const [search, setSearch] = useState('')
  const [searchReference, setSearchReference] = useState('')
  const [searchStock, setSearchStock] = useState('')
  return (
    <div className='flex justify-center items-center pb-10'>
      <div className='relative overflow-x-auto shadow-md sm:rounded-md max-w-auto'>
        <div className='flex flex-col lg:flex-row justify-center items-center'>
          <div className='lg:p-4'>
            <label htmlFor='table-search' className='sr-only'>Search</label>
            <div className='relative mt-1'>
              <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                <svg className='w-5 h-5 text-gray-500 dark:text-gray-400' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z' clipRule='evenodd' /></svg>
              </div>
              <input
                onChange={(event) => setSearch(event.target.value)} type='text' id='table-search' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Búsqueda por ID'
              />
            </div>
          </div>
          <div className='lg:p-4'>
            <label htmlFor='table-search' className='sr-only'>Search</label>
            <div className='relative mt-1'>
              <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                <svg className='w-5 h-5 text-gray-500 dark:text-gray-400' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z' clipRule='evenodd' /></svg>
              </div>
              <input
                onChange={(event) => setSearchReference(event.target.value)} type='text' id='table-search' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Búsqueda por referencia'
              />
            </div>
          </div>
          <div className='pb-5 lg:p-4'>
            <label htmlFor='table-search' className='sr-only'>Search</label>
            <div className='relative mt-1'>
              <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                <svg className='w-5 h-5 text-gray-500 dark:text-gray-400' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z' clipRule='evenodd' /></svg>
              </div>
              <input
                onChange={(event) => setSearchStock(event.target.value)}
                type='text' id='table-search' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Búsqueda por stock'
              />
            </div>
          </div>
        </div>
        <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
          <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
            <tr>
              <th scope='col' className='p-4'>
                <div className='flex items-center'>
                  <input id='checkbox-all-search' type='checkbox' className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600' />
                  <label htmlFor='checkbox-all-search' className='sr-only'>checkbox</label>
                </div>
              </th>
              <th scope='col' className='px-6 py-3'>
                ID
              </th>
              <th scope='col' className='px-6 py-3'>
                Referencia
              </th>
              <th scope='col' className='px-6 py-3'>
                Nombre
              </th>
              <th scope='col' className='px-6 py-3'>
                Stock
              </th>
              <th scope='col' className='px-6 py-3'>
                EAN
              </th>
              <th scope='col' className='px-6 py-3'>
                Rotación
              </th>
              <th scope='col' className='px-6 py-3'>
                Destacable
              </th>
              <th scope='col' className='px-6 py-3'>
                Visible
              </th>
            </tr>
          </thead>
          <tbody>
            {products
              .filter((product) => product.id.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
              .filter((product) => product.referencia.toLocaleLowerCase().includes(searchReference.toLocaleLowerCase()))
              .filter((product) => product.stock.toLocaleLowerCase().includes(searchStock.toLocaleLowerCase()))
              .map((product, index) => (
                <tr key={index} style={{ cursor: 'pointer' }} className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
                  <td className='w-4 p-4'>
                    <div className='flex items-center'>
                      <input id='checkbox-table-search-1' type='checkbox' className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600' />
                      <label htmlFor='checkbox-table-search-1' className='sr-only'>checkbox</label>
                    </div>
                  </td>
                  <th scope='row' className='px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap'>
                    {product.id}
                  </th>
                  <td className='px-6 py-4'>
                    {product.referencia}
                  </td>
                  <td className='px-6 py-4'>
                    {product.nombre}
                  </td>
                  <td className='px-6 py-4'>
                    {product.stock}
                  </td>
                  <td className='px-6 py-4'>
                    {product.EAN}
                  </td>
                  <td className='px-6 py-4'>
                    {product.Rotación}
                  </td>
                  <td className='px-6 py-4'>
                    {product.Destacable}
                  </td>
                  <td className='px-6 py-4'>
                    {product.Visible}
                  </td>
                  <td className='px-6 py-4 text-right'>
                    <button
                      onClick={() => {
                        const updateProducts = products.filter((p) => p !== product)
                        setProducts(updateProducts)
                      }}
                      className='font-medium text-red-500 font-header dark:text-dark-500 hover:underline'
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>

  )
}

export default Table
