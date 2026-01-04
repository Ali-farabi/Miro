import { getFeaturesSection, getFeatures } from '@/lib/payload';

export default async function FeaturesSection() {
  const section = await getFeaturesSection();
  const features = await getFeatures();

  const data = section || {
    badge: 'YOUR IDEA STARTS HERE',
    title: 'Collaborate without constraints',
    ctaText: 'Sign up free →',
    ctaLink: '#',
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-8">
          <div className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold transform -rotate-2">
            {data.badge}
          </div>
        </div>

        <h2 className="text-5xl font-bold text-center text-gray-900 mb-16">
          {data.title.split('\n').map((line, i) => (
            <span key={i}>
              {line}
              {i < data.title.split('\n').length - 1 && <br />}
            </span>
          ))}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {features.map((feature) => (
            <div key={feature.id}>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
                {feature.link && (
                  <>
                    {' '}
                    <a href={feature.link} className="text-blue-600 hover:underline">
                      {feature.link}
                    </a>
                    {feature.linkText && ` ${feature.linkText}`}
                  </>
                )}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <a
            href={data.ctaLink}
            className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg hover:bg-blue-700 transition font-medium"
          >
            {data.ctaText}
          </a>
        </div>
      </div>
    </section>
  );
}