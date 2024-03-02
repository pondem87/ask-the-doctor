import { User } from '@/types/types'
import Link from 'next/link'
import React from 'react'
import Navlinks from './navlinks'
import { Lobster } from "next/font/google"
import { Bars3Icon } from '@heroicons/react/24/solid'

type NavbarProps = {
  user?: User
}

const lobster = Lobster({weight: "400", subsets: ["latin"]});

const Navbar = ({user}:NavbarProps) => {
  
  return (
    <div className='navbar-container'>
        <div className='content-container navbar'>
          <Link href='/' className={`navbar-brand ${lobster.className}`}>Ask The Doctor</Link>
          <div className="desktop-nav">
            <Navlinks user={user} />
          </div>
          <Bars3Icon className='navbar-menu-icon' />
        </div>

        {/* 
          * plublic/custom.js provides function to toggle classes for animating navbar
          * this allows component to be renders on server and thus improve SEO
          */}
          
        <div className='dropdown-nav dropdown-nav-hidden'>
          <Navlinks user={user} />
        </div>
    </div>
  )
}

export default Navbar