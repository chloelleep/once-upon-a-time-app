import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full text-center bg-green-200">
      <div className="h-60[px] w-full flex flex-row items-center px-6">
        <section className="flex flex-row items-center gap-2">
          <img
            src="/storybook.webp"
            alt="storybook image"
            className="h-[60px]"
          />
          <h1 className="text-xl text-green-900"> Once Upon a Time</h1>
        </section>
        <section className="ml-auto">
          <Link href="/home">
            <Button className="bg-green-700">
              {"Get Started"} <ArrowRight />
            </Button>
          </Link>
        </section>
      </div>
      <div className="flex flex-col justify-center items-center h-full gap-4">
        <h2 className="text-4xl italic">
          There once was a writer <br />
          with the brightest ideas. That's you! Welcome to
        </h2>
        <h1 className="text-8xl mb-10 ">Once Upon a Time</h1>
        <img src="/storybook.webp" alt="storybook image" className="w-[25vw]" />
        <div className="flex flex-row gap-4">
          <Link href="/authoring">
            <Button className="mb-10 bg-green-700">
              {"Get Started, Write Now"} <ArrowRight />
            </Button>
          </Link>
          <Link href="/main">
            <Button className="mb-10 bg-green-700">{"About us"}</Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
