import Image from 'next/image';
import { getWorkTogetherSection, getImageUrl } from '@/lib/payload';

export default async function WorkTogetherSection() {
  const section = await getWorkTogetherSection();

  if (!section) {
    console.warn('WorkTogetherSection: No data from Payload CMS');
    return null;
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              {section.title?.split('\n').map((line, i) => (
                <span key={i}>
                  {line}
                  {i < section.title.split('\n').length - 1 && <br />}
                </span>
              ))}
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              {section.description}
            </p>
            {section.linkUrl && section.linkText && (
              <a 
                href={section.linkUrl} 
                className="text-blue-600 hover:underline flex items-center text-lg font-medium"
              >
                {section.linkText}
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            )}
          </div>

          <div className="relative w-full h-[400px] lg:h-[500px]">
            {section.image?.url ? (
              <Image
                src={getImageUrl(section.image.url)}
                alt={section.image.alt || 'Work together'}
                fill
                className="object-contain"
                priority
              />
            ) : (
              <div className="flex items-center justify-center h-full bg-gray-100 rounded-lg">
                <p className="text-gray-400">No image uploaded</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}