'use client';

import Image from 'next/image';
import type { Project } from '@/types/project';
import { useTheme } from '@/hooks/useTheme';

export default function ProjectMockup({ project }: { project: Project }) {
  const { theme } = useTheme();

  const lightSrc = typeof project.image === 'string' ? project.image : project.image.light;
  const darkSrc = typeof project.image === 'string' ? project.image : project.image.dark;

  return (
    <div className="relative w-full group/mockup">
      <div className="relative mx-auto w-full">
        <div
          className={`relative rounded-t-lg pt-6 px-2 pb-1 shadow-2xl border ${
            theme === 'dark' ? 'bg-gray-900 border-gray-700' : 'bg-gray-200 border-gray-300'
          }`}
        >
          <div
            className={`absolute top-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full ${
              theme === 'dark' ? 'bg-gray-600' : 'bg-gray-400'
            }`}
          />

          <div className="flex items-center gap-1.5 mb-2 px-2">
            <div className="w-2 h-2 rounded-full bg-red-500/80" />
            <div className="w-2 h-2 rounded-full bg-yellow-500/80" />
            <div className="w-2 h-2 rounded-full bg-green-500/80" />
            <div
              className={`flex-1 ml-2 rounded-sm h-3 flex items-center px-2 ${
                theme === 'dark' ? 'bg-gray-700' : 'bg-gray-300'
              }`}
            >
              <span
                className={`text-[7px] truncate ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}
              >
                {project.liveUrl.replace('https://', '')}
              </span>
            </div>
          </div>

          <div className="relative w-full aspect-video overflow-hidden rounded-sm">
            {/* Light image */}
            <Image
              src={lightSrc}
              alt={project.title}
              fill
              priority
              sizes="(max-width: 640px) 100vw, 50vw"
              className={`object-cover object-top transition-all duration-700 group-hover/mockup:scale-105 ${
                theme === 'dark' ? 'opacity-0' : 'opacity-100'
              }`}
            />
            {/* Dark image */}
            <Image
              src={darkSrc}
              alt={project.title}
              fill
              priority
              sizes="(max-width: 640px) 100vw, 50vw"
              className={`object-cover object-top transition-all duration-700 group-hover/mockup:scale-105 ${
                theme === 'dark' ? 'opacity-100' : 'opacity-0'
              }`}
            />

            <div className="absolute inset-0 bg-background/80 backdrop-blur-sm opacity-0 group-hover/mockup:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-lg font-bold text-accent">{project.title}</span>
            </div>
          </div>
        </div>

        <div className="relative">
          <div
            className={`h-3 rounded-b-sm mx-1 border-x border-b ${
              theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-gray-300 border-gray-300'
            }`}
          />
          <div
            className={`h-1.5 rounded-b-xl mx-0 shadow-lg ${
              theme === 'dark' ? 'bg-gray-700' : 'bg-gray-400'
            }`}
          />
        </div>
      </div>
    </div>
  );
}
