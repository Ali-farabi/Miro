import { ReviewsBlock } from './ReviewsBlock';
import ProductPreview from './ProductPreview';

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Take ideas from better to best
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Miro is your team's visual platform to connect, collaborate, and create — together.
          </p>

          <div className="mb-6">
            <input
              type="email"
              placeholder="Enter your work email"
              className="w-full px-5 py-4 border border-gray-300 text-black rounded-full text-lg focus:outline-none focus:border-blue-500 mb-4"
            />
            <button className="w-full bg-blue-600 text-white px-5 py-4 rounded-full text-lg hover:bg-blue-700 transition font-medium">
              Sign up free →
            </button>
            <p className="text-sm text-gray-500 mt-3">Collaborate with your team within minutes</p>
          </div>

          <ReviewsBlock />
        </div>

        <ProductPreview />
      </div>
    </section>
  );
}