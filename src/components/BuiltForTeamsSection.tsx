'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function BuiltForTeamsSection() {
  const [activeTab, setActiveTab] = useState('UX & Design');

  const tabs = [
    'UX & Design',
    'Marketing',
    'Product Management',
    'Engineering',
    'Consultants',
    'Agile Coaches',
    'Sales'
  ];

  const checkmarks = [
    'Build low-fi wireframes',
    'Involve stakeholders in the design process',
    'Run engaging design workshops'
  ];

  

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-gray-900 mb-12 text-center">
          Built for all kinds of teams
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-full transition ${
                activeTab === tab
                  ? 'bg-gray-900 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="mb-8">
              {checkmarks.map((item, index) => (
                <div key={index} className="flex items-start mb-4">
                  <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg text-gray-900">{item}</span>
                </div>
              ))}
            </div>

            <a href="#" className="text-blue-600 hover:underline flex items-center text-lg font-medium mb-12">
              Learn more
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>

            <div>
              <p className="text-gray-600 mb-4">Integrate your favorite tools</p>
              <div className="flex items-center space-x-4">
                <Image
              src="/logolar.png"
              alt="Miro logo"
              width={300}
              height={100}
              priority
            />
              </div>
            </div>
          </div>

          <div className="relative h-96 bg-gray-100 rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="/unex.png"
              alt="UX Design board"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}