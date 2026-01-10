import React from 'react'
import Image from 'next/image'
import { getFooter, getImageUrl } from '@/lib/payload'

export async function Footer() {
  const footer = await getFooter()

  if (!footer) {
    return null
  }

  const sortedColumns = [...footer.columns].sort((a, b) => a.order - b.order)

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
          {sortedColumns.map((column, index) => (
            <div key={index}>
              <h3 className="text-lg font-bold mb-6">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.url}
                      className={
                        link.isHighlighted
                          ? 'text-white hover:text-gray-300 underline flex items-center'
                          : 'text-gray-300 hover:text-white transition'
                      }
                    >
                      {link.text}
                      {link.isHighlighted && (
                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-700 mb-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-6 mb-6 md:mb-0">
            {footer.socialLinks?.map((social, index) => (
              <a key={index} href={social.url} className="text-gray-300 hover:text-white transition">
                <span className="sr-only">{social.platform}</span>
                {/* You can add SVG icons here */}
              </a>
            ))}

            <span className="text-gray-400 ml-4">{footer.copyrightText}</span>
            {footer.legalLinks?.map((link, index) => (
              <a key={index} href={link.url} className="text-gray-400 hover:text-white transition ml-4">
                {link.text}
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <a href={footer.appStoreButton.url} className="border border-gray-600 rounded-lg px-4 py-2 hover:border-gray-400 transition">
              <div className="text-xs">{footer.appStoreButton.text}</div>
              <div className="text-sm font-bold">{footer.appStoreButton.boldText}</div>
            </a>

            <a href={footer.googlePlayButton.url} className="border border-gray-600 rounded-lg px-4 py-2 hover:border-gray-400 transition">
              {footer.googlePlayButton.icon && (
                <Image
                  src={getImageUrl(footer.googlePlayButton.icon.url)}
                  alt="Google Play"
                  width={24}
                  height={24}
                />
              )}
              <div className="text-xs">{footer.googlePlayButton.text}</div>
              <div className="text-sm font-bold">{footer.googlePlayButton.boldText}</div>
            </a>

            <div className="bg-yellow-400 rounded-lg p-3 ml-2">
              <Image src={getImageUrl(footer.logo.url)} alt="Logo" width={36} height={36} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}