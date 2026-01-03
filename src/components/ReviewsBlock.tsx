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