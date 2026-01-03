export default function CTASection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-900 rounded-xl py-36 px-16  text-center">
          <h2 className="text-5xl font-bold text-white mb-4">
            Join 45M+ users today
          </h2>
          
          <p className="text-xl text-gray-300 mb-2">
            Start for free — upgrade anytime.
          </p>
          <a href="#" className="text-gray-400 underline hover:text-gray-300 mb-8 inline-block">
            Joining as an organization? Contact Sales
          </a>

          <div className="mt-8">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg hover:bg-blue-700 transition font-medium">
              Sign up free →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}