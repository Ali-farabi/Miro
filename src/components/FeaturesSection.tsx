export default function FeaturesSection() {
  const features = [
    {
      title: "Free forever",
      description: "Our free plan gives you unlimited team members, 3 boards, and 300+ expert-made templates. Signing up with your work email lets you bring in your team faster. See our",
      link: "pricing plans",
      linkText: "for more features."
    },
    {
      title: "Easy integrations",
      description: "Miro has 100+ powerful integrations with tools you already use like G Suite, Slack, and Jira, so your workflow is seamless. View the full list in our",
      link: "Marketplace",
      linkText: "."
    },
    {
      title: "Security first",
      description: "We treat your data like you would — with the utmost care. We follow industry-leading security standards and give you tools to protect intellectual property. Learn more at our",
      link: "Trust Center",
      linkText: "."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-8">
          <div className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold transform -rotate-2">
            YOUR IDEA STARTS HERE
          </div>
        </div>

        <h2 className="text-5xl font-bold text-center text-gray-900 mb-16">
          Collaborate without<br />constraints
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {features.map((feature, index) => (
            <div key={index}>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}{' '}
                <a href="#" className="text-blue-600 hover:underline">
                  {feature.link}
                </a>
                {feature.linkText}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg hover:bg-blue-700 transition font-medium">
            Sign up free →
          </button>
        </div>
      </div>
    </section>
  );
}