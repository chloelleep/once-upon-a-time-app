import React from 'react';
import { Button } from "@/components/ui/button";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";


type Props = {};

const AboutUsPage = (props: Props) => {
  return (
    <main className='bg-green-200'>
      <section className="fixed top-4 left-4 flex flex-row items-center gap-2 ">
      <Link href="/">
      <Button className=" bg-green-800"><FaArrowLeft></FaArrowLeft></Button></Link></section>
      <div className="w-full font-serif bg-green-200 flex justify-center items-center p-24">
      <div className="bg-green-100 p-8 rounded-lg">
        <h1 className="text-8xl text-green-900 mb-10 text-center">About Us</h1>
        <p className="text-xl text-green-900 mb-6">
          Welcome to Once Upon a Time, where we believe in
          empowering parents and educators to create immersive and interactive
          digital children's stories.
        </p>
        <p className="text-xl text-green-900 mb-6">
          Our mission is to provide an intuitive authoring environment that
          leverages cutting-edge technology, including generative AI algorithms
          like DALL-E and ChatGPT, to assist in crafting captivating stories
          for young readers.
        </p>
        <p className="text-xl text-green-900 mb-6">
          In collaboration with esteemed researchers like Professor Stefan Rüger
          from the Knowledge Media Institute (KMi) at The Open University in
          the UK, we are exploring innovative ways to make the reading
          experience tactile through the use of 3D printed stylus with tactile
          feedback capabilities.
        </p>
        <p className="text-xl text-green-900 mb-6">
          Join us on this journey as we reimagine storytelling for the digital
          age, combining the magic of traditional storytelling with the
          possibilities of modern technology.
        </p><div className="mt-8">
          <h2 className="text-3xl mb-4 text-center text-green-900">Our Team</h2>
          <ul className="text-xl text-center text-green-900">
            <li>Hannah Carino - Group Manager</li>
            <li>Shahd - Front end Developer of the Authoring Environment</li>
            <li>Chloe - Front end Developer of the Authoring Environment</li>
            <li>Josephine - Back end AI Programmer Developer</li>
            <li>Shriha - Back end AI Program Developer</li>
            <li>Mahi - Multimedia Developer and Front end User Interface and Design</li>
          </ul>
        </div>
      </div>
      </div>
    </main>
  );
};

export default AboutUsPage;
