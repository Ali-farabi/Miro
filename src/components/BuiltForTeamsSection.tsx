'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { getBuiltForTeamsSection, getTeamCategories, getImageUrl, type TeamCategory, type BuiltForTeamsSection as BuiltForTeamsSectionType } from '@/lib/payload';

export default function BuiltForTeamsSection() {
  const [activeTab, setActiveTab] = useState<string>('');
  const [section, setSection] = useState<BuiltForTeamsSectionType | null>(null);
  const [categories, setCategories] = useState<TeamCategory[]>([]);

  useEffect(() => {
    async function fetchData() {
      const [sectionData, categoriesData] = await Promise.all([
        getBuiltForTeamsSection(),
        getTeamCategories()
      ]);
      
      setSection(sectionData);
      setCategories(categoriesData);
      
      if (categoriesData.length > 0 && !activeTab) {
        setActiveTab(categoriesData[0].name);
      }
    }
    
    fetchData();
  }, []);

  const activeCategory = categories.find(cat => cat.name === activeTab);

  if (!section || categories.length === 0) {
    return null;
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
                  ? 'bg-gray-900 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {activeCategory && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="mb-8">
                {activeCategory.features.map((feature, index) => (
                  <div key={index} className="flex items-start mb-4">
                    <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-lg text-gray-900">{feature.text}</span>
                  </div>
                ))}
              </div>

              <a 
                href={activeCategory.linkUrl} 
                className="text-blue-600 hover:underline flex items-center text-lg font-medium mb-12"
              >
                {activeCategory.linkText}
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>

              {section.integrationsImage && (
                <div>
                  <p className="text-gray-600 mb-4">{section.integrationsText}</p>
                  <div className="flex items-center space-x-4">
                    <Image
                      src={getImageUrl(section.integrationsImage.url)}
                      alt={section.integrationsImage.alt}
                      width={300}
                      height={100}
                      priority
                    />
                  </div>
                </div>
              )}
            </div>

            <div className="relative h-96 bg-gray-100 rounded-lg overflow-hidden shadow-2xl">
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