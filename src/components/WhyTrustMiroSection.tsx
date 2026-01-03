export default function WhyTrustMiroSection() {
  const stats = [
    {
      title: 'ISO',
      subtitle: 'ISO-27001 enterprise-grade security compliant'
    },
    {
      title: '#1',
      subtitle: 'Visual Collaboration Platform on G2'
    },
    {
      title: '99%',
      subtitle: 'of the Fortune 100 are customers'
    },
    {
      title: '1,000+',
      subtitle: 'community- and expert-built templates'
    },
    {
      title: '45M+',
      subtitle: 'users around the world'
    },
    {
      title: '100+',
      subtitle: 'integrations with technology partners'
    }
  ];

  return (
    <section className="py-55 bg-yellow-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Why companies large<br />and small trust Miro
          </h2>
          <a href="#" className="text-gray-900 underline hover:no-underline">
            Contact Sales to request a demo
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center pt-12">
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