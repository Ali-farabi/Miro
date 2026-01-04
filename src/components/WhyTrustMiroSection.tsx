'use client';
import { useState, useEffect } from 'react';
import { getWhyTrustSection, getTrustStats, type WhyTrustSection as WhyTrustSectionType, type TrustStat } from '@/lib/payload';

export default function WhyTrustMiroSection() {
  const [section, setSection] = useState<WhyTrustSectionType | null>(null);
  const [stats, setStats] = useState<TrustStat[]>([]);

  useEffect(() => {
    async function fetchData() {
      const [sectionData, statsData] = await Promise.all([
        getWhyTrustSection(),
        getTrustStats()
      ]);
      
      setSection(sectionData);
      setStats(statsData);
    }
    
    fetchData();
  }, []);

  if (!section || stats.length === 0) {
    return null;
  }

  return (
    <section className={`py-20 bg-${section.backgroundColor}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4 whitespace-pre-line">
            {section.title}
          </h2>
          <a 
            href={section.ctaLink} 
            className="text-gray-900 underline hover:no-underline"
          >
            {section.ctaText}
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {stats.map((stat) => (
            <div key={stat.id} className="text-center pt-12">
              <h3 className="text-6xl font-bold text-gray-900 mb-4">
                {stat.title}
              </h3>
              <p className="text-lg text-gray-900">
                {stat.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}