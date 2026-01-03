import Image from "next/image";
export default function Footer() {
  const footerLinks = {
    product: [
      'Online whiteboard',
      'Apps & Integrations',
      'Templates',
      'Miroverse',
      'Miro Developer Platform',
      'Miro for Devices',
      'Security & Compliance',
      'Accessibility',
      'Changelog'
    ],
    solutions: [
      'Meetings and Workshops',
      'Brainstorming & Ideation',
      'Agile Workflows',
      'Diagramming',
      'Research & Design',
      'Strategy & Planning',
      'Mind Map',
      'Concept Map',
      'Online Sticky Notes',
      'Flowchart',
      'Wireframing'
    ],
    resources: [
      'Miro Academy',
      'Help Center',
      'Blog',
      'Status',
      'Miro Community',
      'Miro Professional Network',
      'Miro Experts Directory',
      'Miro Events'
    ],
    company: [
      'About us',
      'Careers 🚀',
      'Miro in the News',
      'Customer Stories'
    ],
    pricing: [
      'Pricing',
      'Business',
      'Enterprise',
      'Consultants',
      'Education',
      'Startups',
      'NPOs'
    ]
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
          <div>
            <h3 className="text-lg font-bold mb-6">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-white transition">
                    {link}
                  </a>
                </li>
              ))}
              <li className="pt-4">
                <a href="#" className="text-white hover:text-gray-300 underline flex items-center">
                  View demo
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Solutions</h3>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-white transition">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-white transition">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-white transition">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Plans and Pricing</h3>
            <ul className="space-y-3">
              {footerLinks.pricing.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-white transition">
                    {link}
                  </a>
                </li>
              ))}
              <li className="pt-4">
                <a href="#" className="text-white hover:text-gray-300 underline flex items-center">
                  Contact sales
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mb-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-6 mb-6 md:mb-0">
            <a href="#" className="text-gray-300 hover:text-white transition">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 9.71a8.5 8.5 0 00-.91-4.13 2.92 2.92 0 00-1.72-1A78.36 78.36 0 0012 4.27a78.45 78.45 0 00-8.34.3 2.87 2.87 0 00-1.46.74c-.9.83-1 2.25-1.1 3.45a48.29 48.29 0 000 6.48 9.55 9.55 0 00.3 2 3.14 3.14 0 00.71 1.36 2.86 2.86 0 001.49.78 45.18 45.18 0 006.5.33c3.5.05 6.57 0 10.2-.28a2.88 2.88 0 001.53-.78 2.49 2.49 0 00.61-1 10.58 10.58 0 00.52-3.4c.04-.56.04-3.94.04-4.54zM9.74 14.85V8.66l5.92 3.11c-1.66.92-3.85 1.96-5.92 3.08z"></path>
              </svg>
            </a>

            <button className="flex items-center text-gray-300 hover:text-white transition ml-4">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
              </svg>
              EN
            </button>

            <span className="text-gray-400 ml-4">© 2022 Miro</span>
            <a href="#" className="text-gray-400 hover:text-white transition ml-4">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition ml-4">
              Privacy Policy
            </a>
            <button className="text-gray-400 hover:text-white transition ml-4">
              Manage Cookies
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <a href="#" className="border border-gray-600 rounded-lg px-4 py-2 hover:border-gray-400 transition">
              <div className="flex items-center">
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs text-gray-400">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </div>
            </a>

            <a href="#" className="border border-gray-600 rounded-lg px-4 py-3 hover:border-gray-400 transition">
              <div className="flex items-center">
                <Image
              src="/playmarket.png"
              alt="Miro logo"
              width={24}
              height={24}
              priority
            />
                <div className="text-left">
                  <div className="text-xs text-gray-400">GET IT ON</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </div>
            </a>

            <div className="bg-yellow-400 rounded-lg p-3 ml-2">
              <Image src="/miro.png" alt="Miro Logo" width={36} height={36} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}