import Image from 'next/image';
import { getWaysWeWorkSection, getImageUrl } from '@/lib/payload';

export default async function TheWaysWeWorkSection() {
  const section = await getWaysWeWorkSection();

  if (!section) {
    return null;
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden p-8 md:p-16">
          <div className="relative h-full mb-8">
            <Image
              src={getImageUrl(section.backgroundImage.url)}
              alt={section.backgroundImage.alt}
              width={960}
              height={250}
              priority
            />
          </div>

          <div className="absolute top-1/2 right-16 transform -translate-y-1/2 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {section.subtitle}
            </h3>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {section.mainTitle}
            </h2>
            <p className="text-gray-600 mb-6">
              {section.description}
            </p>
            <a 
              href={section.buttonUrl}
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
            >
              {section.buttonText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}