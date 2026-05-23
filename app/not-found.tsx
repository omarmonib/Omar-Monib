import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-8xl font-bold text-accent mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-foreground mb-4">Page Not Found</h2>
      <p className="text-muted-foreground max-w-md mb-8">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Button asChild size="lg" variant="custom">
        <Link href="/">Back to Home</Link>
      </Button>
    </section>
  );
}
