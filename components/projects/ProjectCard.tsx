'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '../ui/button';
import { Card, CardContent, CardFooter } from '../ui/card';
import { Badge } from '../ui/badge';
import type { Project } from '@/types/project';
import { ExternalLink, Github, Eye } from 'lucide-react';
import ProjectMockup from '@/components/projects/ProjectMockup';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="h-full"
    >
      <Card className="group rounded-xl border shadow-md flex flex-col h-full overflow-hidden">
        {/* MOCKUP + DESKTOP OVERLAY */}
        <div className="relative w-full pt-4 px-4 bg-background-secondary rounded-t-xl overflow-hidden">
          <ProjectMockup project={project} />

          {/* DESKTOP OVERLAY — covers full mockup area */}
          <div className="absolute inset-0 hidden md:flex items-center justify-center bg-background/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-t-xl">
            <div className="flex flex-col items-center gap-2 w-full max-w-50 scale-95 group-hover:scale-100 transition-transform duration-300">
              <Button asChild size="sm" variant="custom" className="w-full">
                <Link href={`/projects/${project.slug}`}>
                  <Eye className="w-4 h-4" /> View Project
                </Link>
              </Button>
              <Button asChild size="sm" variant="customOutline" className="w-full">
                <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4" /> Live Demo
                </Link>
              </Button>
              <Button asChild size="sm" variant="customOutline" className="w-full">
                <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4" /> GitHub Repo
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <CardContent className="px-4 sm:px-6 pb-4 pt-4 flex-1 flex flex-col">
          <h3 className="mb-2 text-lg sm:text-xl font-bold text-accent">{project.title}</h3>
          <p className="mb-4 text-sm sm:text-base leading-relaxed flex-1 text-muted-foreground">
            {project.shortDescription}
          </p>
        </CardContent>

        {/* TAGS */}
        <CardFooter className="px-4 sm:px-6 py-3 flex-col items-start gap-3">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge
                key={tag}
                className="bg-secondary text-secondary-foreground text-xs sm:text-sm px-2 py-1"
              >
                {tag}
              </Badge>
            ))}
          </div>

          {/* MOBILE CTAs */}
          <div className="flex gap-2 w-full md:hidden">
            <Button asChild size="sm" variant="custom" className="flex-1 gap-1">
              <Link href={`/projects/${project.slug}`}>
                <Eye className="w-3 h-3" /> View
              </Link>
            </Button>
            <Button asChild size="sm" variant="customOutline" className="flex-1 gap-1">
              <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-3 h-3" /> Live
              </Link>
            </Button>
            <Button asChild size="sm" variant="customOutline" className="flex-1 gap-1">
              <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="w-3 h-3" /> GitHub
              </Link>
            </Button>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
