
import React from 'react';
import Image from "next/image";
export function Header() {
  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center">
            <Image
              src="/logo.png"
              alt="Miro logo"
              width={100}
              height={40}
              priority
            />
          </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button className="text-gray-700 hover:text-gray-900 flex items-center">
              Product
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <button className="text-gray-700 hover:text-gray-900 flex items-center">
              Solutions
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <button className="text-gray-700 hover:text-gray-900 flex items-center">
              Resources
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <a href="#" className="text-gray-700 hover:text-gray-900">Enterprise</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Pricing</a>
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-gray-900">Contact Sales</button>
            <button className="text-gray-700 hover:text-gray-900">Login</button>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
              Sign up free →
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

// components/HeroSection.tsx
export function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <div>
          <h1 className="text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Take ideas from better to best
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Miro is your team's visual platform to connect, collaborate, and create — together.
          </p>

          {/* Email signup */}
          <div className="mb-6">
            <input
              type="email"
              placeholder="Enter your work email"
              className="w-full px-6 py-4 border border-gray-300 rounded-full text-lg focus:outline-none focus:border-blue-500 mb-4"
            />
            <button className="w-full bg-blue-600 text-white px-6 py-4 rounded-full text-lg hover:bg-blue-700 transition font-medium">
              Sign up free →
            </button>
            <p className="text-sm text-gray-500 mt-3">Collaborate with your team within minutes</p>
          </div>

          {/* Reviews */}
          <ReviewsBlock />
        </div>

        {/* Right side - Product screenshot */}
        <ProductPreview />
      </div>
    </section>
  );
}

// components/ReviewsBlock.tsx
export function ReviewsBlock() {
  return (
    <div className="flex items-center space-x-6 mt-8">
      <div className="flex items-center">
        <div className="flex text-yellow-400">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
          ))}
        </div>
      </div>
      <p className="text-sm text-gray-600">Based on 5149+ reviews</p>
      <div className="flex items-center space-x-3">
        <span className="text-sm font-semibold text-gray-700">GetApp</span>
        <span className="text-sm font-semibold text-gray-700">Capterra</span>
      </div>
    </div>
  );
}

// components/ProductPreview.tsx
export function ProductPreview() {
  return (
    <div className="relative">
      <div className="bg-gray-100 rounded-lg shadow-2xl overflow-hidden">
        <div className="aspect-video bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-8">
          <div className="grid grid-cols-3 gap-3 w-full">
            <FlowCard color="bg-blue-500" text="Order" />
            <FlowCard color="bg-yellow-400" text="Receive order" dark />
            <FlowCard color="bg-pink-400" text="Extra" />
            <FlowCard color="bg-orange-400" text="Check stock" />
            <FlowCard color="bg-purple-600" text="Multi" />
            <FlowCard color="bg-yellow-400" text="Cancel order" dark />
            <FlowCard color="bg-purple-400" text="Stage 1" />
            <FlowCard color="bg-gray-900" text="Logic" />
            <FlowCard color="bg-blue-600" text="Notify" />
          </div>
        </div>
      </div>
      
      {/* Bottom preview images */}
      <div className="grid grid-cols-3 gap-4 mt-4">
        <div className="bg-gray-200 rounded-lg aspect-video"></div>
        <div className="bg-gray-200 rounded-lg aspect-video"></div>
        <div className="bg-gray-200 rounded-lg aspect-video"></div>
      </div>
    </div>
  );
}

// components/FlowCard.tsx
export function FlowCard({ color, text, dark = false }: { color: string; text: string; dark?: boolean }) {
  return (
    <div className={`${color} ${dark ? 'text-gray-900' : 'text-white'} p-3 rounded-lg shadow-lg text-xs font-medium text-center`}>
      {text}
    </div>
  );
}

// components/TrustedBySection.tsx
export function TrustedBySection() {
  const companies = [
    { name: 'Walmart', logo: 'Walmart' },
    { name: 'CISCO', logo: 'CISCO' },
    { name: 'Volvo', logo: 'Volvo' },
    { name: 'Deloitte.', logo: 'Deloitte.' },
    { name: 'okta', logo: 'okta' }
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-600 mb-12">Trusted by 45M+ users</p>
        <div className="flex justify-center items-center space-x-16 flex-wrap gap-y-8">
          {companies.map((company) => (
            <CompanyLogo key={company.name} name={company.logo} />
          ))}
        </div>
      </div>
    </section>
  );
}

// components/CompanyLogo.tsx
export function CompanyLogo({ name }: { name: string }) {
  return (
    <div className="text-3xl font-bold text-gray-900">
      {name}
    </div>
  );
}

// Main Page Component
export default function MiroLanding() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <TrustedBySection />
    </div>
  );
}