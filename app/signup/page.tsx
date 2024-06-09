import Link from 'next/link';
import React from 'react';

const SignupPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-200">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-4xl text-green-800 font-bold mb-6 text-center">Create an account</h2>
        <form>
          <div className="mb-4">
            <label className="block text-green-700 text-2xl font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              className="text-sm shadow appearance-none border rounded w-full py-2 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Choose a username"
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
              placeholder="Your email address"
            />
          </div>
          <div className="mb-6">
            <label className="block text-green-700 text-2xl font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="text-sm shadow appearance-none border rounded w-full py-2 px-3 text-gray-600 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Choose a password"
            />
          </div>
          <div className="mb-6">
            <label className="block text-green-700 text-2xl font-bold mb-2" htmlFor="confirm-password">
              Confirm Password
            </label>
            <input
              className="text-sm shadow appearance-none border rounded w-full py-2 px-3 text-gray-600 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="confirm-password"
              type="password"
              placeholder="Confirm your password"
            />
          </div>
          <div className="flex items-center justify-between">
            <Link href="/login">
              <button
                className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Sign Up
              </button>
            </Link>
           
            <a
              className="inline-block align-baseline font-bold text-sm text-green-700 hover:text-green-800"
              
            > <Link href = "/login">
              Already have an account?</Link>
            </a>
            
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
