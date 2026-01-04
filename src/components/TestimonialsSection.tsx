'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { getTestimonialsSection, getTestimonials, getImageUrl, type TestimonialsSection as TestimonialsSectionType, type Testimonial } from '@/lib/payload';

export default function TestimonialsSection() {
  const [section, setSection] = useState<TestimonialsSectionType | null>(null);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    async function fetchData() {
      const [sectionData, testimonialsData] = await Promise.all([
        getTestimonialsSection(),
        getTestimonials()
      ]);
      
      setSection(sectionData);
      setTestimonials(testimonialsData);
    }
    
    fetchData();
  }, []);

  if (!section || testimonials.length === 0) {
    return null;
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-8">
            {section.title}
          </h2>
          <a 
            href={section.ctaLink}
            className="inline-block text-blue-600 border-2 border-blue-600 px-6 py-3 rounded-full hover:bg-blue-50 transition"
          >
            {section.ctaText}
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-lg p-8 border border-gray-100 hover:shadow-lg transition">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                {testimonial.company}
              </h3>

              <p className="text-gray-700 mb-8 leading-relaxed">
                {testimonial.quote}
              </p>

              <div className="flex items-center">
                {testimonial.authorImage && (
                  <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-200 mr-4">
                    <Image
                      src={getImageUrl(testimonial.authorImage.url)}
                      alt={testimonial.authorName}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.authorName}</p>
                  <p className="text-sm text-gray-600">{testimonial.authorRole} at {testimonial.authorCompany}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}