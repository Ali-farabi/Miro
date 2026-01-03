import { CompanyLogo } from './CompanyLogo';

export default function TrustedBySection() {
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