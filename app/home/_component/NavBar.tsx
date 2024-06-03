import { Button } from "@/components/ui/button";
import Link from "next/dist/client/link";
import React from "react";
import { FaPortrait } from "react-icons/fa";

type Props = {};

const NavBar = (props: Props) => {
  return (
    <div className="h-60[px] w-full flex flex-row items-center px-6 justify-between">
      <section className="flex flex-row items-center gap-2">
        <img src="/storybook.webp" alt="storybook image" className="h-[60px]" />
        <h1 className="text-xl text-emerald-700"> Once Upon a Time</h1>
      </section>
      <section className="flex flex-row items-center gap-2">
        <Button className="bg-emerald-700">Help Me</Button>
        <Link href="/profile">
          <Button className="bg-emerald-700 text-3xl">
            <FaPortrait></FaPortrait>
          </Button>
        </Link>
      </section>
    </div>
  );
};

export default NavBar;
