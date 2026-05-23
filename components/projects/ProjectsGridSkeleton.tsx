export default function ProjectsGridSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="rounded-xl border bg-card shadow-md overflow-hidden animate-pulse">
          <div className="w-full aspect-video bg-secondary" />
          <div className="p-6 space-y-3">
            <div className="h-5 w-2/3 bg-secondary rounded" />
            <div className="h-4 w-full bg-secondary rounded" />
            <div className="h-4 w-4/5 bg-secondary rounded" />
          </div>
        </div>
      ))}
    </div>
  );
}
