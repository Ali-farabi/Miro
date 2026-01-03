import Image from 'next/image';

export default function TestimonialsSection() {
  const testimonials = [
    {
      company: 'vmware',
      quote: '"When the pandemic hit, those of us who thrive on in-person collaboration were worried that our creativity and productivity would suffer. Miro was the perfect tool to help us with collaboration, whiteboarding, and retrospectives while remote."',
      author: 'Roxanne Mustafa',
      position: 'Design Team Lead at VMware',
      avatar: '/dop-1.png'
    },
    {
      company: 'DocuSign',
      quote: '"Miro helps solve one of the major gaps in product design: how to manage tasks across product designers whose projects are in different tools."',
      author: 'Jane Ashley',
      position: 'Head of Design at DocuSign',
      avatar: '/dop-2.png'
    },
    {
      company: 'frog',
      quote: '"As we used Miro we moved from skepticism to belief to innovation, and now we have a tool that\'s at the core of what we do and will continue to extend into the future."',
      author: 'Laura Baird',
      position: 'Associate Design Director at frog',
      avatar: '/dop-3.png'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-8">
            Loved by the world's best teams
          </h2>
          <button className="text-blue-600 border-2 border-blue-600 px-6 py-3 rounded-full hover:bg-blue-50 transition">
            See all customer stories →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg p-8 border border-gray-100 hover:shadow-lg transition">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                {testimonial.company}
              </h3>

              <p className="text-gray-700 mb-8 leading-relaxed">
                {testimonial.quote}
              </p>

              <div className="flex items-center">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-200 mr-4">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}