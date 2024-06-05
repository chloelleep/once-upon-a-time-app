import React from 'react';
import Link from "next/dist/client/link";
import {
    FaArrowLeft,
  } from "react-icons/fa";
  import { Button } from "@/components/ui/button";

const HelpPage: React.FC = () => {
  return (
    
    <div className="min-h-screen flex items-center justify-center bg-green-200">
        
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        
        <h2 className="text-4xl text-green-800 font-bold mb-6 text-center">Need Help?</h2>
        <p className="mb-4 text-center text-green-700">
          If you have any questions or need assistance, please fill out the form below and we will get back to you as soon as possible.
        </p>
        <form>
          <div className="mb-4">
            <label className="block text-green-700 text-2xl font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="text-sm shadow appearance-none border rounded w-full py-2 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Your name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-green-700 text-2xl font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="text-sm shadow appearance-none border rounded w-full py-2 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Your email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-green-700 text-2xl font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="text-sm shadow appearance-none border rounded w-full py-2 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              placeholder="Your message"
              rows={4}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Send Message
            </button>
          </div>
          
        </form>
      </div>
      <section className="fixed top-4 left-4 flex flex-row items-center gap-2 ">
        <Link href="/home">
            <Button className="bg-green-700">
              <FaArrowLeft />
            </Button>
          </Link><img src="/storybook.webp" alt="storybook image" className="h-[60px]" />
        <Link href="/">
          <h1 className="text-xl text-emerald-700">Once Upon a Time</h1>
        </Link>
        
      </section>
      
    </div>
  );
};

export default HelpPage;
