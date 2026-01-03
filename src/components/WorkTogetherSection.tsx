import Image from 'next/image';

export default function WorkTogetherSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Work together,<br />wherever you work
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              In the office, remote, or a mix of the two, with Miro, your team can connect, collaborate, and co-create in one space no matter where you are.
            </p>
            <a href="#" className="text-blue-600 hover:underline flex items-center text-lg font-medium">
              Learn more
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          <div className="relative w-full h-full">
            <Image
            
              src="/portfile.png"
              alt="Miro logo"
              fill
              className="object-contain "
              priority
             
            />
            
            
          </div>
        </div>
      </div>
    </section>
  );
}