import React from 'react'
import logo from '../assets/logo.png';
import { NavLink,Link } from 'react-router-dom';

function Header() {
    const navigation =[
        {
            label:'TV Shows',
            link:'tv'
        },
        {
            label:'Movies',
            link:'movie'
        }
    ]

    const navLinks = navigation.map((nav,index)=>{
        return(
            <div className='hover:text-neutral-50'>
                <NavLink to={nav.link}>{nav.label}</NavLink>
            </div>
            
        )})
  return (
    <header className='fixed top-0 w-full h-16 bg-neutral-600 bg-opacity-70'>
        <div className='container mx-auto px-2 flex items-center h-full'>
            <div>
                <Link to=''>
                    <img  src={logo} alt="Logo" width={120} />
                </Link>
            </div>
            <nav className='flex items-center gap-2 ml-5 '>
                {navLinks}
            </nav>
        </div>
    </header>
  )
}

export default Header