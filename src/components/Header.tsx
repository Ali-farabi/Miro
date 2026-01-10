import React from 'react'
import Image from 'next/image'
import { getHeader, getImageUrl } from '@/lib/payload'

export async function Header() {
  const header = await getHeader()

  if (!header) {
    return null
  }

  const sortedNav = [...header.navigation].sort((a, b) => a.order - b.order)
  const sortedCTA = [...header.ctaButtons].sort((a, b) => a.order - b.order)

  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Image
              src={getImageUrl(header.logo.url)}
              alt={header.logo.alt || 'Logo'}
              width={100}
              height={40}
              priority
            />
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {sortedNav.map((item, index) => (
              <div key={index}>
                {item.type === 'link' ? (
                  <a href={item.url} className="text-gray-700 hover:text-gray-900">
                    {item.label}
                  </a>
                ) : (
                  <button className="text-gray-700 hover:text-gray-900 flex items-center">
                    {item.label}
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            {sortedCTA.map((button, index) => (
              <a
                key={index}
                href={button.url}
                className={
                  button.style === 'primary'
                    ? 'bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition'
                    : button.style === 'secondary'
                    ? 'border border-gray-300 px-6 py-2 rounded-full hover:border-gray-400 transition'
                    : 'text-gray-700 hover:text-gray-900'
                }
              >
                {button.text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}