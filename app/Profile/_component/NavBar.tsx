import { Button } from '@/components/ui/button'
import Link from 'next/dist/client/link';
import React from 'react'
import { FaPortrait } from 'react-icons/fa'

type Props = {}

const NavBar = (props: Props) => {
  return (
    <div className="flex flex-row items-center justify-between h-[60px] bg-green-800 w-full">
        <div className="flex flex-row items-center justify-between gap-6 lg:px-4">
        <h1 className="text-2xl text-green-100">
        
             <Link href="/">
            Once upon A Time
            </Link>
            
            
            
        </h1>
        </div>
        <div className="flex flex-row items-center gap-2">
            <Button className='bg-green-100 text-green-800'>Help Me</Button>
            <Button className='bg-green-100 text-green-800 text-3xl'><FaPortrait></FaPortrait></Button>
            <p></p>
        </div>
    </div>
  )
}

export default NavBar