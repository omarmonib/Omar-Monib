'use client';

import { HERO_CONTENT } from '@/constants/hero';
import HeroImage from './HeroImage';
import HeroContent from './HeroContent';

const HomeSection = () => {
  const { name, title, subtitle, description, tagline, cta, highlights } = HERO_CONTENT;

  return (
    <section className="min-h-[90vh] flex items-center">
      <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto px-6">
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
