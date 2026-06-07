export default function AboutLoading() {
  return (
    <section className="py-20 px-6 md:px-20">
      <div className="max-w-4xl mx-auto space-y-12 animate-pulse">
        {/* Title */}
        <div className="h-10 w-40 bg-secondary rounded mx-auto" />

        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-24 bg-secondary rounded-xl" />
          ))}
        </div>

        {/* Profile */}
        <div className="flex flex-col items-center gap-3">
          <div className="w-24 h-24 rounded-full bg-secondary" />
          <div className="h-4 w-32 bg-secondary rounded" />
          <div className="h-3 w-48 bg-secondary rounded" />
        </div>

        {/* Content grid */}
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-24 bg-secondary rounded-xl" />
            ))}
          </div>
          <div className="h-96 bg-secondary rounded-xl" />
        </div>
      </div>
    </section>
  );
}
