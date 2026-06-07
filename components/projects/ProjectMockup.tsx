'use client';

import Image from 'next/image';
import type { Project } from '@/types/project';

// Lightweight base64 shimmer — works for any dynamic image path
const shimmer = (w: number, h: number) => `
  <svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="g">
        <stop stop-color="#1e293b" offset="20%" />
        <stop stop-color="#334155" offset="50%" />
        <stop stop-color="#1e293b" offset="70%" />
      </linearGradient>
    </defs>
    <rect width="${w}" height="${h}" fill="#1e293b" />
    <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
    <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite" />
  </svg>`;

const toBase64 = (str: string) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(unescape(encodeURIComponent(str)));

export default function ProjectMockup({
  project,
  priority = false,
}: {
  project: Project;
  priority?: boolean;
}) {
  return (
    <div className="relative w-full group/mockup">
      <div className="relative mx-auto w-full">
        {/* Screen bezel */}
        <div className="relative bg-gray-900 rounded-t-lg pt-6 px-2 pb-1 shadow-2xl border border-gray-700">
          {/* Camera dot */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-gray-600" />

          {/* Browser bar */}
          <div className="flex items-center gap-1.5 mb-2 px-2">
            <div className="w-2 h-2 rounded-full bg-red-500/80" />
            <div className="w-2 h-2 rounded-full bg-yellow-500/80" />
            <div className="w-2 h-2 rounded-full bg-green-500/80" />
            <div className="flex-1 ml-2 bg-gray-700 rounded-sm h-3 flex items-center px-2">
              <span className="text-gray-400 text-[7px] truncate">
                {project.liveUrl.replace('https://', '')}
              </span>
            </div>
          </div>

          {/* Screenshot */}
          <div className="relative w-full aspect-video overflow-hidden rounded-sm">
            <Image
              src={project.image}
              alt={`Screenshot of ${project.title}`}
              fill
              priority={priority}
              loading={priority ? 'eager' : 'lazy'}
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(800, 450))}`}
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover object-top transition-transform duration-700 group-hover/mockup:scale-105"
            />

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-background/80 backdrop-blur-sm opacity-0 group-hover/mockup:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-lg font-bold text-accent">{project.title}</span>
            </div>
          </div>
        </div>

        {/* Laptop base */}
        <div className="relative">
          <div className="bg-gray-800 h-3 rounded-b-sm mx-1 border-x border-b border-gray-700" />
          <div className="bg-gray-700 h-1.5 rounded-b-xl mx-0 shadow-lg" />
        </div>
      </div>
    </div>
  );
}
