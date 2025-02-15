import React from 'react'
import { MobileNav  } from '../constants/navigation.jsx'
import { NavLink } from 'react-router-dom'

function MobileNavigation() {

  const mobileNavShow=MobileNav.map((nav,index)=>
    <NavLink 
      key={index}
      to={nav.link}
      className={({isActive})=>`${isActive && "text-neutral-100 scale-120 bg-neutral-100 bg-opacity-10"} px-4 w-full rounded hover:text-white flex items-center justify-center flex-col h-full`}
    >
      <div className='text-2xl'>
        {nav.icon}
      </div>
      <p className='text-sm xs:text-xs'>
        {nav.label}
      </p>
    </NavLink>
  )
  return (
    <section className='h-14 lg:hidden bg-neutral-500 bg-opacity-40 fixed bottom-0 w-full'>
        <div className='flex items-center justify-between h-full text-neutral-400'>
          {mobileNavShow}
        </div>
    </section>
  )
}

export default MobileNavigation