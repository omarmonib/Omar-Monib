'use client';

import { HERO_CONTENT } from '@/constants/hero';
import HeroImage from '@/components/home/HeroImage';
import HeroContent from '@/components/home/HeroContent';


const HomeSection = () => {
  const { name, title, subtitle, description, tagline, cta, highlights } = HERO_CONTENT;

  return (
    <section className="min-h-[90vh] flex items-center relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col-reverse md:grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto px-6">
        <HeroContent
          name={name}
          title={title}
          subtitle={subtitle}
          description={description}
          tagline={tagline}
          cta={cta}
          highlights={highlights}
        />
        <HeroImage name={name} />
      </div>
    </section>
  );
};

export default HomeSection;
