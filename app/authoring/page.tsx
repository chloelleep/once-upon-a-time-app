'use client'
import React from 'react'
import TextEditor from './_components/TextEditor'
import Link from 'next/link'
import { Button } from "@/components/ui/button";

type Props = {}

const AuthoringPage = (props: Props) => {
  return (
    <div>
    <TextEditor></TextEditor>
    <div className="p-10">
    <Link href="/Api">
          <Button className="hover:bg-blue-900 text-white font-bold py-2 px-4 rounded" >{"Use AI Tool"}</Button>
        </Link>
    </div>
    </div>
  )
}

export default AuthoringPage