import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
//import {  } from '@next/font/google'

export default function Home() {
  return (
    <main className="w-full h-screen font-serif">
      <div className="flex flex-col justify-center items-center h-full">
        <h1 className="text-8xl mb-10 text-emerald-600">Once Upon a Time...</h1>
        <div className="flex flex-row gap-4">
          <Link href="/authoring">
            <Button variant="once">{"Get Started"}</Button>
          </Link>
          <Link href="/main">
            <Button variant="once">{"About us"}</Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
