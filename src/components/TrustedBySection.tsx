import { CompanyLogo } from './CompanyLogo';
import Image from "next/image";

export default function TrustedBySection() {
  const companies = [
    "/logo-5.png",
    "/logo-1.png",
    "/logo-2.png",
    "/logo-3.png",
    "/logo-4.png",
  
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-600 mb-12">
          Trusted by 45M+ users
        </p>

        <div className="flex justify-center items-center gap-x-16 gap-y-8 flex-wrap">
          {companies.map((logo, index) => (
            <div
              key={index}
              className="relative w-36 h-36 opacity-80 hover:opacity-100 transition"
            >
              <Image
                src={logo}
                alt="Company logo"
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
