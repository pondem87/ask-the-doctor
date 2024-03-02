import React from 'react'
import { User } from '@/types/types'
import Link from 'next/link'

type NavlinksProps = {
    user?: User
}

const Navlinks = ({user}: NavlinksProps) => {
  return (
    <div className='navlinks'>
        <Link href='/'>Home</Link>
        <Link href=''>Public Feed</Link>
        { user && <Link href=''>My Questions</Link> }        
        { !user && [<Link key={1} href=''>Sign In</Link>,<Link key={2} href=''>Register</Link>] }
        { user?.is_professional && <Link href=''>Profile</Link> }
        { user && <Link href=''>Sign Out</Link> }
    </div>
  )
}

export default Navlinks