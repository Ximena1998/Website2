'use client'
// LINK: componente de next que nos ayuda a navegar dentro de la pagina
import Link from 'next/link'
// import styles from './navigation.module.css'
// Image componente de nex para cargar imagenes
import Image from 'next/image'

import { useState } from 'react'
// links: arreglo de rutas para el nav
const links = [{
  label: 'Home',
  route: '/'
}, {
  label: 'About Us',
  route: '/about'
}, {
  label: 'Pricing',
  route: '/pricing'
}, {
  label: 'Start trading',
  route: '/trading'
}, {
  label: 'Contact Us',
  route: '/contact'
}
]
export function Navigation () {
  const [navbar, setNavbar] = useState(false)
  function handleNav () {
    console.log('click')
    setNavbar(!navbar)
  }
  console.log('click')
  return (
    <div onClick={() => { console.log('inicio') }}>
      <nav className='w-full bg-black top-0 left-0 right-0'>
        <div className='justify-between px-4 lg:max-w-7xl md:items-center md:flex md:px-8'>
          <div>
            <div className='flex items-center justify-between py-3 md:py-5 md:block'>
              {/* Logo */}
              <Link href='/'>
                <h2 className='text-2xl text-green-500 font-bold'>LOGO</h2>
              </Link>
              {/* Menu de hamburguesa para movil */}
              <div className='md:hidden'>
                <button onClick={handleNav} className='p-2 text-gray-700 rounded-md outline-none border:none'>
                  {navbar
                    ? (
                      <Image src='/close.svg' width={30} height={30} alt='logo' />
                      )
                    : (
                      <Image
                        src='/hamburger.svg'
                        width={30}
                        height={30}
                        alt='logo'
                        className='focus:border-none active:border-none'
                      />)}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                  navbar ? 'block' : 'hidden'
              }`}
            >
              <ul className='h-screen md:h-auto items-center justify-center md:flex'>
                {links.map(({ label, route }) => (
                  <li key={route} className='pb-6 text-base text-white py-2 md:px-6 text-center md:border-b-0'>
                    <Link href={route} onClick={handleNav}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>

  )
}
