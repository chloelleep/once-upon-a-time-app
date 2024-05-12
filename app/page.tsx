import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from 'next/link'


export default function Home() {
  return (
    <main className="w-full h-screen font-serif">
      <div className="flex flex-col justify-center items-center h-full">
        <h1 className="text-4xl mb-4">Welcome To Once Upon a Time</h1>
        <Link href="/authoring">
          <Button>{"Enter Application"}</Button>
        </Link>
      </div>
    </main>
  );
}
