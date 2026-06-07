export default function ContactLoading() {
  return (
    <section className="min-h-screen py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto animate-pulse">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="h-12 w-48 bg-secondary rounded mx-auto" />
          <div className="h-4 w-80 bg-secondary rounded mx-auto" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact info skeleton */}
          <div className="space-y-8">
            <div className="h-8 w-48 bg-secondary rounded" />
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-secondary shrink-0" />
                <div className="space-y-2 flex-1">
                  <div className="h-4 w-24 bg-secondary rounded" />
                  <div className="h-3 w-40 bg-secondary rounded" />
                </div>
              </div>
            ))}
          </div>

          {/* Form skeleton */}
          <div className="rounded-2xl border bg-card p-10 space-y-6">
            <div className="h-8 w-48 bg-secondary rounded" />
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="space-y-2">
                <div className="h-3 w-24 bg-secondary rounded" />
                <div className={`bg-secondary rounded-md ${i === 2 ? 'h-32' : 'h-9'}`} />
              </div>
            ))}
            <div className="h-10 w-full bg-secondary rounded-md" />
          </div>
        </div>
      </div>
    </section>
  );
}
