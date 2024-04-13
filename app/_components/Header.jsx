import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import "../globals.css";

const Header = () => {
    const menu = [
        {
            id: 1, 
            name: 'Home',
            path: '/'
        },
        {
            id: 2, 
            name: 'Explore',
            path: '/explore'
        },
        {
            id: 3, 
            name: 'Contact Us',
            path: '/contact'
        },
        
    ]
  return (
    <div className='flex items-center justify-between p-6 shadow-sm'>
        <div className='flex items-center gap-20'>
        <Image src='/logo.svg' width={160} height={80} alt='logo'/>

        <ul className='md:flex gap-8 hidden'>
            {menu.map((item, index)=>(
               <Link href={item.path}><li className='font-bold hover:text-primary hover:scale-105 transition-all ease-in-out nav-link' key={item.id}>{item.name}</li></Link> 
            ))}
        </ul>
        </div>
        <Button>Get Started</Button>

    </div>
  )
}

export default Header