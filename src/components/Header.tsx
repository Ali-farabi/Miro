
import React from 'react';
import Image from "next/image";
export function Header() {
  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex items-center">
            <Image
              src="/logo.png"
              alt="Miro logo"
              width={100}
              height={40}
              priority
            />
          </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button className="text-gray-700 hover:text-gray-900 flex items-center">
              Product
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <button className="text-gray-700 hover:text-gray-900 flex items-center">
              Solutions
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <button className="text-gray-700 hover:text-gray-900 flex items-center">
              Resources
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <a href="#" className="text-gray-700 hover:text-gray-900">Enterprise</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Pricing</a>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-gray-900">Contact Sales</button>
            <button className="text-gray-700 hover:text-gray-900">Login</button>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
              Sign up free →
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}


