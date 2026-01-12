import { Badge } from '@/components/ui/badge';
import { ShoppingCart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ProjectsData } from '@/constants/projects';
import { notFound } from 'next/navigation';

interface ProjectDetailsPageProps {
  params: { slug: string } | Promise<{ slug: string }>;
}

export default async function ProjectDetailsPage({ params }: ProjectDetailsPageProps) {
  const { slug } = await params;
  const project = ProjectsData[slug as keyof typeof ProjectsData];

  if (!project) {
    notFound();
  }

  const { title, techs, features, shortDescription, fullDescription, whyItMatters } = project;

  return (
    <section className="max-w-5xl mx-auto py-16 px-6 space-y-12">
      {/* Project Title */}
      <div className="flex items-center gap-4">
        <ShoppingCart className="w-10 h-10 text-accent" />
        <h1 className="text-4xl font-bold text-foreground">{title}</h1>
      </div>

      {/* Short Description */}
      <Card className="bg-background border-border rounded-xl shadow-sm">
        <CardHeader>
          <CardTitle className="text-xl">🔹 Short Description</CardTitle>
        </CardHeader>
        <CardContent className="text-muted-foreground">{shortDescription}</CardContent>
      </Card>

      {/* Full Project Overview */}
      <Card className="bg-background border-border rounded-xl shadow-sm">
        <CardHeader>
          <CardTitle className="text-xl">🔹 Full Project Overview</CardTitle>
        </CardHeader>
        <CardContent className="text-muted-foreground">{fullDescription}</CardContent>
      </Card>

      {/* Key Features */}
      <Card className="bg-background border-border rounded-xl shadow-sm">
        <CardHeader>
          <CardTitle className="text-xl">✨ Key Features</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            {features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Tech Stack */}
      <Card className="bg-background border-border rounded-xl shadow-sm">
        <CardHeader>
          <CardTitle className="text-xl">🛠️ Tech Stack</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2">
          {techs.map((tech) => (
            <Badge key={tech} variant="outline">
              {tech}
            </Badge>
          ))}
        </CardContent>
      </Card>

      {/* Why This Project Matters */}
      <Card className="bg-background border-border rounded-xl shadow-sm">
        <CardHeader>
          <CardTitle className="text-xl">🏆 Why This Project Matters</CardTitle>
        </CardHeader>
        <CardContent className="text-muted-foreground">{whyItMatters}</CardContent>
      </Card>
    </section>
  );
}
