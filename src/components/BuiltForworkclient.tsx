'use client';
import { useState } from 'react';
import Image from 'next/image';
import { getImageUrl, BuiltForWorkSection, WorkCategory } from '@/lib/payload';

interface Props {
  section: BuiltForWorkSection;
  categories: WorkCategory[];
}

export default function BuiltForWorkClient({ section, categories }: Props) {
  const [activeTab, setActiveTab] = useState(categories[0]?.name || '');

  const activeCategory = categories.find(cat => cat.name === activeTab) || categories[0];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-gray-900 mb-12 text-center">
          {section.title}
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.name)}
              className={`px-6 py-3 rounded-full transition ${
                activeTab === category.name
                  ? 'bg-blue-100 text-black'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {activeCategory && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                {activeCategory.title}
              </h3>
              <p className="text-xl text-gray-600 mb-8">
                {activeCategory.description}
              </p>
              <a 
                href={activeCategory.linkUrl} 
                className="text-blue-600 hover:underline flex items-center text-lg font-medium"
              >
                {activeCategory.linkText}
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            <div className="relative h-[400px] w-full bg-gray-100 rounded-lg overflow-hidden shadow-2xl">
              <Image
                src={getImageUrl(activeCategory.image.url)}
                alt={activeCategory.image.alt}
                fill
                className="object-cover"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
