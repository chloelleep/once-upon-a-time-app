import { Button } from '@/components/ui/button'
import React from 'react'

type Props = {}

const NavBar = (props: Props) => {
  return (
    <div className="flex flex-row items-center justify-between h-[60px] bg-indigo-400 w-full">
        <h1 className="text-2xl">
            NavBar
        </h1>
        <div className="flex flex-row items-center gap-2">
            <Button>Click me</Button>
            <p>some other text</p>
        </div>
    </div>
  )
}

export default NavBar