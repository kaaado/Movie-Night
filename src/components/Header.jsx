import { useEffect,useMemo, useState } from 'react'
import logo from '../assets/logo.png';
import userIcon from '../assets/user.png';
import { NavLink,Link, useNavigate } from 'react-router-dom';
import {IoSearchOutline} from 'react-icons/io5'
import { debounce } from "lodash";
import { navigation } from '../constants/navigation';

function Header() {
    const [searchInput,setSearchInput]=useState('')
    const navigate=useNavigate()

    const debouncedNavigate = useMemo(() => debounce((query) => {
        if(query){
            navigate(`/search?q=${query}`);
        }
       
      }, 500), [navigate]);

      useEffect(() => {
        debouncedNavigate(searchInput);
        return () => debouncedNavigate.cancel(); 
      }, [searchInput, debouncedNavigate]);
    
    const handleSubmit=(e)=>{
        e.preventDefault()
    }

    const navLinks = navigation.map((nav,index)=>{
        return(
            <div key={nav.index}>
                <NavLink className={({isActive})=>`px-2 hover:text-neutral-100 ${isActive && "text-neutral-100"}`} 
                    key={nav.label}
                    to={nav.link}
                >{nav.label}</NavLink>
            </div>
            
        )})

  return (
    <header className='fixed top-0 w-full h-16 bg-neutral-600 bg-opacity-70'>
        <div className='container mx-auto px-3 flex items-center h-full'>
            <div>
                <Link to='/'>
                    <img  src={logo} alt="Logo" width={120} />
                </Link>
            </div>
            <nav className='hidden lg:flex items-center gap-2 ml-5 '>
                {navLinks}
            </nav>
            <div className="ml-auto flex items-center gap-5">
                <form onSubmit={handleSubmit} className="flex items-center gap-3">
                    <input
                         type="text"
                         name='search'
                         placeholder='Search'
                         className='Search-input bg-transparent p-1 outline-none border-none placeholder:text-neutral-400 hidden lg:block'
                         value={searchInput}
                         onChange={(e)=>setSearchInput(e.target.value)}
                    />
                    <button className="text-2xl text-white">
                        <IoSearchOutline/>
                    </button>
                </form>                  
                <Link to='/profile' className='w-8 h-8'>
                    <img className="w-8 h-8  rounded-full overflow-hidden transition-all active:scale-75" src={userIcon} alt="Profile Image" />
                </Link>
            </div>
        </div>
    </header>
  )
}

export default Header