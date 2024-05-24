import { Button } from '@/components/ui/button'
import React from 'react'

type Props = {}

const NavBar = (props: Props) => {
  return (
    <div className="flex flex-row items-center justify-between h-[60px] bg-green-700 w-full">
        <h1 className="text-2xl">
             Once upon A Time
        </h1>
        <div className="flex flex-row items-center gap-2">
            <Button>New Project</Button>
            <p>some other text</p>
        </div>
    </div>
  )
}

export default NavBar