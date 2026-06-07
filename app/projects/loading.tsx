export default function ProjectsLoading() {
  return (
    <section className="p-6 md:p-20">
      <div className="max-w-7xl mx-auto">
        {/* Header skeleton */}
        <div className="text-center mb-16 space-y-4">
          <div className="h-10 w-48 bg-secondary rounded-lg mx-auto animate-pulse" />
          <div className="h-4 w-72 bg-secondary rounded mx-auto animate-pulse" />
        </div>

        {/* Grid skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="rounded-xl border bg-card shadow-md overflow-hidden animate-pulse"
            >
              {/* Mockup skeleton */}
              <div className="p-4 bg-background-secondary">
                <div className="bg-gray-800 rounded-t-lg p-6">
                  <div className="w-full aspect-video bg-gray-700 rounded-sm" />
                </div>
                <div className="bg-gray-700 h-3 mx-1" />
                <div className="bg-gray-600 h-1.5 rounded-b-xl" />
              </div>
              {/* Content skeleton */}
              <div className="p-6 space-y-3">
                <div className="h-5 w-2/3 bg-secondary rounded" />
                <div className="h-4 w-full bg-secondary rounded" />
                <div className="h-4 w-4/5 bg-secondary rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
