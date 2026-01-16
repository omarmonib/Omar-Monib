'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import { Card, CardContent, CardFooter } from '../ui/card';
import { Badge } from '../ui/badge';
import type { Project } from '@/types/project';
import { ExternalLink, Github, Eye } from "lucide-react";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      whileHover={{ y: 2, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="h-full"
    >
      <Card className="group rounded-xl border shadow-md h-full flex flex-col ">
        {/* IMAGE WRAPPER */}
        <div className="relative h-44 w-full overflow-hidden rounded-t-lg">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 flex items-center px-4 justify-center bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 gap-3">
            <div
              className="gap-2 flex flex-col scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300"
            >
              <Button asChild size="sm" variant="custom">
                <Link href={`/projects/${project.slug}`}><Eye className="w-4 h-4" /> View Project</Link>
              </Button>

              <Button asChild size="sm" variant="customOutline">
                <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </Link>
              </Button>
              <Button asChild size="sm" variant="customOutline">
                <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4" />
                  GitHub Repo
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <CardContent className="px-6 pb-6 pt-4 flex-1 flex flex-col">
          <h3 className="mb-2 text-xl font-bold text-accent">{project.title}</h3>
          <p className="mb-4 text-sm leading-relaxed flex-1 text-muted-foreground">
            {project.shortDescription}
          </p>
        </CardContent>
        <CardFooter>
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.tags.map((tag) => (
              <Badge key={tag} className="bg-secondary text-secondary-foreground">
                {tag}
              </Badge>
            ))}
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
