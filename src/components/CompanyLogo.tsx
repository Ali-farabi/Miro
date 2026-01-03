export function CompanyLogo({ name }: { name: string }) {
  return (
    <div className="text-3xl font-bold text-gray-900">
      {name}
    </div>
  );
}