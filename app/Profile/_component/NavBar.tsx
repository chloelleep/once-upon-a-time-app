import { Button } from '@/components/ui/button'
import Link from 'next/dist/client/link';
import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'

type Props = {}

const NavBar = (props: Props) => {
  return (
    <div className="flex flex-row items-center justify-between h-[60px] bg-green-700 w-full">
        <div className="flex flex-row items-center justify-between gap-6 lg:px-4">
        <h1 className="text-2xl">
        
             <Link href="/">
            Once upon A Time
            </Link>
            
            
            
        </h1>
        </div>
        <div className="flex flex-row items-center gap-2">
            <Button>New Project</Button>
            
            <p>some other text</p>
        </div>
    </div>
  )
}

export default NavBar