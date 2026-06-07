import { Badge } from '@/components/ui/badge';
import { ShoppingCart, ShoppingBag, BookOpen, User, ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { getProjectBySlug, getAllProjects } from '@/constants/projects';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { LucideIcon } from 'lucide-react';
import ProjectMockup from '@/components/projects/ProjectMockup';

const iconMap: Record<string, LucideIcon> = {
  'shopping-cart': ShoppingCart,
  'shopping-bag': ShoppingBag,
  'book-open': BookOpen,
  user: User,
};

interface ProjectDetailsPageProps {
  params: { slug: string } | Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllProjects().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: ProjectDetailsPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  return {
    title: project ? `${project.title} | Omar Monib` : 'Project Not Found',
    description: project?.shortDescription,
  };
}

export default async function ProjectDetailsPage({ params }: ProjectDetailsPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const { title, techs, features, shortDescription, fullDescription, whyItMatters, icon } = project;
  const Icon = iconMap[icon ?? 'user'] ?? User;

  return (
    <section className="max-w-5xl mx-auto py-16 px-6 space-y-10">
      {/* ── HEADER ── */}
      <div className="space-y-4">
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-accent transition-colors"
        >
          ← Back to Projects
        </Link>

        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-accent/10 border border-accent/20">
            <Icon className="w-6 h-6 text-accent" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">{title}</h1>
        </div>

        <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl">
          {shortDescription}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-3 pt-1">
          <Button asChild size="lg" variant="custom">
            <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </Link>
          </Button>
          <Button asChild size="lg" variant="customOutline">
            <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4" />
              GitHub Repo
            </Link>
          </Button>
        </div>
      </div>

      {/* ── MOCKUP ── */}
      <div className="w-full max-w-3xl mx-auto">
        <ProjectMockup project={project} />
      </div>

      {/* ── TECH STACK ── */}
      <div className="flex flex-wrap gap-2">
        {techs.map((tech) => (
          <Badge key={tech} variant="outline" className="text-sm px-3 py-1">
            {tech}
          </Badge>
        ))}
      </div>

      {/* ── CONTENT GRID ── */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Full Overview */}
        <Card className="md:col-span-2 bg-background border-border rounded-xl shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg">Project Overview</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground leading-relaxed">
            {fullDescription}
          </CardContent>
        </Card>

        {/* Key Features */}
        <Card className="bg-background border-border rounded-xl shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg">✨ Key Features</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2.5">
              {features.map((feature) => (
                <li key={feature} className="text-sm text-muted-foreground leading-relaxed">
                  {feature}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Why It Matters */}
        <Card className="bg-background border-border rounded-xl shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg">🏆 Why It Matters</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground leading-relaxed text-sm">
            {whyItMatters}
          </CardContent>
        </Card>
      </div>

      {/* ── BOTTOM CTA ── */}
      <div className="border-t border-border pt-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <p className="font-semibold text-foreground">Interested in working together?</p>
          <p className="text-sm text-muted-foreground">
            I&apos;m available for freelance and full-time roles.
          </p>
        </div>
        <div className="flex gap-3">
          <Button asChild variant="custom" size="lg">
            <Link href="/contact">Get in Touch</Link>
          </Button>
          <Button asChild variant="customOutline" size="lg">
            <Link href="/projects">All Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
