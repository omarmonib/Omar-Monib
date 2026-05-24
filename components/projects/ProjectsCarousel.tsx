'use client';

import { motion } from 'framer-motion';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

import ProjectCard from './ProjectCard';
import { ProjectsData } from '@/constants/projects';
import type { Project } from '@/types/project';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export default function ProjectsCarousel() {
  const projects = Object.values(ProjectsData) as Project[];

  return (
    <motion.div variants={container} initial="hidden" animate="show">
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        className="w-full p-5 "
      >
        <CarouselContent>
          {projects.map((project) => (
            <CarouselItem key={project.id} className="basis-full sm:basis-1/2 lg:basis-1/3">
              <ProjectCard project={project} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          className="
    -left-6
    h-12 w-12
    bg-accent text-accent-foreground
    shadow-lg
    hover:bg-accent/90
  "
        />

        <CarouselNext
          className="
    -right-6
    h-12 w-12
    bg-accent text-accent-foreground
    shadow-lg
    hover:bg-accent/90
  "
        />
      </Carousel>
    </motion.div>
  );
}
