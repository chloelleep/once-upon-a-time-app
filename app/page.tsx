import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from 'next/link'
//import {  } from '@next/font/google'

export default function Home() {
  return (
    <main className="w-full h-screen font-serif">
      <div className="flex flex-col justify-center items-center h-full">
        <h1 className="text-8xl mb-10">Once Upon a Time...</h1>
        <Link href="/authoring">
          <Button>{"Get Started"}</Button>
        </Link>
        <Link href="/main">
          <Button>{"About us"}</Button>
        </Link>
      </div>
    </main>
  );
}
