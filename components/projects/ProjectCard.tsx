'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import { Card, CardContent, CardFooter } from '../ui/card';
import { Badge } from '../ui/badge';
import type { Project } from '@/types/project';

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
          <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition pointer-events-none group-hover:pointer-events-auto">
            <Button asChild size="lg" variant="custom">
              <Link href={`/projects/${project.slug}`}>View Project</Link>
            </Button>

            <Button asChild size="lg" variant="customOutline">
              <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                Live Demo
              </Link>
            </Button>
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
