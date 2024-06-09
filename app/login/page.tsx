import Link from 'next/link';
import React from 'react';

const LoginPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-200">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-4xl text-green-800 font-bold mb-6 text-center">Hello, welcome!</h2>
        <form>
          <div className="mb-4">
            <label className="block text-green-700 text-2x1 font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              className="text-sm shadow appearance-none border rounded w-full py-2 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Type your username"
            />
          </div>
          <div className="mb-6">
            <label className="block text-green-700 text-2x1 font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="text-sm shadow appearance-none border rounded w-full py-2 px-3 text-gray-600 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Type your password"
            />
          </div>
          <div className="flex items-center justify-between">
            <Link href="/home">
              <button
                className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Sign In
              </button>
            </Link>
            <a
              className="inline-block align-baseline font-bold text-sm text-green-700 hover:text-green-800"
              href="#"
            >
              Forgot Password?
            </a>
            
          </div>
          <div className="flex items-center justify-between mt-4">
            <a
              className="inline-block align-baseline font-bold text-sm text-green-700 hover:text-green-800"
            >
              <Link href="/signup">
                Make a new account?
              </Link>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;