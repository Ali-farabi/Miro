import { ReviewsBlock } from './ReviewsBlock';
import ProductPreview from './ProductPreview';
import { getHero } from '@/lib/payload';

export default async function Hero() {
  const hero = await getHero();

  if (!hero) {
    console.warn('Hero: No data from Payload CMS');
    return null;
  }

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {hero.title}
          </h1>

          <p className="text-lg text-gray-600 mb-8">
            {hero.subtitle}
          </p>

          <div className="mb-6">
            <input
              type="email"
              placeholder={hero.emailPlaceholder}
              className="w-full px-5 py-4 border border-gray-300 text-black rounded-full text-lg focus:outline-none focus:border-blue-500 mb-4"
            />

            <a
              href={hero.ctaLink}
              className="block w-full bg-blue-600 text-white px-5 py-4 rounded-full text-lg hover:bg-blue-700 transition font-medium text-center"
            >
              {hero.ctaText}
            </a>

            <p className="text-sm text-gray-500 mt-3">
              {hero.helperText}
            </p>
          </div>

          <ReviewsBlock />
        </div>

        <ProductPreview />
      </div>
    </section>
  );
}
