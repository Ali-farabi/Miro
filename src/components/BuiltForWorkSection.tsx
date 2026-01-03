'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function BuiltForWorkSection() {
  const [activeTab, setActiveTab] = useState('Brainstorming');

  const tabs = [
    'Brainstorming',
    'Diagramming',
    'Meetings & Workshops',
    'Scrum Events',
    'Mapping',
    'Research & Design',
    
  ];

  const content = {
    'Brainstorming': {
      title: 'Brainstorming',
      description: 'Unleash creative ideas and build on them with the help of sticky notes, images, mind maps, videos, drawing capabilities — the list goes on.',
      image: '/brainstorming.jpg'
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-gray-900 mb-12 text-center">
          Built for the way you work
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-full transition ${
                activeTab === tab
                  ? 'bg-blue-100 text-black '
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              {content[activeTab as keyof typeof content]?.title || 'Brainstorming'}
            </h3>
            <p className="text-xl text-gray-600 mb-8">
              {content[activeTab as keyof typeof content]?.description || 
                'Unleash creative ideas and build on them with the help of sticky notes, images, mind maps, videos, drawing capabilities — the list goes on.'}
            </p>
            <a href="#" className="text-blue-600 hover:underline flex items-center text-lg font-medium">
              Learn more
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          <div className="relative h-100 w-full bg-gray-100 rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="/brain.png"
              alt="Brainstorming board"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}