import React from 'react'
import { useState } from 'react'
import {navItems} from '../constants'
import { Menu, X } from 'lucide-react'

const NavBar = () => {

    const [MobileOpen,setMobileOpen] = useState(false);

    const toggleNavBar= () =>{
        setMobileOpen(!MobileOpen)
    }
  return (
    <>
       <nav className='s sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80'>
        <div className='container px-4 mx-auto relative text-sm'>
            <div className='flex justify-between items-center'>
                <div className=' flex justify-center flex-shrinl-0 items-center'>
                    <img className='h-10 w-10 mr-2' src="logo.png" alt="" />
                    <span className='text-xl'>VirtualR</span>
                </div>
                <ul className="hidden lg:flex  ml-14 space-x-12 ">
                    {navItems.map((item, index)=>(
                        <li key={index}>
                            <a className='cursor-pointer hover:text-amber-100 hover:transition-all duration-500' href={item.herf}>{item.label}</a>
                        </li>
                    ))}
                </ul>

                <div className='hidden lg:flex justify-center space-x-12 items-center'>
                    <a href="#" className='py-2 px-3 border rounded-md hover:bg-gray-800'>Sign In</a>
                    <a href="#" className='py-2 px-3  rounded-md bg-gradient-to-r from-orange-500 to-orange-800 '>Creat an account</a>
                </div>

                {/* mobile menu */}

                <div className='lg:hidden md:flex flex-col justify-end'>
                   <button className='cursor-pointer' onClick={toggleNavBar}>
                      {
                        MobileOpen ? <X/> : <Menu/>
                      }
                   </button>
                </div>
            </div>
            {MobileOpen && (
                    <div className=' fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden'>
                    <ul>
                        {navItems.map((item,index)=>(
                            <li className='py-4' key={index}>
                                <a className='cursor-pointer' href={item.herf}>{item.label}</a>
                            </li>
                        ))}
                    </ul>
                    <div className='flex space-x-6 mt-6'>
                    <a href="#" className='py-2 px-3 border rounded-md hover:bg-gray-800 hover:transition-all hover:duration-700'>Sign In</a>
                    <a href="#" className='py-2 px-3  rounded-md bg-gradient-to-r from-orange-500 to-orange-800 '>Creat an account</a>
                    </div>
                </div>
                )}
        </div>
       </nav>
    </>
  )
}

export default NavBar
