import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'
import { MenuIcon, SearchIcon, TicketPlus, XIcon } from 'lucide-react'
import { useClerk, UserButton, useUser } from '@clerk/react'
import { useAppContext } from '../context/Appcontext'

const Navbar = () => {

const [isOpen, setIsOpen]=useState(false)
const {user} = useUser()
const {openSignIn}=useClerk()
const navigate = useNavigate()


const {favoriteMovies}=useAppContext()

  return (
    <div className='fixed top-0 left-0 z-40 w-full flex items-center justify-between px-6 md:px-16 lg:px-36 py-5'>
      <Link to='/' className='max-md-flex-1'>
      <img src={assets.logo} alt=""  className='w-36 h-auto' />
      </Link>

      <div className={`fixed top-0 left-0 h-screen bg-black/90 backdrop-blur-md z-60 flex flex-col items-center justify-center gap-8 transition-all duration-300 overflow-hidden md:static md:h-auto md:w-auto md:flex-row md:bg-transparent md:border md:border-gray-300/20 md:rounded-full md:px-8 md:py-3 ${isOpen ? 'w-full opacity-100' : 'w-0 opacity-0 md:opacity-100'}`}>

        <XIcon 
  className='w-8 h-8 cursor-pointer text-white absolute top-6 right-6 block md:hidden z-50' 
  onClick={() => setIsOpen(false)} 
/>

          <Link onClick={()=> {scrollTo(0,0); setIsOpen(false)}} to='/'>Home</Link>
          <Link onClick={()=> {scrollTo(0,0); setIsOpen(false)}} to='/movies'>Movies</Link>
          <Link onClick={()=> {scrollTo(0,0); setIsOpen(false)}} to='/'>Theaters</Link>
          <Link onClick={()=> {scrollTo(0,0); setIsOpen(false)}} to='/'>Releases</Link>
          {favoriteMovies.length > 0 && <Link onClick={()=> {scrollTo(0,0); setIsOpen(false)}} to='/favorite'>Favorites</Link>}
      </div>
          
      <div className='flex items-center gap-8'>
        <SearchIcon className='max-md:hidden w-6 h-6 cursor-pointer '/>
        
        {
          !user ? (
                <button onClick={openSignIn} className='px-4 py-1 sm:px-7 sm:py-2 bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer'>Login</button>
          ) : (
            <UserButton>
              <UserButton.MenuItems>
                <UserButton.Action label="My Bookings" labelIcon={<TicketPlus width={15}/>} onClick={()=> navigate('/my-bookings')}/></UserButton.MenuItems>
            </UserButton>
          )
        }
          
      </div>
      <MenuIcon className='max-md:ml-4 md:hidden w-8 h-8 cursor-pointer ' onClick={()=> setIsOpen(!isOpen)}  />
    </div>
  )
}

export default Navbar